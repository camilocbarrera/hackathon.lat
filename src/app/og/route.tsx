import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "The Hackathon Company";
    const description = searchParams.get("description") || "Building the future through innovation";

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
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
            position: "relative",
          }}
        >
          {/* Subtle grid pattern using CSS */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Crosshair lines */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              width: "1px",
              height: "40%",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              width: "1px",
              height: "40%",
              background: "linear-gradient(to top, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              width: "40%",
              height: "1px",
              background: "linear-gradient(to right, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              width: "40%",
              height: "1px",
              background: "linear-gradient(to left, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)",
            }}
          />

          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
              padding: "60px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Brand text instead of SVG */}
            <div
              style={{
                display: "flex",
                fontSize: "24px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              The Hackathon Company
            </div>

            {/* Title */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "64px",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  maxWidth: "1000px",
                  textAlign: "center",
                }}
              >
                {title}
              </div>
              {description && (
                <div
                  style={{
                    display: "flex",
                    fontSize: "24px",
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                    lineHeight: 1.4,
                    maxWidth: "800px",
                    textAlign: "center",
                  }}
                >
                  {description}
                </div>
              )}
            </div>

            {/* Domain badge */}
            <div
              style={{
                display: "flex",
                marginTop: "16px",
                padding: "8px 20px",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "4px",
                fontSize: "16px",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.05em",
              }}
            >
              hackathon.lat
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
          "Content-Type": "image/png",
        },
      }
    );
  } catch (e: unknown) {
    console.error("OG image generation failed:", e);
    return new Response("Failed to generate OG image", { status: 500 });
  }
}

