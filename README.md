# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Sitemap dates and IndexNow

`npm run build` writes `public/sitemap.xml` first (`scripts/sitemap.mjs`, not committed). Each URL's `<lastmod>` is the date its page's source files (the page in `pages/` plus the components only it uses) last changed on `main`, read from git history. Never the build time. Add a page to `PAGES` in that script to put it in the sitemap.

Vercel builds from a shallow clone, so `scripts/lastmod.json` (committed) holds each source file's date, and the build takes the newer of that snapshot and the commits the clone can see. `npm run build` on a full clone refreshes it first; `npm run lastmod` refreshes it alone. Commit `scripts/lastmod.json` whenever it changes. If the Vercel build log says the snapshot is older than the clone's commits, run `npm run lastmod` and commit.

After each production build, `scripts/indexnow.mjs` submits pages whose lastmod changed to IndexNow (Bing and others) for www.rileysmailboxes.com and never fails the build. The key file is `public/<key>.txt`. By hand: `node scripts/indexnow.mjs --all` submits every URL in the live sitemap; `--urls <url>...` submits specific URLs; `--dry-run` prints what a build would submit.
