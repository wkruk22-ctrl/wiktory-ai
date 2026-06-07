import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "wiktory.ai — Strony internetowe + nauka kodowania";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Gradient tła */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(20,20,80,0.9) 0%, rgba(5,5,20,1) 65%)",
            display: "flex",
          }}
        />

        {/* Subtelna linia na górze */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
            display: "flex",
          }}
        />

        {/* Główna treść */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            position: "relative",
            padding: "0 80px",
          }}
        >
          {/* Nazwa */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 300,
              color: "#fff",
              letterSpacing: "-3px",
              lineHeight: 1,
              display: "flex",
            }}
          >
            wiktory
            <span style={{ color: "rgba(255,255,255,0.3)" }}>.ai</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontWeight: 400,
              display: "flex",
            }}
          >
            Strony internetowe + nauka kodowania
          </div>

          {/* Rozdzielnik */}
          <div
            style={{
              marginTop: 12,
              width: 48,
              height: 1,
              background: "rgba(255,255,255,0.2)",
              display: "flex",
            }}
          />

          {/* Tagi */}
          <div
            style={{
              marginTop: 4,
              display: "flex",
              gap: 40,
              alignItems: "center",
            }}
          >
            {["Dla Biznesu", "✦", "Dla Twórców", "✦", "Wyszków"].map(
              (item, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 17,
                    color:
                      item === "✦"
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(255,255,255,0.35)",
                    letterSpacing: item === "✦" ? 0 : "3px",
                    textTransform: "uppercase",
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* URL na dole */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            fontSize: 18,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "3px",
            display: "flex",
          }}
        >
          wiktory.tech
        </div>

        {/* Linia na dole */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
