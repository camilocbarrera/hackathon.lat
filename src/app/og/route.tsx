import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "The Hackathon Company";
    const description = searchParams.get("description") || "Building the future through innovation";

    const baseUrl = request.nextUrl.origin;

    const brandLogoSvg = await fetch(`${baseUrl}/TCH-BRAND.svg`).then((res) => res.text());
    const brandLogoBase64 = btoa(brandLogoSvg);
    const brandLogoDataUrl = `data:image/svg+xml;base64,${brandLogoBase64}`;

    const noiseImage = await fetch(`${baseUrl}/Noise.png`).then((res) => res.arrayBuffer());
    const noiseBase64 = arrayBufferToBase64(noiseImage);
    const noiseDataUrl = `data:image/png;base64,${noiseBase64}`;

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#000000",
            position: "relative",
          }}
        >
          {/* Noise texture overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${noiseDataUrl})`,
              backgroundRepeat: "repeat",
              opacity: 0.4,
            }}
          />

          {/* Crosshair lines */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              width: "1px",
              height: "50%",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)",
              transform: "translateX(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              width: "1px",
              height: "50%",
              background: "linear-gradient(to top, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)",
              transform: "translateX(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              width: "50%",
              height: "1px",
              background: "linear-gradient(to right, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)",
              transform: "translateY(-50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              width: "50%",
              height: "1px",
              background: "linear-gradient(to left, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)",
              transform: "translateY(-50%)",
            }}
          />

          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "48px",
              padding: "80px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Brand Logo */}
            <img
              src={brandLogoDataUrl}
              alt="The Hackathon Company"
              width={300}
              height={22}
              style={{
                opacity: 0.6,
              }}
            />

            {/* Title */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "72px",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  maxWidth: "1000px",
                }}
              >
                {title}
              </h1>
              {description && (
                <p
                  style={{
                    fontSize: "28px",
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 300,
                    letterSpacing: "0.01em",
                    lineHeight: 1.4,
                    maxWidth: "900px",
                  }}
                >
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    console.error("OG image generation failed:", e);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}

