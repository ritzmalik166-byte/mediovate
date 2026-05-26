export const influencerServiceLinks = [
  {
    label: "Influencer Identification",
    hash: "influencer-identification",
  },
  {
    label: "Micro & Macro Campaigns",
    hash: "influencer-micro-macro-campaigns",
  },
  {
    label: "Campaign Management",
    hash: "influencer-campaign-management",
  },
  {
    label: "ROI & Analytics",
    hash: "influencer-roi-analytics",
  },
  {
    label: "Brand Partnerships",
    hash: "influencer-brand-partnerships",
  },
  {
    label: "UGC & Regional",
    hash: "influencer-ugc-regional",
  },
] as const;

export function getInfluencerServiceIndexFromHash(hash: string) {
  const normalizedHash = hash.replace(/^#/, "");
  return influencerServiceLinks.findIndex((link) => link.hash === normalizedHash);
}
