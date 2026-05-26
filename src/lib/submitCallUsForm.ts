import type { CallUsFormPayload } from "@/config/forms";

export async function submitCallUsForm(payload: CallUsFormPayload) {
  const response = await fetch("/api/call-us", {
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
    throw new Error(data?.error ?? "Failed to submit call us form");
  }
}
