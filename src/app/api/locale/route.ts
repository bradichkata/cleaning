import { NextResponse } from "next/server";
import { isLocale, localeCookieName } from "@/lib/locale";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as { locale?: string };

    if (!isLocale(payload.locale)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid locale",
        },
        { status: 400 },
      );
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set(localeCookieName, payload.locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Locale update failed",
      },
      { status: 500 },
    );
  }
}
