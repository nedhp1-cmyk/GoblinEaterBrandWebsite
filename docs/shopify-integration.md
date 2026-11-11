# GOBLIN EATER — Shopify integration notes

This branch prepares the existing Figma Make / React storefront for commerce
without changing the current visual experience or adding a Shopify dependency.

## Current architecture

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Editorial artefact content and interactions currently live in `src/App.tsx`
- The current bag is a local demo counter, not a persistent cart or checkout
- Product prices and product imagery in the demo are placeholders

## Separation of responsibilities

- **Website:** artefact names, lore, classifications, universe colours, decorative
  elements and editorial storytelling.
- **Shopify:** canonical product records, prices, currency, options, variants,
  availability, cart and checkout.
- **Printify:** garment production and fulfilment after a real Printify product
  is connected to a Shopify product.

The mapping in `src/data/commerce.ts` joins the stable local artefact IDs to
future Shopify products. Do not invent Shopify IDs or variant data: populate
these only after creating the corresponding products.

## Current artefact handles

| Local artefact ID | Handle |
| --- | --- |
| bog | bog-dweller |
| knight | no-saints |
| slime | gutter-slime |
| oracle | oracle-error |
| zine | the-eater |
| tavern | last-call |

## Recommended integration sequence

1. Create the Shopify store and configure market, GBP pricing, tax, shipping,
   policies and payments.
2. Install the Shopify Headless sales channel and create a Storefront API
   token with only the required unauthenticated storefront permissions.
3. Add environment variables to the deployment platform (never commit secrets):
   - `VITE_SHOPIFY_STORE_DOMAIN`
   - `VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN`
   - `VITE_SHOPIFY_API_VERSION`
4. Add a small Shopify client module that fetches products by handle and
   normalises Shopify product/variant data into the commerce types.
5. Replace the demo bag counter with a cart backed by Shopify's Storefront API.
   Persist the cart ID safely and use Shopify's returned checkout URL.
6. Connect Printify to Shopify and publish verified products/variants. Map
   real provider product IDs only when they exist.
7. Test the complete order flow, fulfilment, shipping rates, taxes, refunds and
   customer emails before launch.

## Important safeguards

- Never put Shopify Admin API credentials or Printify API secrets in browser
  code. A `VITE_*` variable is exposed to the client.
- The Storefront API token is intended for storefront use; keep Admin API
  operations server-side.
- Do not display fabricated stock counts, limited-edition quantities, prices
  or shipping promises as live facts.
- Keep the current design and default branch unchanged until the integration
  has been reviewed and tested.
