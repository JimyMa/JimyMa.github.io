# JimyMa.github.io

Personal homepage built with React and Material UI. The editable source was recovered
from the source maps of the previously deployed site; the visual layout, theme, and
published content are retained.

Current release: **v0.2.0**

## Development

```bash
npm ci
npm start
```

Create the same optimized output used by GitHub Pages with:

```bash
npm run build
```

## Source layout

```text
src/
├── assets/       Images imported by React components
├── components/   Homepage content and layout
├── styles/       Material UI theme and component styles
├── App.js        Router and top-level providers
└── index.js      Browser entry point
public/           Static files copied into the build unchanged
```

Edit content under `src/`; do not commit files generated in `build/`. On every push to
`main`, `.github/workflows/deploy-pages.yml` installs the locked dependencies, builds
the app, and deploys the result with GitHub's official Pages Actions. Pull requests run
the same build without publishing.

## Recovery note

The previous repository contained only minified deployment files. The source files in
this repository were reconstructed from their embedded source maps. The old build is
still available in Git history if an exact byte-for-byte comparison is needed.
