import {
  getFooterServiceLinkFromHash,
  type FooterServiceTarget,
} from "@/data/footerServiceLinks";
import { scrollToElement } from "@/lib/influencerNavigation";

export const OTHER_SERVICE_NAV_EVENT = "other-service-navigate";
export const DIGITAL_MARKETING_NAV_EVENT = "digital-marketing-navigate";

const OTHER_SERVICES_CONTENT_ID = "other-services-content";
const DIGITAL_MARKETING_CONTENT_ID = "digital-marketing-content";

function getOtherServicesScrollTarget() {
  return (
    document.getElementById(OTHER_SERVICES_CONTENT_ID) ??
    document.getElementById("other-services")
  );
}

function getDigitalMarketingScrollTarget() {
  return (
    document.getElementById(DIGITAL_MARKETING_CONTENT_ID) ??
    document.getElementById("digital-marketing")
  );
}

export function scrollToOtherServicesView() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const target = getOtherServicesScrollTarget();
      if (target) scrollToElement(target);
    });
  });
}

export function scrollToDigitalMarketingView() {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const target = getDigitalMarketingScrollTarget();
      if (target) scrollToElement(target);
    });
  });
}

function dispatchServiceNavigation(hash: string, target: FooterServiceTarget) {
  window.history.pushState(null, "", `#${hash}`);

  if (target.type === "other-services") {
    window.dispatchEvent(
      new CustomEvent(OTHER_SERVICE_NAV_EVENT, {
        detail: { hash, accordionIndex: target.accordionIndex },
      }),
    );
    return;
  }

  window.dispatchEvent(
    new CustomEvent(DIGITAL_MARKETING_NAV_EVENT, {
      detail: { hash, slideIndex: target.slideIndex },
    }),
  );
}

export function scrollToFooterService(hash: string) {
  const link = getFooterServiceLinkFromHash(hash);
  if (!link) return;

  dispatchServiceNavigation(link.hash, link.target);
}
