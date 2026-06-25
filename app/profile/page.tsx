"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  CarFront,
  Bell,
  User,
  Mail,
  Phone,
  Camera,
  ArrowRight,
  Shield,
  Star,
  Car,
  Phone as PhoneIcon,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  TrendingUp,
  Clock3,
  Wallet,
  ToggleLeft,
  ToggleRight,
  Edit3,
  ChevronRight,
  Search,
  Users,
} from "lucide-react";

// ── Mock data ──
const user = {
  name: "Priya Mehta",
  email: "priya.mehta@email.com",
  phone: "+91 98765 43210",
  avatar: "https://i.pravatar.cc/200?img=47",
  safetyScore: 4.9,
  memberSince: "Jan 2024",
  isDriver: true, // has completed driver onboarding
};

const passengerStats = [
  { label: "Rides Taken", value: "38" },
  { label: "Avg Rating", value: "4.9★" },
  { label: "Reviews Given", value: "31" },
];

const driverStats = [
  { label: "Rides Done", value: "124" },
  { label: "Avg Rating", value: "4.9★" },
  { label: "Total Earned", value: "₹18.4K" },
];

const recentPassengerRides = [
  { from: "Central Station", to: "Tech Hub South", date: "Today, 8:30 AM", fare: "₹120" },
  { from: "Airport T2", to: "Downtown Marriott", date: "Yesterday, 6:00 PM", fare: "₹210" },
  { from: "University Ave", to: "Skyline Tower", date: "Jun 20, 10:15 AM", fare: "₹95" },
];

const recentDriverRides = [
  { from: "Palo Alto Tech Park", to: "Financial District", date: "Today, 9:45 AM", earned: "₹180", seats: 2 },
  { from: "Central Station", to: "Airport T2", date: "Jun 21, 7:00 AM", earned: "₹250", seats: 3 },
  { from: "University Ave", to: "Skyline Tower", date: "Jun 19, 5:30 PM", earned: "₹140", seats: 1 },
];

export default function ProfilePage() {
  const [role, setRole] = useState("passenger"); // "passenger" | "driver"
  const [womenSafety, setWomenSafety] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [emergencyContact, setEmergencyContact] = useState("Mom — +91 98001 11222");
  const fileInputRef = useRef(null);

  const isDriver = user.isDriver;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ECECF3" }}>

      {/* ── Nav ── */}
      <header className="max-w-7xl mx-auto flex justify-between items-center px-10 pt-6 pb-4">
        <Link href="/home" className="flex items-center gap-2">
          <CarFront size={20} color="#134688" />
          <span className="font-bold text-2xl" style={{ color: "#134688" }}>Vroom</span>
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium text-slate-500">
          </nav>
        <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
          <Bell size={17} className="text-gray-500" />
        </button>
      </header>

      <main className="max-w-7xl mx-auto px-10 py-8">

        {/* ── Profile hero card ── */}
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-6 flex items-center justify-between gap-6">
          {/* Avatar + basic info */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) setAvatarUrl(URL.createObjectURL(f));
                }}
              />
              <img
                src={avatarUrl || user.avatar}
                alt="avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center shadow"
                style={{ backgroundColor: "#5B5BC8" }}
              >
                <Camera size={13} color="white" />
              </button>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">{user.name}</h1>
              <p className="text-sm text-gray-400 mb-2">Member since {user.memberSince}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><Mail size={13} /> {user.email}</span>
                <span className="flex items-center gap-1.5"><Phone size={13} /> {user.phone}</span>
              </div>
            </div>
          </div>

          {/* Safety score + edit */}
          <div className="flex items-center gap-5 shrink-0">
            {/* Safety score badge */}
            <div
              className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl"
              style={{ backgroundColor: "#EEF2FF" }}
            >
              <div className="flex items-center gap-1 mb-0.5">
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <span className="text-2xl font-extrabold text-slate-900">{user.safetyScore}</span>
              </div>
              <span className="text-xs text-gray-500 font-semibold text-center leading-tight">Safety Score</span>
            </div>

            <button
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border-2 border-dashed hover:opacity-80 transition-opacity"
              style={{ borderColor: "#8B8BDE", color: "#5B5BC8" }}
            >
              <Edit3 size={14} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* ── Role switcher ── */}
        {isDriver && (
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold text-slate-500">Viewing as:</span>
            <div className="flex bg-white rounded-2xl p-1 shadow-sm gap-1">
              <button
                onClick={() => setRole("passenger")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
                style={
                  role === "passenger"
                    ? { backgroundColor: "#134688", color: "white" }
                    : { color: "#94a3b8" }
                }
              >
                <Users size={15} />
                Passenger
              </button>
              <button
                onClick={() => setRole("driver")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
                style={
                  role === "driver"
                    ? { backgroundColor: "#134688", color: "white" }
                    : { color: "#94a3b8" }
                }
              >
                <Car size={15} />
                Driver
              </button>
            </div>
            <span className="text-xs text-gray-400 ml-1">
              {role === "driver"
                ? "Showing your driver dashboard"
                : "Showing your passenger profile"}
            </span>
          </div>
        )}

        {/* ── Three-column grid ── */}
        <div className="grid grid-cols-3 gap-5">

          {/* ── COL 1: Stats + Shared settings ── */}
          <div className="flex flex-col gap-5">

            {/* Stats */}
            <div className="bg-white rounded-3xl p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                {role === "passenger" ? "Passenger Stats" : "Driver Stats"}
              </p>
              <div className="flex flex-col gap-3">
                {(role === "passenger" ? passengerStats : driverStats).map((s) => (
                  <div key={s.label} className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{s.label}</span>
                    <span className="font-extrabold text-slate-900 text-base">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact — shared */}
            <div className="bg-white rounded-3xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Emergency Contact</p>
                <button className="text-xs font-semibold" style={{ color: "#5B5BC8" }}>Edit</button>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-2xl" style={{ backgroundColor: "#FFF7ED" }}>
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#FED7AA" }}
                >
                  <PhoneIcon size={14} color="#EA580C" />
                </div>
                <p className="text-sm font-semibold text-slate-800">{emergencyContact}</p>
              </div>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                This contact is alerted automatically if you trigger SOS.
              </p>
            </div>

            {/* Personal Info — shared */}
            <div className="bg-white rounded-3xl p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Account Info</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: User, label: "Full Name", value: user.name },
                  { icon: Mail, label: "Email", value: user.email },
                  { icon: Phone, label: "Phone", value: user.phone },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#EEF2FF" }}
                    >
                      <Icon size={14} color="#5B5BC8" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400">{label}</p>
                      <p className="text-sm font-semibold text-slate-800 truncate">{value}</p>
                    </div>
                    <ChevronRight size={14} className="text-gray-300 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── COL 2: Role-specific main panel ── */}
          <div className="flex flex-col gap-5">

            {role === "passenger" ? (
              <>
                {/* Women's Safety Mode */}
                <div
                  className="rounded-3xl p-5 shadow-sm"
                  style={{ backgroundColor: womenSafety ? "#5B5BC8" : "white" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: womenSafety ? "rgba(255,255,255,0.2)" : "#FCE7F3" }}
                      >
                        <Shield size={16} color={womenSafety ? "white" : "#DB2777"} />
                      </div>
                      <div>
                        <p className={`font-bold text-sm ${womenSafety ? "text-white" : "text-slate-900"}`}>
                          Women's Safety Mode
                        </p>
                        <p className={`text-xs mt-0.5 ${womenSafety ? "text-indigo-200" : "text-gray-400"}`}>
                          Match only with verified female drivers
                        </p>
                      </div>
                    </div>
                    <button onClick={() => setWomenSafety(!womenSafety)}>
                      {womenSafety
                        ? <ToggleRight size={28} color="white" />
                        : <ToggleLeft size={28} className="text-gray-300" />}
                    </button>
                  </div>
                  {womenSafety && (
                    <div className="mt-3 p-3 rounded-2xl" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                      <p className="text-xs text-indigo-100 leading-relaxed">
                        ✓ Active — You'll only be matched with female drivers and co-passengers on shared rides.
                      </p>
                    </div>
                  )}
                </div>

                {/* Safety features */}
                <div className="bg-white rounded-3xl p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Safety Features</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { icon: MapPin, label: "Share live location", sub: "Share trip with trusted contacts", color: "#5B5BC8", bg: "#EEF2FF" },
                      { icon: AlertTriangle, label: "SOS Alert", sub: "Instantly alerts emergency contact + Vroom", color: "#DC2626", bg: "#FEE2E2" },
                      { icon: CheckCircle2, label: "Trip verification", sub: "OTP-based ride start for added security", color: "#16A34A", bg: "#DCFCE7" },
                    ].map(({ icon: Icon, label, sub, color, bg }) => (
                      <div key={label} className="flex items-center gap-3 p-3 rounded-2xl" style={{ backgroundColor: bg + "66" }}>
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: bg }}>
                          <Icon size={14} color={color} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-800">{label}</p>
                          <p className="text-xs text-gray-400">{sub}</p>
                        </div>
                        <ChevronRight size={14} className="text-gray-300" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preferred payment */}
                <div className="bg-white rounded-3xl p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Payment</p>
                  <div className="flex items-center justify-between p-3 rounded-2xl" style={{ backgroundColor: "#F5F6FF" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#EEF2FF" }}>
                        <Wallet size={14} color="#5B5BC8" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">UPI — priya@okaxis</p>
                        <p className="text-xs text-gray-400">Default payment method</p>
                      </div>
                    </div>
                    <button className="text-xs font-semibold" style={{ color: "#5B5BC8" }}>Change</button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Driver rating breakdown */}
                <div className="bg-white rounded-3xl p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Rating Breakdown</p>
                  {[
                    { label: "Punctuality", val: 4.9 },
                    { label: "Driving", val: 4.8 },
                    { label: "Cleanliness", val: 4.7 },
                    { label: "Friendliness", val: 5.0 },
                  ].map(({ label, val }) => (
                    <div key={label} className="mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-500">{label}</span>
                        <span className="text-xs font-bold text-slate-800">{val}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-gray-100">
                        <div
                          className="h-1.5 rounded-full"
                          style={{ width: `${(val / 5) * 100}%`, backgroundColor: "#5B5BC8" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Vehicle info */}
                <div className="bg-white rounded-3xl p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Vehicle</p>
                    <button className="text-xs font-semibold" style={{ color: "#5B5BC8" }}>Edit</button>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ backgroundColor: "#F5F6FF" }}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#EEF2FF" }}>
                      <Car size={22} color="#5B5BC8" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Maruti Swift Dzire</p>
                      <p className="text-xs text-gray-400">White · MH 12 AB 3456 · 2021</p>
                      <div className="flex items-center gap-1 mt-1">
                        <CheckCircle2 size={12} color="#16A34A" />
                        <span className="text-xs font-semibold text-green-700">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Earnings summary */}
                <div className="bg-white rounded-3xl p-5 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Earnings</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "This Week", value: "₹3,240", icon: TrendingUp, color: "#16A34A", bg: "#DCFCE7" },
                      { label: "This Month", value: "₹18,400", icon: Wallet, color: "#5B5BC8", bg: "#EEF2FF" },
                    ].map(({ label, value, icon: Icon, color, bg }) => (
                      <div key={label} className="p-3 rounded-2xl" style={{ backgroundColor: bg }}>
                        <Icon size={16} color={color} className="mb-2" />
                        <p className="text-lg font-extrabold text-slate-900">{value}</p>
                        <p className="text-xs text-gray-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ── COL 3: Recent rides ── */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-3xl p-5 shadow-sm flex-1">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {role === "passenger" ? "Recent Rides" : "Recent Trips Offered"}
                </p>
                <Link
                  href="/my_rides"
                  className="text-xs font-semibold flex items-center gap-1"
                  style={{ color: "#5B5BC8" }}
                >
                  See all <ArrowRight size={12} />
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                {(role === "passenger" ? recentPassengerRides : recentDriverRides).map((ride, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl"
                    style={{ backgroundColor: "#F8F9FF" }}
                  >
                    {/* Route */}
                    <div className="flex gap-3 mb-3">
                      <div className="flex flex-col items-center pt-1 shrink-0">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#5B5BC8" }} />
                        <div className="w-px h-5 bg-gray-200 my-1" />
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2563EB" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-800 truncate">{ride.from}</p>
                        <p className="text-xs text-gray-400 my-1">→</p>
                        <p className="text-xs font-semibold text-slate-800 truncate">{ride.to}</p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-gray-400">
                        <Clock3 size={11} />
                        <span className="text-xs">{ride.date}</span>
                      </div>
                      {role === "passenger" ? (
                        <span className="text-xs font-bold" style={{ color: "#5B5BC8" }}>{ride.fare}</span>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">{ride.seats} seats</span>
                          <span className="text-xs font-bold text-green-700">{ride.earned}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-white rounded-3xl p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Quick Actions</p>
              <div className="flex flex-col gap-2">
                {(role === "passenger"
                  ? [
                      { icon: Search, label: "Find a ride now", href: "/find_ride" },
                      { icon: Shield, label: "Safety settings", href: "#" },
                      { icon: Star, label: "My reviews", href: "#" },
                    ]
                  : [
                      { icon: Car, label: "Offer a ride", href: "#" },
                      { icon: TrendingUp, label: "View earnings report", href: "#" },
                      { icon: CheckCircle2, label: "Driver documents", href: "#" },
                    ]
                ).map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#EEF2FF" }}>
                      <Icon size={14} color="#5B5BC8" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors flex-1">{label}</span>
                    <ChevronRight size={14} className="text-gray-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

