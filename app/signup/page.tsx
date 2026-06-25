"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  CarFront,
  User,
  Bell,
  Camera,
  Mail,
  Phone,
  Car,
  ArrowRight,
  Shield,
  Star,
  CheckCircle2,
  MapPin,
} from "lucide-react";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isCarOwner, setIsCarOwner] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setAvatarUrl(URL.createObjectURL(file));
  };

  const stats = [
    { value: "50K+", label: "Active Riders" },
    { value: "4.9★", label: "Avg. Rating" },
    { value: "120+", label: "Cities" },
  ];

  const perks = [
    { icon: Shield, text: "Every member is verified before their first ride" },
    { icon: CheckCircle2, text: "Secure payments with instant confirmation" },
    { icon: MapPin, text: "Real-time GPS tracking on every trip" },
    { icon: Star, text: "Rated community drivers only — no strangers" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ECECF3" }}>

      {/* ── Top Nav ── */}
      <header className="max-w-7xl mx-auto flex justify-between items-center px-10 pt-6 pb-4">
        <Link href="/home" className="flex items-center gap-2">
          <CarFront size={20} color="#15499c" />
          <span className="font-bold text-2xl" style={{ color: "#15499c" }}>Vroom</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
         
        </nav>

        <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
          <Bell size={17} className="text-gray-500" />
        </button>
      </header>

      {/* ── Two-column body ── */}
      <main className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-[1fr_480px] gap-14 items-start">

        {/* ── LEFT PANEL ── */}
        <div className="flex flex-col gap-8">

          {/* Hero */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#15499c" }}>
              Welcome to Vroom
            </p>
            <h1 className="text-5xl font-extrabold text-slate-900 leading-tight mb-4">
              Join the<br />
              <span style={{ color: "#5B5BC8" }}>Community.</span>
            </h1>
            <p className="text-base text-gray-500 leading-relaxed max-w-md">
              Set up your Vroom profile and start moving. Whether you're commuting or
              road-tripping, safety is our top priority.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl px-6 py-4 shadow-sm flex-1 text-center">
                <p className="text-2xl font-extrabold text-slate-900">{s.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonial image */}
          <div className="rounded-3xl overflow-hidden relative shadow-sm" style={{ height: 220 }}>
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&auto=format&fit=crop"
              alt="Commuters"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-end p-6"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)" }}
            >
              <div>
                <p className="text-white text-base font-semibold italic leading-snug max-w-sm">
                  "Vroom makes my daily commute worry-free and efficient."
                </p>
                <p className="text-gray-300 text-xs mt-1">— Marcus T., Daily Rider</p>
              </div>
            </div>
          </div>

          {/* Perks list */}
          <div className="grid grid-cols-2 gap-3">
            {perks.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="bg-white rounded-2xl p-4 flex items-start gap-3 shadow-sm"
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#EEF2FF" }}
                >
                  <Icon size={15} color="#5B5BC8" />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL — Form ── */}
        <div className="sticky top-8">

          {/* Avatar */}
          <div className="flex flex-col items-center mb-6">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              onClick={handleAvatarClick}
              className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-2 overflow-hidden hover:opacity-90 transition-opacity"
            >
              {avatarUrl
                ? <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                : <Camera size={26} className="text-gray-400" />
              }
              <div
                className="absolute bottom-0.5 right-0.5 w-7 h-7 rounded-full flex items-center justify-center shadow"
                style={{ backgroundColor: "#5B5BC8" }}
              >
                <ArrowRight size={13} color="white" />
              </div>
            </button>
            <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
              Upload Photo
            </span>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl p-7 shadow-sm">
            <h2 className="font-bold text-slate-900 text-lg mb-1">Personal Information</h2>
            <p className="text-xs text-gray-400 mb-6">This information is visible to other members.</p>

            {/* Full Name */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name</label>
              <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3.5 py-3 focus-within:border-indigo-400 transition-colors">
                <User size={15} className="text-gray-400 shrink-0" />
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="flex-1 outline-none text-sm placeholder:text-gray-300 bg-transparent text-slate-800"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
              <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3.5 py-3 focus-within:border-indigo-400 transition-colors">
                <Mail size={15} className="text-gray-400 shrink-0" />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  type="email"
                  className="flex-1 outline-none text-sm placeholder:text-gray-300 bg-transparent text-slate-800"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number</label>
              <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3.5 py-3 focus-within:border-indigo-400 transition-colors">
                <Phone size={15} className="text-gray-400 shrink-0" />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                  type="tel"
                  className="flex-1 outline-none text-sm placeholder:text-gray-300 bg-transparent text-slate-800"
                />
              </div>
            </div>

            {/* Car owner */}
            <div
              className="flex items-start gap-3 rounded-2xl p-4 mb-6 cursor-pointer"
              style={{ backgroundColor: "#F5F6FF" }}
              onClick={() => setIsCarOwner(!isCarOwner)}
            >
              <input
                id="carOwner"
                type="checkbox"
                checked={isCarOwner}
                onChange={(e) => setIsCarOwner(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded accent-indigo-600 cursor-pointer shrink-0"
                onClick={(e) => e.stopPropagation()}
              />
              <label htmlFor="carOwner" className="cursor-pointer">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-sm font-semibold text-slate-800">I am a car owner</span>
                  <Car size={14} color="#5B5BC8" />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Check this if you plan to offer rides. We'll guide you through driver onboarding next.
                </p>
              </label>
            </div>

            {/* CTA */}
            <Link href="/home" className="block mb-5">
              <button
                className="w-full py-3.5 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 border-2 border-dashed hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#15499c", borderColor: "#8B8BDE" }}
              >
                Let's Vroom!
                <ArrowRight size={16} />
              </button>
            </Link>

            {/* Legal */}
            <p className="text-center text-xs text-gray-400 leading-relaxed">
              By clicking "Let's Vroom!", you agree to our{" "}
              <a href="#" className="underline" style={{ color: "#5B5BC8" }}>Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="underline" style={{ color: "#5B5BC8" }}>Privacy Policy</a>.
              {" "}We value your data security.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

