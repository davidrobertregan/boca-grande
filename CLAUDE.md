# Julie Horning author site

Multi-book children's-author site for Julie Horning. One repo, multiple book pages.
(Repo is still named `boca-grande`; the site is juliehorning.com.)

## Stack & deploy
- Vite + React 19 + Tailwind v4.
- Hosted on GitHub Pages via the Actions workflow in `.github/workflows/` — **push/merge to `main` auto-deploys**.
- Custom domain `juliehorning.com` declared in both root `CNAME` and `public/CNAME` (the build must emit `dist/CNAME`, so keep `public/CNAME`).
- Old domain `bisforbocagrande.com` → 301 forward to `juliehorning.com/boca` (GoDaddy domain forwarding, not DNS on this repo).
- Work in a feature branch → PR → merge to `main`. `main` is live.

## Routing
- `react-router` in `src/App.jsx`: `/` (Home hub), `/boca`, `/pickleball`.
- `src/components/ScrollToTop.jsx` resets scroll on route change.
- SPA deep-link support on GH Pages: `public/404.html` redirects unknown paths to `index.html`, which restores the path (rafgraph pattern). Deep links return HTTP 404 to non-JS clients (curl/crawlers) but load fine in browsers.
- `src/hooks/usePageTitle.js` sets per-route `<title>`.

## Content is data-driven — edit data, not components
- `src/data/books.js` — per-book config: `boca` and `pickleball`. Holds theme classes, copy (HTML strings), image paths + per-image class overrides, buy links, decorative `stickers`, author bio fields.
- `src/data/author.js` — shared author info; `bioWithMiddle(middleHtml)` composes intro + per-book middle + closing.
- Components (`Header`, `Hero`, `DescriptionAndHistory`, `AuthorSection`, `CallToAction`, `Footer`) are presentational and take `book`/`author` props. Pages in `src/pages/` wire data → components.
- **To add/adjust a book**: edit `books.js` (+ a page in `src/pages/` for a new book). Both books share the same components.
- Per-book overrides exist for: `theme.*`, hero `rowClass`/`coverWrapClass`/`cartImgClass`/`coverImgClass`, `description.imgClass`, `cta.imgClass`, `authorPhoto`/`authorPhotoClass`, `authorBioHtml` (full override) or `authorMiddleHtml` (middle paragraph only), `stickers[]`.

## Gotchas
- `src/data/books.js` contains stray non-breaking spaces (U+00A0) in some strings (e.g. a heading). Plain-text `Edit` matches will silently fail on those lines — verify with `grep`/`od -c`, and use `perl -CSD -i -pe` for byte-level replacements.
- `imagemin` may log a non-fatal `imagemin error:...` for some source images during build. Build still succeeds; ignore.
- The `gh` CLI in this environment is authenticated as a **work account** and lacks rights on this personal repo. GitHub UI actions (merge, Pages settings, repo rename) must be done manually by the owner in the browser.

## Known placeholders / TODO
- Pickleball author photo (`public/julie-pickle-ball.png`, transparent cutout) work may be uncommitted — wire via `books.pickleball.authorPhoto` + `authorPhotoClass`.
- Pickleball header uses styled text, not title-art PNG (`logoTextFallback`); swap in real logo art when available.
- Pickleball body copy is close-to-final but author may still revise.

## Commands
- `npm run dev` — local dev server (routes work natively; the 404 fallback only matters on GH Pages).
- `npm run build` — production build to `dist/`.
- `npm run lint` — eslint.
