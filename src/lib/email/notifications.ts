import { Resend } from "resend";
import { appendNotificationLog } from "@/lib/storage/local-store";

type NotificationPayload = {
  to: string | undefined;
  subject: string;
  text: string;
  html: string;
  tag: "quote" | "contact";
};

export async function sendInternalNotification(payload: NotificationPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from =
    process.env.NOTIFICATION_FROM_EMAIL || "Northline Leads <onboarding@resend.dev>";

  if (!apiKey || !payload.to) {
    await appendNotificationLog(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        channel: "local-fallback",
        tag: payload.tag,
        subject: payload.subject,
      }),
    );

    return { delivered: false, channel: "local-fallback" as const };
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to: [payload.to],
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
    });

    return { delivered: true, channel: "resend" as const };
  } catch (error) {
    await appendNotificationLog(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        channel: "resend-error",
        tag: payload.tag,
        subject: payload.subject,
        error: error instanceof Error ? error.message : "Unknown Resend error",
      }),
    );

    return { delivered: false, channel: "resend-error" as const };
  }
}
