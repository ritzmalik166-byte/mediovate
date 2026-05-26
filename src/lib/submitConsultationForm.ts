import type { ConsultationFormPayload } from "@/config/forms";

export async function submitConsultationForm(payload: ConsultationFormPayload) {
  const response = await fetch("/api/consultation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as
    | { success?: boolean; error?: string }
    | null;

  if (!response.ok || !data?.success) {
    throw new Error(data?.error ?? "Failed to submit consultation form");
  }
}
