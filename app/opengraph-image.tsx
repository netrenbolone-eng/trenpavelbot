import { ImageResponse } from "next/og";

export const alt = "TREN.PAVEL — тренировки в Telegram за 660 рублей";
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
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#10120f",
          backgroundImage:
            "radial-gradient(ellipse at 82% 18%, rgba(197,246,90,0.16), transparent 38%)",
          padding: "72px",
          color: "#f3f5ec",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 12, color: "#c3cabd" }}>
          TREN.PAVEL
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.08 }}>
            Тренировки в Telegram
          </div>
          <div style={{ display: "flex", fontSize: 54, fontWeight: 700, color: "#c5f65a" }}>
            660 RUB
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#c3cabd" }}>
            Научный подход к тренировкам и питанию
          </div>
        </div>
      </div>
    ),
    size,
  );
}
