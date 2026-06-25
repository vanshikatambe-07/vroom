"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  HelpCircle,
  Star,
  CreditCard,
  PlusCircle,
  Home,
  Car,
  CarFront,
  Wallet,
  User,
  Lock,
} from "lucide-react";

const methods = [
  {
    id: 1,
    name: "Visa •••• 4242",
    sub: "Expires 12/26",
    icon: <CreditCard size={18} color="#5B5BC8" />,
    iconBg: "#EEF2FF",
    selected: true,
  },
  {
    id: 2,
    name: "Apple Pay",
    sub: "Linked to iCloud",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.39-1.32 2.76-2.54 3.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
      </svg>
    ),
    iconBg: "#1a1a1a",
    selected: false,
  },
  {
    id: 3,
    name: "Google Pay",
    sub: "Fast & Secure",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
    iconBg: "#f5f5f5",
    selected: false,
  },
];

export default function PaymentPage() {
  const [selected, setSelected] = useState(1);
  const [promo, setPromo] = useState("");

  return (
    <div
      className="min-h-screen pb-28 md:pb-0"
      style={{ backgroundColor: "#ECECF3" }}
    >
      
      {/* Full-width header */}
      
      <div className="px-5 pt-5 md:px-10 md:max-w-6xl md:mx-auto">
       {/* Top Header */}
<div className="flex justify-between items-center mb-6">
  <Link href="/home" className="flex items-center gap-2">
    <CarFront size={20} color="#134688" />
    <h1
      className="font-bold text-2xl"
      style={{ color: "#134688" }}
    >
      Vroom
    </h1>
  </Link>

  <Link href="/profile">
    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition">
      <User size={20} color="#134688" />
    </button>
  </Link>
</div>

{/* Payment Title */}
<div className="flex items-center gap-3 mb-6">
  <Link
    href="/join_ride"
    className="w-9 h-9 rounded-xl border border-gray-300 bg-white flex items-center justify-center"
  >
    <ArrowLeft size={18} />
  </Link>

  <h1 className="font-bold text-lg md:text-2xl">
    Payment Methods
  </h1>
</div>

         
        
      </div>

      {/* Content: single column mobile, two column desktop */}
      <div className="px-5 md:px-10 md:max-w-6xl md:mx-auto md:grid md:grid-cols-[1fr_380px] md:gap-8 md:items-start">

        {/* LEFT: Rewards + Payment methods + Add + Promo */}
        <div>
          {/* Vroom Rewards card */}
          <div
            className="rounded-3xl p-6 flex flex-col items-center text-center mb-6"
            style={{ backgroundColor: "#C8DCFB" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
              style={{ backgroundColor: "#A8C8F8" }}
            >
              <Star size={22} color="#5B5BC8" fill="#5B5BC8" />
            </div>
            <h2 className="font-bold text-base" style={{ color: "#1E3A5F" }}>
              Vroom Rewards
            </h2>
            <p className="text-sm mt-0.5" style={{ color: "#3B6EA8" }}>
              540 points
            </p>
            <button
              className="mt-4 px-6 py-2 rounded-full text-white text-sm font-bold"
              style={{ backgroundColor: "#1E3A6E" }}
            >
              VIEW
            </button>
          </div>

          {/* Saved Methods */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold tracking-widest text-gray-400">
                SAVED METHODS
              </span>
              <span className="text-xs font-semibold" style={{ color: "#5B5BC8" }}>
                3 Total
              </span>
            </div>

            <div className="space-y-3">
              {methods.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelected(m.id)}
                  className="w-full bg-white rounded-2xl p-4 flex items-center justify-between border-2 transition-all"
                  style={{
                    borderColor: selected === m.id ? "#5B5BC8" : "transparent",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: m.iconBg }}
                    >
                      {m.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-sm text-slate-900">
                        {m.name}
                      </p>
                      <p className="text-xs text-gray-400">{m.sub}</p>
                    </div>
                  </div>
                  <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                    style={{
                      borderColor: selected === m.id ? "#5B5BC8" : "#D1D5DB",
                      backgroundColor: selected === m.id ? "#5B5BC8" : "white",
                    }}
                  >
                    {selected === m.id && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Add Payment Method */}
          <div className="mb-6">
            <span className="text-xs font-bold tracking-widest text-gray-400 block mb-3">
              NEW PAYMENT METHOD
            </span>
            <button className="w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl py-4 flex items-center justify-center gap-2 text-gray-500 font-semibold text-sm">
              <PlusCircle size={18} />
              Add Payment Method
            </button>
          </div>

          {/* Promo Code */}
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest text-gray-400 block mb-3">
              PROMO CODE
            </span>
            <div className="flex gap-2">
              <input
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                placeholder="Enter promo code"
                className="flex-1 bg-white rounded-2xl px-4 py-3 text-sm outline-none border border-gray-200 placeholder:text-gray-400"
              />
              <button
                className="px-5 py-3 rounded-2xl text-white font-bold text-sm shrink-0"
                style={{ backgroundColor: "#134688" }}
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Order summary + confirm (desktop sticky panel) */}
        <div className="md:sticky md:top-6">
          {/* Order Summary */}
          <div className="bg-white rounded-3xl p-6 mb-4">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Ride Fare</span>
                <span className="font-semibold">$20.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Service Fee</span>
                <span className="font-semibold">$2.50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax</span>
                <span className="font-semibold">$2.00</span>
              </div>
              <div className="flex justify-between text-orange-500 font-semibold">
                <span>Corporate Discount</span>
                <span>- $4.50</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-base">
                <span>Total</span>
                <span style={{ color: "#5B5BC8" }}>$24.50</span>
              </div>
            </div>
          </div>

          {/* Security note */}
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
              <Lock size={12} />
              <span className="text-xs font-semibold tracking-widest">
                SECURE 256-BIT SSL ENCRYPTION
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your payment data is protected by Vroom's secure gateway. We do
              not store full card numbers on our servers.
            </p>
          </div>

          {/* Confirm CTA */}
          
            <button
              className="w-full py-4 rounded-2xl text-white font-bold text-lg"
              style={{ backgroundColor: "#134688" }}
            >
              Confirm Payment · $24.50
            </button>
  
        </div>
      </div>

      {/* Bottom Nav - mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t h-20 md:hidden">
        <div className="flex justify-around py-4">
          <Link href="/home" className="flex flex-col items-center text-gray-400">
            <Home size={20} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/my_rides" className="flex flex-col items-center text-gray-400">
            <Car size={20} />
            <span className="text-xs mt-1">Rides</span>
          </Link>
          <button className="flex flex-col items-center" style={{ color: "#134688" }}>
            <Wallet size={20} />
            <span className="text-xs mt-1">Wallet</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <User size={20} />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}

