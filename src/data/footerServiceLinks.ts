export type FooterServiceTarget =
  | { type: "other-services"; accordionIndex: number }
  | { type: "digital-marketing"; slideIndex?: number };

export const footerServiceLinks = [
  {
    label: "Brand Identity Design",
    hash: "brand-identity-design",
    target: { type: "other-services", accordionIndex: 0 } as const,
  },
  {
    label: "Social Media Creatives",
    hash: "social-media-creatives",
    target: { type: "digital-marketing", slideIndex: 2 } as const,
  },
  {
    label: "SEO Services",
    hash: "seo-services",
    target: { type: "digital-marketing", slideIndex: 0 } as const,
  },
  {
    label: "PPC & Google Ads",
    hash: "ppc-google-ads",
    target: { type: "digital-marketing", slideIndex: 1 } as const,
  },
  {
    label: "Content Marketing",
    hash: "content-marketing",
    target: { type: "digital-marketing", slideIndex: 3 } as const,
  },
  {
    label: "Web Development",
    hash: "web-development",
    target: { type: "digital-marketing", slideIndex: 4 } as const,
  },
] as const;

export function getFooterServiceLinkFromHash(hash: string) {
  const normalizedHash = hash.replace(/^#/, "");
  return footerServiceLinks.find((link) => link.hash === normalizedHash);
}
