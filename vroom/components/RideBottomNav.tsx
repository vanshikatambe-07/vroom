"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function RideBottomNav() {
  const [activeRide, setActiveRide] = useState(false);

  useEffect(() => {
    const ride = localStorage.getItem("activeRide");
    setActiveRide(ride === "true");
  }, []);

  if (!activeRide) return null;

  return (
    <div className="fixed bottom-16 left-0 right-0 z-50 px-4">
      <div
        className="flex items-center gap-3 rounded-2xl px-4 py-3"
        style={{ backgroundColor: "#134688" }}
      >
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Ride in progress</p>
          <p className="text-sm font-bold text-white truncate">Tech Hub South Sector</p>
        </div>
        <Link
          href="/ride_details"
          className="bg-white rounded-xl px-3 py-1.5 text-xs font-bold flex-shrink-0"
          style={{ color: "#134688" }}
        >
          Track
        </Link>
      </div>
    </div>
  );
}