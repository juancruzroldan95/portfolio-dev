# Bitacory thumbnail

Tool: built-in `image_gen.imagegen` (compositing edit).

Final asset: `public/projects/bitacory.webp`.

Inputs: the previous teal thumbnail and fresh captures of the journal and AI companion tabs in `#experiencia` at https://bitacory.space/. Captured in light mode at a 1440 × 1100 viewport with device scale 2 and animations disabled.

The thumbnail illustrates a journal note and an AI chat connected by a note mention. Its sample copy is shortened from the showcase for legibility at card size.

The generated PNG was converted to WebP at quality 85. The portfolio uses `object-contain` to keep the complete composition visible.

## Final prompt

```text
Use case: compositing.
Asset type: finished portfolio thumbnail, landscape 3:2, 1536x1024, optimized to remain clear at 430x288 pixels.
Primary request: revise the current Bitacory thumbnail to illustrate the actual app experience using a personal note and an AI chat together, based on the #experiencia showcase of bitacory.space.
Input images: Image 1 is the existing thumbnail and the EDIT TARGET; preserve its rich midnight-teal background, soft cyan glow, large white serif "Bitacory" wordmark and teal open-book mark at the top. Image 2 is the actual #experiencia journal panel: reference for note typography, tag pills, subtle borders and note content. Image 3 is the actual #experiencia AI conversation: reference for teal user bubbles, pale assistant bubbles, small open-book avatar, note mentions and chat composer.
Change the main subject: replace the entire landing-page browser window with TWO substantial floating app UI cards, a personal journal NOTE on the left and slightly behind, and an AI CHAT on the right and slightly in front, with only modest overlap so both remain easily understood. Cards occupy the lower 75% of the frame, with rounded white/off-white surfaces, fine light borders, gentle dimensional shadows and nearly frontal perspective. Each should be readable as an intentional illustrated interface, not tiny screenshots. Make the CHAT and NOTE the main focus. Keep generous internal spacing, the note's elegant serif body, teal highlights and the chat's clean typography matching the references.
Note card, exact visible text: header "Mi diario", small tag "#claridad", title "Superar el perfeccionismo", body "Hoy el éxito es avanzar." followed by "Tolerar la incomodidad de estar aprendiendo.", and subtle bottom status "Guardado".
Chat card, exact visible text: header "Copiloto IA"; a small visible attached-note pill "@Superar el perfeccionismo"; teal user bubble "¿Cómo puedo pasar a la acción hoy?"; a pale assistant bubble with the small Bitacory open-book avatar and response "Probá la regla del 80% listo: avanzá 30 minutos y compartí tu progreso."; bottom composer "Escribí tu reflexión..." with a small teal send arrow.
Typography hierarchy: prominent brand at top, clear card headings, large limited text, avoid dense microtext. Make the two cards and the note mention clearly show how writing connects to the conversation. Match the sophisticated calm product-mockup quality of image 1.
Invariants: keep Bitacory spelled B-i-t-a-c-o-r-y, the teal open-book identity and existing atmospheric dark-teal style. Keep both cards and the logo fully inside the canvas with 6–8% outer safe margins.
Avoid: website landing page, hero headline, marketing navigation, call-to-action buttons, URL browser bars, dashboards, goals charts, people, hands, device hardware, props, noisy decoration, extra slogans, technology logos or watermark. This is one finished polished opaque image, not multiple design options.
```
