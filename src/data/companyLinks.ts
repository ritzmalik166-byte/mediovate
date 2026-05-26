export const companyLinks = [
  {
    label: "About Mediovate",
    hash: "about-mediovate",
    contentId: "who-we-are-content",
    sectionId: "who-we-are",
  },
  {
    label: "Our Process",
    hash: "our-process",
    contentId: "how-we-work-content",
    sectionId: "how-we-work",
  },
  {
    label: "Industries",
    hash: "industries-we-serve",
    contentId: "industries-content",
    sectionId: "industries",
  },
] as const;

export function getCompanyLinkFromHash(hash: string) {
  const normalizedHash = hash.replace(/^#/, "");
  return companyLinks.find((link) => link.hash === normalizedHash);
}
