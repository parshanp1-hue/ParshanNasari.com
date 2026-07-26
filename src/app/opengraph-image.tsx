import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0b",
          color: "#f4f4f2",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#c9a15a",
          }}
        >
          Finance &amp; Operations Executive
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 76, fontWeight: 600, letterSpacing: -1 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 28, color: "#9a9a95", maxWidth: 900 }}>{siteConfig.tagline}</div>
        </div>
        <div style={{ fontSize: 22, color: "#9a9a95" }}>{siteConfig.role}</div>
      </div>
    ),
    { ...size }
  );
}
