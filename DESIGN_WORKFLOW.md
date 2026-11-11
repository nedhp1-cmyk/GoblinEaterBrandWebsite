# GOBLIN EATER design workflow

This project uses a hybrid workflow: Figma for creative work, GitHub for asset
versioning, and the existing React/Vite site for the live storefront.

## The tools and their jobs

- **Figma:** create and organise illustrations, sticker sheets, logos, labels,
  textures, page mockups and reusable design components.
- **Illustrator / Photoshop (optional):** create or finish detailed vector and
  raster artwork before bringing it into Figma.
- **GitHub:** keep the source artwork and website changes together, with a
  reviewable history and separate development branches.
- **React + Vite:** render the custom storefront. Keep the existing visual
  identity and bespoke CSS; do not rebuild it as a generic theme.
- **Optional visual CMS:** consider Builder.io only if direct, non-technical
  editing of page content and layout becomes important. Evaluate its plan,
  setup and editing limits before committing to it.

## Figma file structure

Create one Figma file named `GOBLIN EATER — Art Department` with these pages:

1. `00 — Brand system`: wordmark, colours, typography, marks and rules.
2. `01 — Sticker archive`: individual sticker components and sticker sheets.
3. `02 — Creature archive`: monsters, characters, sigils and illustrations.
4. `03 — Artefact graphics`: product-specific front/back artwork and labels.
5. `04 — Web components`: navigation, buttons, product cards, badges and layouts.
6. `05 — Experiments`: work in progress; not approved for the website.

Use Figma components for repeated items (badges, stamps, labels, navigation
elements). Keep artwork separate from text that needs to remain editable in the
website.

## Export rules

- **SVG:** logos, icons, simple vector stickers and illustrations.
- **PNG with transparency:** textured, painted, distressed or layered artwork.
- **WebP / AVIF:** photographic product images and large backgrounds after
  optimisation.
- Keep important text as HTML where possible instead of baking it into an image.
- Export one asset per file when it needs to be independently positioned,
  replaced, animated or reused.
- Avoid exporting an entire product page as one flat image.

## File naming

Use lowercase kebab-case and include the artefact ID:

- `bog-dweller-creature.svg`
- `bog-sticker-keep-out.svg`
- `no-saints-error-window.png`
- `gutter-slime-drip.svg`
- `oracle-error-terminal-grid.svg`
- `shared-goblin-eater-sigil.svg`

## Adding an asset

1. Design the artwork in Figma.
2. Export it in the appropriate format.
3. Put it in the matching folder under `src/assets/`.
4. Update the relevant artwork reference in the website.
5. Check the desktop and mobile layouts.
6. Commit the change to a feature branch and review the preview before merging.

## Editing the site visually

Start with Figma for page and component design. For routine content edits, we
should keep product and artefact copy in structured data rather than scattering
it through JSX. A visual CMS such as Builder.io can be evaluated as a later
optional layer for non-technical page editing; it is not required for replacing
artwork and it should not own Shopify price, stock or checkout data.

## Guardrails

- Never edit `main` directly; use feature branches and pull requests.
- Keep a source copy of original artwork in Figma.
- Never overwrite an existing asset until the replacement has been reviewed.
- Do not store secrets, API tokens or credentials in the repository.
- Do not put prices, stock counts or variant availability in decorative artwork.
