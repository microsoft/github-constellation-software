# GitHub @ CSI repository instructions

## Commands

- Use Node.js 22, matching the GitHub Actions workflows.
- Install the locked dependencies with `npm ci`.
- Start the local Vite server with `npm run dev`.
- Validate the visual contract with `npm run design:lint`.
- Run the production validation with `npm run build`. This runs
  `tsc --noEmit` before the Vite multi-page build.
- Run only the TypeScript check with `npm run typecheck`.
- Preview the generated `dist/` artifact with `npm run preview`.
- No test runner or general source-lint script is currently configured, so
  there is no single-test command. `design:lint` validates only `DESIGN.md`.
  Do not invent test or lint commands; use the documented checks unless the
  repository adds a runner.

## Architecture

This is a static, README-driven React site deployed to GitHub Pages.

- `DESIGN.md` is the project-specific visual contract. Read it before changing
  UI, CSS, layout, responsive behavior, or visual components. It is normative
  unless it conflicts with a Primer component API or accessibility guidance.
- The canonical page content lives in four Markdown files:
  `README.md`, `build-days/README.md`, `csi-pricing/README.md`, and
  `usage-based-billing/README.md`. Keep them useful when viewed directly on
  GitHub; the Pages site enhances the same content rather than maintaining a
  separate copy.
- `src/content.ts` imports those READMEs with Vite's `?raw` loader and is the
  central registry for page IDs, routes, labels, descriptions, source paths,
  and table-of-contents extraction.
- Each public route has its own HTML entry point. Its `<body>` supplies
  `data-page` and `data-site-root`; `src/App.tsx` uses those values to select
  content and construct project-relative URLs.
- `vite.config.ts` declares every HTML entry under
  `build.rollupOptions.input`. `base: './'` is required so assets resolve
  under the `/github-constellation-software/` GitHub Pages project path.
- `src/App.tsx` is the shared Primer shell. It owns navigation, theme
  persistence, Markdown rendering, link/image normalization, heading anchors,
  tables of contents, and deep-link scrolling.
- `src/main.tsx` loads Primer primitives, Primer Markdown styles, and the
  repository-specific styles from `src/styles.css`.
- Pull requests run `.github/workflows/ci.yml`; pushes to `main` build and
  deploy `dist/` through `.github/workflows/deploy-pages.yml`.

## Adding or changing pages

When adding a top-level page, update all coupled surfaces in the same change:

1. Add the page's README content and route-level `index.html`.
2. Add its `PageId`, import, route metadata, and `sourcePath` in
   `src/content.ts`.
3. Add the HTML entry to `vite.config.ts`.
4. Add the page to `navigationItems` and, if needed, internal route matching
   in `src/App.tsx`.
5. Build and confirm the expected `dist/<route>/index.html` exists.

The page HTML files should keep route-specific titles/descriptions, use
`data-site-root="../"` for nested pages, and reference `../favicon.svg`.

## Markdown and content conventions

- Prefer content-only changes in the relevant README over hard-coding page
  copy in React.
- Format resource entries as:
  `**Resource name** — one-line description. [Link](https://example.com)`.
- This is a public resource hub. Authenticated links are exceptional: label
  the sign-in requirement explicitly and pair them with a public alternative
  or enough public context to remain useful.
- `react-markdown` renders GFM, then raw HTML, sanitization, and GitHub-style
  heading slugs. If README HTML needs a new attribute, deliberately extend
  `markdownSchema` in `src/App.tsx`; do not bypass sanitization.
- The table of contents includes level-two Markdown headings and uses
  `github-slugger`. Preserve GitHub-compatible heading text so README anchors,
  Pages deep links, and generated TOCs agree.
- Repository-relative `.md` links are normalized to GitHub source links;
  links to the dedicated Pages routes are normalized to site-relative URLs.
  Update `normalizeHref` when introducing a new top-level route.
- Put local content images under `images/` and reference them relatively from
  Markdown. `import.meta.glob` in `src/App.tsx` bundles those images for
  Pages. Do not edit generated files in `dist/`.

## UI conventions

- Use this implementation hierarchy:
  1. Reuse a supported Primer React component and its documented variants.
  2. Use Primer Primitives functional CSS variables for visual roles.
  3. Use an Octicon from `@primer/octicons-react` for interface iconography.
  4. Add project CSS only when Primer has no fitting component or pattern.
- Do not use Primer base color scales directly, introduce another design
  framework, hand-author interface SVGs, or use emoji as control icons.
- Keep custom layout and responsive behavior in `src/styles.css`, following
  the token roles and guardrails in `DESIGN.md`.
- Page-specific styling is scoped with `page-<PageId>` classes on the root.
- Preserve system/light/dark theme behavior and the
  `github-csi-color-mode` local-storage key.
- Desktop uses the sticky sidebar and page TOC; mobile uses horizontally
  scrollable primary navigation and a collapsible page TOC. Check both layouts
  when changing navigation, tables, headings, or images.
- Keep external links opening in a new tab with `rel="noreferrer"` and retain
  accessible labels/current-page state for navigation and heading anchors.
- For every UI change, review all affected routes in light and dark modes at
  narrow (below 768px), regular, and wide (1280px+) viewports. Check keyboard
  focus, current-page state, readable line length, image aspect ratios,
  horizontal table overflow, and `prefers-reduced-motion`.

## Validation and delivery

- Commit `package-lock.json` whenever dependencies change and verify with
  `npm ci`.
- Run `npm run design:lint` whenever `DESIGN.md` changes.
- Run `npm run build` before completing any code, route, dependency, or
  workflow change.
- For content-only changes, verify relative links, heading anchors, image
  paths, and any access labels affected by the edit.
- Do not hand-edit or commit `dist/`; GitHub Actions generates and deploys it.
