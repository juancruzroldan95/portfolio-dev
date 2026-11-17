# Estudio Enzetti thumbnail

Tool: built-in `image_gen.imagegen` (compositing edit).

Final asset: `public/projects/estudio-enzetti.webp`.

Inputs: the Estudio Enzetti website screenshot and `public/projects/hardy.webp` as the reference for the macOS Safari frame and night-desert background.

The generated PNG was converted to WebP at quality 85. The portfolio uses `object-contain` to keep the complete frame visible.

## Final prompt

```text
Use case: compositing.
Asset type: a single finished portfolio thumbnail for Estudio Enzetti, landscape 3:2, approximately 1536x1024.
Primary request: add a macOS Safari-style browser frame around the existing Estudio Enzetti website screenshot, matching the older Hardy portfolio thumbnail.
Input images: Image 1 is the Estudio Enzetti website screenshot, the content to preserve. Image 2 is the old Hardy thumbnail, the visual style reference for the browser frame, subtle shadow, centered mockup and dark macOS desert-at-night wallpaper.
Composition: place Image 1 inside one nearly front-facing macOS Safari window with a dark charcoal title bar, red/yellow/green traffic lights at upper left, subtle navigation icons and a narrow centered address field displaying exactly "estudioenzetti.com". Use gently rounded corners and a realistic soft drop shadow. Center the window over a tasteful deep navy macOS-like night-desert background with soft dunes, matching Image 2. Keep the complete browser frame inside the canvas and make it large, about 80% of the canvas width, with comfortable outer margins. The browser should be the single focal subject.
Critical invariants: preserve the screenshot content, actual layout, Estudio Enzetti logo, Spanish typography, colors, green buttons, and the exact identity and appearance of the woman in the existing video poster. Treat Image 1 as an unmodified screenshot inserted into the frame; do not redesign or rewrite the website. Keep the top navigation and hero visible; trim only the bottom gray strip if required by aspect ratio. The page headline must remain "¿Tuviste un accidente de trabajo?". The frame and surrounding wallpaper are the only requested changes.
Avoid: Hardy branding or Hardy website content, extra marketing text, floating UI cards, laptop or phone hardware, hands, additional people, extra logos, watermarks, strong perspective, bent screens, visual noise, or multiple options. Opaque final raster thumbnail with polished understated mockup quality, legible and coherent when displayed at 430x288 pixels.
```
