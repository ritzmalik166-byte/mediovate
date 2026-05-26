import { getInfluencerServiceIndexFromHash } from "@/data/influencerServiceLinks";

export const INFLUENCER_SERVICE_NAV_EVENT = "influencer-service-navigate";

const INFLUENCER_SECTION_ID = "influencer-marketing";
const INFLUENCER_PREVIEW_ID = "influencer-marketing-preview";

export function getSectionScrollOffset() {
  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 72;

  return -Math.max(headerHeight + 40, 112);
}

export function scrollToElement(target: HTMLElement) {
  const offset = getSectionScrollOffset();

  if (window.__lenis) {
    window.__lenis.scrollTo(target, { offset });
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({ top, behavior: "smooth" });
}

export function getInfluencerScrollTarget() {
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  if (isDesktop) {
    return document.getElementById(INFLUENCER_SECTION_ID);
  }

  return (
    document.getElementById(INFLUENCER_PREVIEW_ID) ??
    document.getElementById(INFLUENCER_SECTION_ID)
  );
}

export function scrollToInfluencerDesignView() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const target = getInfluencerScrollTarget();
      if (target) scrollToElement(target);
    });
  });
}

export function scrollToInfluencerService(hash: string) {
  const index = getInfluencerServiceIndexFromHash(hash);
  if (index < 0) return;

  window.history.pushState(null, "", `#${hash}`);

  window.dispatchEvent(
    new CustomEvent(INFLUENCER_SERVICE_NAV_EVENT, {
      detail: { hash, index },
    }),
  );
}
