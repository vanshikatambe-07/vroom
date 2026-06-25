"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  MessageSquare,
  Phone,
  Star,
  Wallet,
  Navigation,
  X,
} from "lucide-react";

const ROUTE = [
  { x: 30, y: 70 },
  { x: 33, y: 63 },
  { x: 38, y: 57 },
  { x: 43, y: 52 },
  { x: 47, y: 48 },
  { x: 50, y: 44 },
  { x: 52, y: 40 },
  { x: 52, y: 35 },
  { x: 52, y: 30 },
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function JoinRidePage() {
  const router = useRouter();
  const totalSteps = (ROUTE.length - 1) * 100;
  const [step, setStep] = useState(0);
  const [minsLeft, setMinsLeft] = useState(4);
  const [secsLeft, setSecsLeft] = useState(0);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const animRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const duration = 60000;

    function tick(timestamp) {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setStep(Math.floor(progress * totalSteps));

      const remaining = Math.max(0, 240 - Math.floor(elapsed / 1000));
      setMinsLeft(Math.floor(remaining / 60));
      setSecsLeft(remaining % 60);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(tick);
      }
    }

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [totalSteps]);

  const segmentIndex = Math.floor(step / 100);
  const segmentProgress = (step % 100) / 100;
  const from = ROUTE[Math.min(segmentIndex, ROUTE.length - 2)];
  const to = ROUTE[Math.min(segmentIndex + 1, ROUTE.length - 1)];
  const carX = lerp(from.x, to.x, segmentProgress);
  const carY = lerp(from.y, to.y, segmentProgress);

  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

  const arrived = minsLeft === 0 && secsLeft === 0;

  const handleConfirmCancel = () => {
    setShowCancelModal(false);
    router.push("/find_ride");
  };

  return (
    <div className="h-screen w-full flex flex-col relative overflow-hidden bg-slate-200">

      {/* Map background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=1200"
          alt="map"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.7) brightness(1.05)" }}
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* SVG route line */}
      <svg
        className="absolute inset-0 w-full h-full z-[5] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polyline
          points={ROUTE.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="#5542c2"
          strokeWidth="0.6"
          strokeOpacity="0.3"
          strokeDasharray="1.5 1"
        />
        <polyline
          points={[
            ...ROUTE.slice(0, segmentIndex + 1),
            { x: carX, y: carY },
          ]
            .map((p) => `${p.x},${p.y}`)
            .join(" ")}
          fill="none"
          stroke="#5B5BC8"
          strokeWidth="0.8"
          strokeOpacity="0.9"
          strokeLinecap="round"
        />
      </svg>

      {/* Back button */}
      <div className="relative z-10 p-5 md:p-8 flex items-center justify-between">
        <Link
          href="/ride_details"
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
        >
          <ArrowLeft size={18} />
        </Link>

        {/* Cancel ride button — top right */}
        <button
          onClick={() => setShowCancelModal(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-sm font-semibold text-red-500"
        >
          <X size={14} />
          Cancel Ride
        </button>
      </div>

      {/* Pickup pin */}
      <div
        className="absolute z-10 flex flex-col items-center"
        style={{
          left: `${ROUTE[ROUTE.length - 1].x}%`,
          top: `${ROUTE[ROUTE.length - 1].y}%`,
          transform: "translate(-50%, -100%)",
        }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: "#1f2185" }}
        >
          <MapPin size={18} color="white" />
        </div>
        <span className="bg-white text-xs font-bold px-3 py-1 rounded-full shadow mt-1 tracking-wide">
          PICKUP
        </span>
      </div>

      {/* Animated car marker */}
      <div
        className="absolute z-10 transition-all duration-300"
        style={{
          left: `${carX}%`,
          top: `${carY}%`,
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        }}
      >
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center shadow-xl border-2 border-white"
          style={{ backgroundColor: "#5B5BC8" }}
        >
          <Navigation size={18} color="white" />
        </div>
      </div>

      {/* ETA bubble */}
      <div
        className="absolute z-10 pointer-events-none transition-all duration-300"
        style={{
          left: `${carX}%`,
          top: `${carY}%`,
          transform: "translate(20px, -40px)",
        }}
      >
        <div className="bg-white rounded-full px-3 py-1 shadow-md text-xs font-bold whitespace-nowrap" style={{ color: "#5B5BC8" }}>
          {arrived ? "Arrived!" : `${minsLeft}m ${secsLeft.toString().padStart(2, "0")}s`}
        </div>
      </div>

      {/* Bottom sheet */}
      <div className="relative z-10 mt-auto">
        <div className="bg-white rounded-t-3xl md:rounded-3xl p-5 md:p-6 shadow-2xl md:max-w-md md:mx-auto md:mb-8">

          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {arrived ? "Driver Arrived! 🎉" : "Ride Confirmed"}
              </h2>
              <p
                className="text-sm mt-1 font-medium"
                style={{ color: arrived ? "#16a34a" : "#5B5BC8" }}
              >
                {arrived
                  ? "● Your driver is here"
                  : `● Arriving in ${minsLeft} min ${secsLeft.toString().padStart(2, "0")} sec`}
              </p>
            </div>

            <div className="flex gap-2 shrink-0">
              <Link
                href="/ride_chat"
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-dashed"
                style={{ borderColor: "#5B5BC8", color: "#5B5BC8" }}
              >
                <MessageSquare size={16} />
              </Link>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: "#5B5BC8" }}
              >
                <Phone size={16} />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${(step / totalSteps) * 100}%`,
                backgroundColor: "#5B5BC8",
              }}
            />
          </div>

          {/* Driver info */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/100?img=15"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold text-slate-900">Marcus Chen</h3>
                <p className="text-sm text-gray-500">Tesla Model 3</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star size={12} fill="#F59E0B" color="#F59E0B" />
                  <span className="text-xs text-gray-500">4.9</span>
                </div>
              </div>
            </div>
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "#ECECF3", color: "#5B5BC8" }}
            >
              VRM-7729
            </span>
          </div>

          {/* Fare + destination */}
          <div className="flex items-center gap-3 mt-4">
            <Link href="/pay_fare" className="flex-1 block">
              <div
                className="rounded-2xl px-4 py-3 flex items-center gap-2 border-2 border-dashed"
                style={{ borderColor: "#5B5BC8" }}
              >
                <Wallet size={16} color="#5B5BC8" />
                <div>
                  <p className="text-xs text-gray-400">PAY FARE</p>
                  <p className="font-bold text-slate-900">$24.50</p>
                </div>
              </div>
            </Link>

            <div className="flex-1 rounded-2xl px-4 py-3 flex items-center gap-2 bg-gray-50">
              <MapPin size={16} color="#5B5BC8" />
              <div className="min-w-0">
                <p className="text-xs text-gray-400">TO</p>
                <p className="font-bold text-slate-900 truncate">Skyline Tower</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cancel Confirmation Modal ── */}
      {showCancelModal && (
        <>
          {/* Backdrop */}
          <div
            className="absolute inset-0 z-20 bg-black/50"
            onClick={() => setShowCancelModal(false)}
          />

          {/* Modal card */}
          <div className="absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] bg-white rounded-3xl p-6 shadow-xl">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "#FEE2E2" }}
            >
              <X size={24} color="#DC2626" />
            </div>

            <h3 className="font-bold text-lg text-slate-900 text-center mb-1">
              Cancel Ride?
            </h3>
            <p className="text-sm text-gray-400 text-center mb-6 leading-relaxed">
              Your driver is on the way. Are you sure you want to cancel?
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleConfirmCancel}
                className="w-full py-3 rounded-2xl text-white font-bold text-sm"
                style={{ backgroundColor: "#DC2626" }}
              >
                Yes, Cancel Ride
              </button>
              <button
                onClick={() => setShowCancelModal(false)}
                className="w-full py-3 rounded-2xl font-bold text-sm border-2 border-dashed"
                style={{ borderColor: "#5c5cc4", color: "#5B5BC8" }}
              >
                No, Keep Ride
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

