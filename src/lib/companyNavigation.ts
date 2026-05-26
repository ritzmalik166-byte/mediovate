import { getCompanyLinkFromHash } from "@/data/companyLinks";
import { scrollToElement } from "@/lib/influencerNavigation";

export function scrollToCompanySection(hash: string) {
  const link = getCompanyLinkFromHash(hash);
  if (!link) return;

  window.history.pushState(null, "", `#${link.hash}`);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const target =
        document.getElementById(link.contentId) ??
        document.getElementById(link.sectionId);
      if (target) scrollToElement(target);
    });
  });
}
