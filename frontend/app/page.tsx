"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [showMap, setShowMap] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const mapTimer = setTimeout(() => {
      setShowMap(true);
    }, 2000);

    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 4000);

    return () => {
      clearTimeout(mapTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Neon Background */}
      {/* Dark Background */}
<div className="absolute inset-0 bg-[#020617]" />

<div
  className="absolute inset-0"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
    `,
    backgroundSize: "80px 80px",
  }}
/>
      {/* Heavy Fog */}
      <div className="fog-layer">
        <div className="fog fog1" />
        <div className="fog fog2" />
        <div className="fog fog3" />
        <div className="fog fog4" />
      </div>

      {/* Sports Car Scene */}
      {!showMap && (
        <div className="car-container">
          <div className="headlight" />

          <svg
            className="sports-car"
            width="420"
            height="180"
            viewBox="0 0 420 180"
          >
            {/* Car Body */}
            <path
              d="
                M40 110
                L90 70
                L230 60
                L320 80
                L370 110
                L370 130
                L40 130
                Z
              "
              fill="#dc2626"
            />

            {/* Roof */}
            <path
              d="
                M120 72
                L210 65
                L260 92
                L90 92
                Z
              "
              fill="#7f1d1d"
            />

            {/* Windows */}
            <path
              d="
                M120 74
                L205 68
                L245 88
                L110 88
                Z
              "
              fill="#111827"
            />

            {/* Front Splitter */}
            <rect
              x="320"
              y="120"
              width="50"
              height="6"
              fill="#111827"
            />

            {/* Wheels */}
            <circle cx="110" cy="132" r="24" fill="#111827" />
            <circle cx="300" cy="132" r="24" fill="#111827" />

            <circle cx="110" cy="132" r="10" fill="#9ca3af" />
            <circle cx="300" cy="132" r="10" fill="#9ca3af" />
          </svg>
        </div>
      )}

      {/* Futuristic Map */}
      {/* Real Map Style */}
{showMap && (
  <div className="absolute inset-0">

    {/* Real Map Background */}
    <img
      src="/dark-map.png"
      alt="Map"
      className="absolute inset-0 w-full h-full object-cover opacity-90"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/20" />

    {/* Route Layer */}
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 600"
    >
      <path
        d="
          M120 420
          C250 330 320 430 480 280
          C620 170 740 240 860 120
        "
        fill="none"
        stroke="#35665f"
        strokeWidth="8"
        strokeLinecap="round"
        className="route"
      />

      <circle
        cx="120"
        cy="420"
        r="12"
        fill="#22c55e"
      />

      <circle
        cx="860"
        cy="120"
        r="12"
        fill="#ef4444"
      />

      <text
        x="145"
        y="425"
        fill="#22c55e"
        fontSize="18"
        fontWeight="bold"
      >
        PICKUP
      </text>

      <text
        x="885"
        y="125"
        fill="#ef4444"
        fontSize="18"
        fontWeight="bold"
      >
        DESTINATION
      </text>
    </svg>

  </div>
)}




    
      {/* Logo Screen */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1500 ${
          showLogo ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="logo">VROOM</h1>

        <p className="mt-4 text-slate-300 tracking-[0.3em]">
          SAVE MORE. RIDE MORE.
        </p>

        <button className="enter-btn mt-10">
          ENTER APP
        </button>
      </div>

      <style jsx global>{`
        .fog-layer {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .fog {
          position: absolute;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.35);
          filter: blur(140px);
        }

        .fog1 {
          width: 600px;
          height: 350px;
          top: -5%;
          left: -10%;
          animation: fogMove 14s infinite linear;
        }

        .fog2 {
          width: 700px;
          height: 450px;
          top: 20%;
          left: 20%;
          animation: fogMove 18s infinite linear reverse;
        }

        .fog3 {
          width: 550px;
          height: 350px;
          bottom: -10%;
          right: -10%;
          animation: fogMove 16s infinite linear;
        }

        .fog4 {
          width: 500px;
          height: 300px;
          top: 55%;
          left: 50%;
          animation: fogMove 20s infinite linear reverse;
        }
        .car-container {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 30;

  transform: translate(-50%, -50%);
  animation: supercarReveal 3s ease-in-out forwards;
}
       
       
    

        .sports-car {
          filter:
            drop-shadow(0 0 20px rgba(255, 0, 0, 0.6))
            drop-shadow(0 0 50px rgba(255, 0, 0, 0.3));
        }

        .headlight {
          position: absolute;
          right: -40px;
          top: 72px;
          width: 220px;
          height: 70px;
          background: rgba(0, 255, 255, 0.25);
          filter: blur(40px);
          border-radius: 999px;
        }

        .map-svg {
          opacity: 0;
          animation: mapFade 1.5s forwards;
        }

        .route {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: drawRoute 3s forwards;
        }

        .logo {
          font-size: clamp(4rem, 10vw, 9rem);
          font-weight: 900;
          letter-spacing: 0.4em;
          color: white;
          text-shadow:
            0 0 10px rgba(255,255,255,0.9),
            0 0 30px rgba(255,255,255,0.7),
            0 0 60px rgba(255,255,255,0.4);
        }

        .enter-btn {
          padding: 16px 42px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.08);
          color: white;
          font-weight: 700;
          letter-spacing: 0.15em;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .enter-btn:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.15);
        }
                  @keyframes fogMove {
          0% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(180px);
          }

          100% {
            transform: translateX(0);
          }
        }
@keyframes supercarReveal {
  0% {
    transform: translateX(-500px);
    opacity: 1;
  }

  100% {
    transform: translateX(calc(100vw + 500px));
    opacity: 0;
  }
}
      

        @keyframes mapFade {
          from {
            opacity: 0;
            transform: scale(1.05);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes drawRoute {
          from {
            stroke-dashoffset: 1400;
          }

          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </main>
  );
}