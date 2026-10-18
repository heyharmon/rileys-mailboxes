// IndexNow for Riley's Mailboxes: tell Bing, and the other search engines that share IndexNow, which
// pages changed after a production deploy. Runs after `nuxt build` (see the build script in
// package.json) and never fails the build. Adapted from dog-wash-directory/scripts/indexnow.mjs.
//
// The pages are rendered on request, so there is no built HTML to hash. A page counts as changed when
// its <lastmod> in public/sitemap.xml (written by scripts/sitemap.mjs from git history) differs from
// the live deploy's. The key file is committed in public/.
//
// Every run writes indexnow-state.json (each URL's lastmod) into the build's static output. A Vercel
// production build with a non-empty sitemap also fetches the live site's indexnow-state.json (the
// previous deploy) and submits the URLs that are new or changed to https://api.indexnow.org/indexnow
// (every URL when there is no live state), then records the submission's HTTP status, URL count and
// time as last_submission in the served state. A build that submits nothing carries the live one
// forward. The submission goes out before Vercel promotes the deployment, so it only happens once
// the key file is already live from an earlier deploy; after the first deploy, run --all by hand.
//
// By hand:
//   node scripts/indexnow.mjs --all            submit every URL in the live sitemap
//   node scripts/indexnow.mjs --urls <url>...  submit specific URLs
//   node scripts/indexnow.mjs --dry-run        build mode, but print instead of submitting
// The hand modes exit 1 unless IndexNow answers 200 (submitted) or 202 (received, key check pending).
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ORIGIN = 'https://www.rileysmailboxes.com';
// One key per site, public by design: IndexNow verifies it by fetching <origin>/<key>.txt.
const KEY = '369e4fe987d0502568eb1f687ae06da3';
const SITEMAP = 'public/sitemap.xml';
// Nitro's static output: the Vercel preset on Vercel, the node preset locally.
const DIST = ['.vercel/output/static', '.output/public'].find(d => existsSync(d));
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const args = process.argv.slice(2);
const flag = f => args.includes(f);
const log = (...m) => console.log('IndexNow:', ...m);

async function submit(urls, { strict }) {
  const host = new URL(ORIGIN).host;
  let worst = 0, last = null;
  for (let i = 0; i < urls.length; i += 10000) {
    const urlList = urls.slice(i, i + 10000);
    let status;
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList }),
        signal: AbortSignal.timeout(30000),
      });
      status = res.status;
    } catch (e) {
      status = `request failed (${e.message})`;
    }
    const ok = status === 200 || status === 202;
    log(`${ok ? 'accepted' : 'NOT accepted'} ${urlList.length} URL${urlList.length === 1 ? '' : 's'} for ${host}, HTTP ${status}${status === 403 ? ' (key not validated yet, or the key file is wrong: check it, then retry later)' : ''}`);
    if (!ok) worst = 1;
    if (!last || last.accepted) last = { at: new Date().toISOString(), status, accepted: ok, urls: urlList.length };
  }
  if (worst && strict) process.exit(1);
  return last;
}

async function fetchText(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
    return res.ok ? await res.text() : null;
  } catch { return null; }
}

const locs = xml => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

const lastmods = xml => Object.fromEntries([...xml.matchAll(/<loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?/g)].map(m => [m[1], m[2] || 'none']));

if (flag('--urls')) {
  const urls = args.slice(args.indexOf('--urls') + 1).filter(u => u.startsWith(ORIGIN + '/') || u === ORIGIN);
  if (!urls.length) { log(`--urls needs absolute URLs on ${ORIGIN}`); process.exit(1); }
  await submit(urls, { strict: true });
} else if (flag('--all')) {
  const xml = await fetchText(`${ORIGIN}/sitemap.xml`);
  const urls = xml ? locs(xml) : [];
  if (!urls.length) { log(`the live sitemap at ${ORIGIN}/sitemap.xml lists no URLs`); process.exit(1); }
  await submit(urls, { strict: true });
} else {
  // Build mode.
  try { await buildMode(); } catch (e) { log(`skipped after an error, the build continues: ${e.stack || e.message}`); }
}

async function buildMode() {
  if (!DIST) { log('no Nitro output directory, nothing written'); return; }
  const pages = lastmods(await readFile(SITEMAP, 'utf8'));
  const urls = Object.keys(pages);
  const state = { generated: new Date().toISOString(), pages, last_submission: null };
  const writeState = () => writeFile(path.join(DIST, 'indexnow-state.json'), JSON.stringify(state, null, 1));
  await writeState();
  log(`wrote ${DIST}/indexnow-state.json for ${urls.length} sitemap URL${urls.length === 1 ? '' : 's'}`);
  const production = process.env.VERCEL_ENV === 'production';
  const liveKey = (production || flag('--dry-run')) && urls.length ? (await fetchText(`${ORIGIN}/${KEY}.txt`))?.trim() : null;
  if (!urls.length || !(production || flag('--dry-run'))) {
    log(urls.length ? 'not a Vercel production build, nothing submitted' : 'empty sitemap, nothing submitted');
  } else if (liveKey !== KEY) {
    log(`the key file is not live yet at ${ORIGIN}/${KEY}.txt (first deploy?), nothing submitted; after this deploy run: node scripts/indexnow.mjs --all`);
  } else {
    let liveState = null;
    try { liveState = JSON.parse(await fetchText(`${ORIGIN}/indexnow-state.json`)); } catch { liveState = null; }
    const live = liveState?.pages || null;
    state.last_submission = liveState?.last_submission || null;
    const changed = live ? urls.filter(u => live[u] !== pages[u]) : urls;
    log(live ? `${changed.length} of ${urls.length} URLs are new or changed since the live deploy` : `no live state at ${ORIGIN}/indexnow-state.json, submitting every sitemap URL`);
    if (!changed.length) log('nothing to submit');
    else if (flag('--dry-run')) { log('dry run, would submit:'); for (const u of changed.slice(0, 20)) console.log('  ' + u); if (changed.length > 20) console.log(`  ... and ${changed.length - 20} more`); }
    else state.last_submission = await submit(changed, { strict: false });
    log(state.last_submission ? `last submission: HTTP ${state.last_submission.status}, ${state.last_submission.urls} URLs, ${state.last_submission.at}` : 'no submission recorded yet');
    await writeState();
  }
}
