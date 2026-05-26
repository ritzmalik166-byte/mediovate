export const consultationServices = [
  "Brand Identity Design",
  "Social Media Creatives",
  "SEO Services",
  "PPC & Google Ads",
  "Content Marketing",
  "Web Development",
  "Influencer Marketing",
] as const;

export type ConsultationService = (typeof consultationServices)[number];
