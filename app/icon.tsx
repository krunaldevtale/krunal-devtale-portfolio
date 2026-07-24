import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121318", // premium dark slate background matching dark mode
          borderRadius: "24%", // rounded squire icon
          border: "8px solid #10b981", // subtle glowing emerald border matching modern emerald theme
        }}
      >
        <svg
          viewBox="0 0 100 100"
          style={{
            width: "80%",
            height: "80%",
          }}
        >
          {/* Crimson spider-web texture background circle */}
          <circle cx="50" cy="50" r="46" fill="#c92a2a" stroke="#121318" strokeWidth="2" />
          
          {/* Subtle web lines */}
          <line x1="50" y1="4" x2="50" y2="96" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
          <line x1="4" y1="50" x2="96" y2="50" stroke="rgba(0,0,0,0.15)" strokeWidth="2" />
          <path d="M15,15 L85,85 M15,85 L85,15" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="18" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />

          {/* Left Eye Black Outline */}
          <path
            d="M46,28 L14,46 C14,46 27,78 38,78 C49,78 49,36 46,28 Z"
            fill="#121318"
          />
          {/* Left Eye White Lens */}
          <path
            d="M44,33 L20,46 C23,51 31,71 38,71 C45,71 45,40 44,33 Z"
            fill="#ffffff"
          />

          {/* Right Eye Black Outline */}
          <path
            d="M54,28 L86,46 C86,46 73,78 62,78 C51,78 51,36 54,28 Z"
            fill="#121318"
          />
          {/* Right Eye White Lens */}
          <path
            d="M56,33 L80,46 C77,51 69,71 62,71 C55,71 55,40 56,33 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
