import type { ArtifactCommerceRecord } from "../types/commerce";

/**
 * Shopify-ready identifiers for the current editorial artefacts.
 *
 * These are integration placeholders, not live Shopify products. Add real
 * Shopify and Printify IDs only after creating and verifying those products.
 * Keep the visual/lore content in App.tsx independent from commerce records.
 */
export const artifactCommerce: ArtifactCommerceRecord[] = [
  {
    artifactId: "bog",
    handle: "bog-dweller",
    shopifyProductId: null,
    status: "draft",
    variants: [],
    printifyProductId: null,
  },
  {
    artifactId: "knight",
    handle: "no-saints",
    shopifyProductId: null,
    status: "draft",
    variants: [],
    printifyProductId: null,
  },
  {
    artifactId: "slime",
    handle: "gutter-slime",
    shopifyProductId: null,
    status: "draft",
    variants: [],
    printifyProductId: null,
  },
  {
    artifactId: "oracle",
    handle: "oracle-error",
    shopifyProductId: null,
    status: "draft",
    variants: [],
    printifyProductId: null,
  },
  {
    artifactId: "zine",
    handle: "the-eater",
    shopifyProductId: null,
    status: "draft",
    variants: [],
    printifyProductId: null,
  },
  {
    artifactId: "tavern",
    handle: "last-call",
    shopifyProductId: null,
    status: "draft",
    variants: [],
    printifyProductId: null,
  },
];

/** Find the commerce mapping for an editorial artefact. */
export function getArtifactCommerce(artifactId: string) {
  return artifactCommerce.find((record) => record.artifactId === artifactId) ?? null;
}
