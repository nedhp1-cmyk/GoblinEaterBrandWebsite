/**
 * Commerce contracts for the GOBLIN EATER storefront.
 *
 * Keep editorial/artifact content in the website and live price, availability,
 * variant and checkout data in Shopify once the store is connected.
 * Shopify IDs and provider IDs remain nullable until real records exist.
 */

export type CommerceStatus = "draft" | "active" | "archived";

export type ProductOptionValue = {
  name: string;
  value: string;
};

export type StorefrontVariant = {
  /** Shopify variant GID, e.g. gid://shopify/ProductVariant/... */
  shopifyVariantId: string;
  /** SKU assigned in Shopify / Printify. */
  sku: string | null;
  /** Option selections such as Size=XL and Colour=Washed Black. */
  selectedOptions: ProductOptionValue[];
  availableForSale: boolean;
  /** Price is returned by Shopify as a decimal string; do not hardcode it here. */
  priceAmount: string;
  currencyCode: string;
};

export type ArtifactCommerceRecord = {
  /** Stable local key joining the artefact universe to its commerce record. */
  artifactId: string;
  /** URL-friendly handle used for product routes and Shopify matching. */
  handle: string;
  /** Shopify product GID; null until the product exists in Shopify. */
  shopifyProductId: string | null;
  /** Draft until product details, pricing, fulfilment and checkout are verified. */
  status: CommerceStatus;
  /** Shopify owns live variants, stock and pricing after integration. */
  variants: StorefrontVariant[];
  /** Optional fulfilment mapping; populate only after connecting a real provider product. */
  printifyProductId: string | null;
};
