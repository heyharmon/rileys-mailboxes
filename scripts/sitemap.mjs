// Writes public/sitemap.xml before `nuxt build`. Each URL's <lastmod> is the date its page's source
// files (the page in pages/ and the components only it uses; the shared header, footer and hero are
// left out) last changed on main, read from git history. Never the build time; a URL with no known
// date gets no <lastmod>. History is read with --first-parent, so a date is the day the change
// landed on main (the merge or squash commit), not the day it was written on a branch.
//
// Vercel builds from a shallow clone, so scripts/lastmod.json, committed, holds each source file's
// date as of the last `npm run lastmod`; the build takes the newer of that snapshot and the commits
// the clone can see, and says so in the build log if the snapshot is older than those commits.
// `npm run build` on a full clone refreshes the snapshot first, so commit it when it changes.
//
//   node scripts/sitemap.mjs             write public/sitemap.xml
//   node scripts/sitemap.mjs --snapshot  refresh scripts/lastmod.json from the full history
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ORIGIN = 'https://www.rileysmailboxes.com';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SNAPSHOT = 'scripts/lastmod.json';
const TRACKED = ['pages', 'components'];
// The sitemap's pages and their sources. /book-success is a post-booking page and stays out.
const PAGES = {
  '/': ['pages/index.vue', 'components/ChooseMailbox.vue', 'components/ChoosePost.vue', 'components/ChooseAddons.vue',
    'components/Feature.vue', 'components/HowItWorks.vue', 'components/CtaSection.vue'],
  '/about': ['pages/about.vue', 'components/CtaSection.vue'],
  '/book': ['pages/book.vue'],
  '/contact': ['pages/contact.vue'],
};

const log = (...m) => console.log('sitemap:', ...m);
const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 << 20 });
const newer = (a, b) => (!a ? b : !b ? a : Date.parse(a) >= Date.parse(b) ? a : b);

function readHistory() {
  let shallow;
  try { shallow = git('rev-parse', '--is-shallow-repository').trim() === 'true'; } catch { return { dates: {}, shallow: true, seen: 0, nogit: true }; }
  const boundary = new Set();
  if (shallow) {
    const file = path.resolve(ROOT, git('rev-parse', '--git-path', 'shallow').trim());
    if (existsSync(file)) for (const h of readFileSync(file, 'utf8').split('\n')) if (h) boundary.add(h);
  }
  const dates = {};
  let date = null, seen = 0;
  const out = git('log', '--first-parent', '--diff-merges=first-parent', '--no-renames', '--name-only', '--format=@%H %cI', 'HEAD', '--', ...TRACKED, SNAPSHOT);
  for (const line of out.split('\n')) {
    if (line.startsWith('@')) {
      const [hash, iso] = line.slice(1).split(' ');
      // A shallow clone's oldest commit has no parent, so it looks like it added every file: skip it.
      date = boundary.has(hash) ? null : iso;
      if (date) seen++;
    } else if (line && date && !dates[line]) dates[line] = date;
  }
  return { dates, shallow, seen, nogit: false };
}

const { dates, shallow, seen, nogit } = readHistory();

if (process.argv.includes('--snapshot')) {
  if (shallow) { log(`${nogit ? 'no git history here' : 'shallow clone'}, ${SNAPSHOT} left as committed`); process.exit(0); }
  const files = [...new Set(Object.values(PAGES).flat())].filter(f => dates[f]).sort();
  const next = JSON.stringify(Object.fromEntries(files.map(f => [f, dates[f]])), null, 1) + '\n';
  const file = path.join(ROOT, SNAPSHOT);
  if ((existsSync(file) ? readFileSync(file, 'utf8') : '') !== next) { writeFileSync(file, next); log(`wrote ${SNAPSHOT}`); }
  else log(`${SNAPSHOT} is current`);
  process.exit(0);
}

let known = dates;
if (shallow) {
  let snapshot = {};
  try { snapshot = JSON.parse(readFileSync(path.join(ROOT, SNAPSHOT), 'utf8')); } catch { log(`no ${SNAPSHOT}`); }
  if (!nogit && !dates[SNAPSHOT]) log(`WARNING: ${SNAPSHOT} was last refreshed before the ${seen} commits this shallow clone can see, so pages changed in between may show an older date. Run \`npm run lastmod\` on a full clone and commit it.`);
  known = { ...snapshot };
  for (const [f, d] of Object.entries(dates)) known[f] = newer(known[f], d);
  log(nogit ? `no git history here, dates come from ${SNAPSHOT}` : `shallow clone: ${SNAPSHOT} plus ${seen} visible commit${seen === 1 ? '' : 's'}`);
}

const urls = Object.entries(PAGES).map(([p, files]) => {
  let lastmod;
  for (const f of files) lastmod = newer(lastmod, known[f]);
  const loc = p === '/' ? `${ORIGIN}/` : ORIGIN + p;
  return `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`;
});
writeFileSync(path.join(ROOT, 'public/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
log(`wrote public/sitemap.xml (${urls.length} URLs)`);
