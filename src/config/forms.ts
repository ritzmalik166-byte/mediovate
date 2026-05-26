export const GOOGLE_SHEET_CONSULTATION_URL =
  process.env.GOOGLE_SHEET_CONSULTATION_URL ??
  "https://script.google.com/macros/s/AKfycbybwx2qcMFgs8ARQzf_cADHqYAryvH_cy0Hcv_lSstSySPWeGLeSh5_fanGhLlOyiM/exec";

export const GOOGLE_SHEET_CALL_US_URL =
  process.env.GOOGLE_SHEET_CALL_US_URL ??
  "https://script.google.com/macros/s/AKfycbzjDAUswIHttqUL9CvyZkb_HteI5xZ1VIU9y6sqYkV-EaD0Wo4FHYUuGSe3Tal9cynd/exec";

export type ConsultationFormPayload = {
  name: string;
  contact: string;
  email: string;
  service: string;
  message: string;
};

export type CallUsFormPayload = {
  name: string;
  contact: string;
  email: string;
  message: string;
};
