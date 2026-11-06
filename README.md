# Working Volumes — CompleteShelfLandingPage

The complete Working Volumes bookshelf page, integrated with its authored
Three.js presentation and the configured `CompleteShelfLandingPage` typography
props.

## Run

```bash
npm install
npm run dev
```

Open the printed local URL (default `http://127.0.0.1:5173/`).

Production build:

```bash
npm run build
npm run preview
```

## Integration

`src/Scene.tsx` uses the configured package entry exactly:

```tsx
import { CompleteShelfLandingPage } from "@designcodeio/threeui/components/CompleteShelfLandingPage";
import "@designcodeio/threeui/style.css";

<CompleteShelfLandingPage
  headingFont="iowan-old-style"
  bodyFont="inter"
  headingWeight="400"
  bodyWeight="400"
  primaryColor="#c87046"
  headingSize={60}
  bodySize={12}
  headingLetterSpacing={-0.055}
/>
```

The component loads the canonical page from
`public/landing-pages/complete-shelf-v2.html` and injects the typography
customization into that document at runtime. The page keeps its own authored
Three.js r165 scene, shaders, geometry, motion, click/drag/wheel/keyboard
interactions, responsive rules, and the inlined cover/wood textures.

The subpath import is the same published `CompleteShelfLandingPage`; it avoids
the package root barrel, which loads every component and pulls two extra Three.js
copies into the app. This keeps the dev console and production build clean.

## Source provenance

The canonical page is the registered artifact, byte for byte:

| File | SHA-256 |
| --- | --- |
| `public/landing-pages/complete-shelf-v2.html` | `606f200fed8602c243f40a11c8c364f0e625c57f80e7c97dc76419da207f198e` |
| `src/shaders/landing-pages/LandingPages.tsx` | `4d379461ad00eb4de7900df312878035383de7e1ed4e13283b8143a2eea9d30a` |
| `src/shaders/landing-pages/LandingPageFrame.tsx` | `61de2cc50888aac4ac5557420b07fa47ed3543bb57c1e0055fafdefa53dbaa78` |
| `src/shaders/threeui.css` | `efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf` |

The registered source files are kept for provenance. The runtime component is
the published `@designcodeio/threeui@1.2.0` build of the same component and
recipe, which is what the configured usage imports. Those site-build sources
import modules from the full ThreeUI repository, so `src/shaders` is excluded
from the local typecheck; the app surface itself typechecks cleanly.

The canonical page was taken from the published package artifact because the
live `/landing-pages/complete-shelf-v2.html` URL currently serves a 189 KB
variant. The package copy matches the registered revision exactly (900,296
bytes, SHA-256 above), including the inlined cover atlas and wood texture.

## Verified in the browser

- WebGL 2 scene renders at the viewport size (1440 × 900 and 390 × 844 checked).
- Typography customization is applied inside the frame: Iowan Old Style heading
  stack, Inter body stack, `#c87046` accent, 60/12 px recipe limits, and
  `-0.055em` heading tracking.
- Seven-volume index, hover labels, wheel navigation, arrow-key navigation,
  previous/next buttons, canvas click to open, Open/Close book, page turning,
  reset view, and detail close all drive the authored state.
- Failed request check: only the browser's automatic `/favicon.ico` request,
  now answered by the inline SVG icon.
