import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(16,42,67,1) 0%, rgba(22,60,91,1) 55%, rgba(28,181,163,0.92) 100%)",
          color: "white",
          padding: 72,
          justifyContent: "space-between",
          alignItems: "flex-start",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 760,
          }}
        >
          <div
            style={{
              display: "flex",
              border: "1px solid rgba(255,255,255,0.18)",
              padding: "10px 16px",
              borderRadius: 999,
              fontSize: 22,
              alignSelf: "flex-start",
            }}
          >
            Cleaning services MVP
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.02,
              marginTop: 28,
            }}
          >
            Professional cleaning without the stress.
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.82)",
              marginTop: 24,
            }}
          >
            {company.brandName}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: 120,
            width: 120,
            borderRadius: 28,
            background: "rgba(255,255,255,0.12)",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 42,
            fontWeight: 700,
          }}
        >
          NC
        </div>
      </div>
    ),
    size,
  );
}
