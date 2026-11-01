import { ImageResponse } from "next/og";
export const alt = "ContaCerta — Suas contas em dia. Sua vida mais tranquila.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";
export default function OpenGraph() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#F5F5F7",
        display: "flex",
        padding: "70px 80px",
        flexDirection: "column",
        fontFamily: "sans-serif",
        color: "#1C1C1E",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 17, fontSize: 30 }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 17,
            background: "#007AFF",
            color: "white",
            fontSize: 37,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36">
            <path
              d="M7 19 L14 26 L30 9"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span style={{ fontWeight: 700 }}>ContaCerta</span>
      </div>
      <div
        style={{
          fontSize: 77,
          letterSpacing: "-4px",
          fontWeight: 700,
          lineHeight: 1.12,
          display: "flex",
          flexDirection: "column",
          marginTop: 65,
        }}
      >
        <span>Suas contas em dia.</span>
        <span style={{ color: "#007AFF" }}>Sua vida mais tranquila.</span>
      </div>
      <div
        style={{
          fontSize: 25,
          color: "#6E6E73",
          marginTop: 40,
          display: "flex",
        }}
      >
        Mais clareza nas contas. Mais espaço para viver.
      </div>
    </div>,
    size,
  );
}
