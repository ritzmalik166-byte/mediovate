import {
  GOOGLE_SHEET_CONSULTATION_URL,
  type ConsultationFormPayload,
} from "@/config/forms";

export async function POST(request: Request) {
  let payload: ConsultationFormPayload;

  try {
    payload = (await request.json()) as ConsultationFormPayload;
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, contact, email, service, message } = payload;

  if (!name?.trim() || !contact?.trim() || !email?.trim() || !service?.trim()) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const response = await fetch(GOOGLE_SHEET_CONSULTATION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "Book a Free Consultation",
        timestamp: new Date().toISOString(),
        name: name.trim(),
        contact: contact.trim(),
        email: email.trim(),
        service: service.trim(),
        message: message?.trim() ?? "",
      }),
      redirect: "follow",
    });

    const responseText = await response.text();

    if (!response.ok) {
      return Response.json(
        {
          error: "Google Sheet submission failed",
          details: responseText.slice(0, 200),
        },
        { status: 502 },
      );
    }

    return Response.json({ success: true, data: responseText });
  } catch {
    return Response.json(
      { error: "Unable to reach Google Sheet endpoint" },
      { status: 502 },
    );
  }
}
