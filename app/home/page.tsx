"use client";

import Link from "next/link";
import {
  Car,
  Search,
  ShieldCheck,
  MapPin,
  Calendar,
  CarFront,
  User,
  PlusCircle,
  MessageCircle,
  Home,
} from "lucide-react";

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#f2f4f7" }}
    >
      {/* Header */}
   
      <div className="px-6 pt-8 pb-6 flex items-center justify-between">
        <div>
          <h1
            className="text-4xl font-bold tracking-wider"
            style={{ color: "#15499c" }}
            
          >
            VROOM
            
          </h1>
          
          <p className="mt-2" style={{ color: "#6B7280" }}>
            Smart Ride Sharing Platform
          </p>
        </div>
        <Link href="/profile">
  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition">
    <User size={20} color="#134688" />
  </button>
</Link>

      
      </div>
      {/* Welcome Card */}
      <div
        className="mx-4 rounded-3xl p-6 shadow-lg"
        style={{
          backgroundColor: "#0a2f5f",
          color: "#e2dcdc",
        }}
      >
        <h2 className="text-2xl font-bold">
          Welcome Back 👋
        </h2>

        <p className="mt-2">
          Ready for your next journey?
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 px-4 mt-6 items-stretch">
        {/* Find Ride */}
         <Link href="/find_ride" className="w-full block">
          <button
            className="rounded-3xl p-5 border transition w-full h-full text-left"
            style={{
              backgroundColor: "#D8E8FB",
              borderColor: "#9BC3FF",
            }}
          >
            <Search
              size={30}
              className="mb-3"
              style={{ color: "#2563A6" }}
            />
            <h3
              className="font-semibold text-lg"
              style={{ color: "#1E4E7A" }}
            >
              Find Ride
            </h3>
            <p
              className="text-sm"
              style={{ color: "#4D7598" }}
            >
              Search available rides
            </p>
          </button>
        </Link>

        {/* Create Ride */}
        <Link href="/create_ride" className="w-full block">
        <button
          className="rounded-3xl p-5 border transition w-full text-left"
          style={{
            backgroundColor: "#DCD8F7",
            borderColor: "#A78BFA",
          }}
        >
          <PlusCircle
            size={30}
            className="mb-3"
            style={{ color: "#6D28D9" }}
          />

          <h3
            className="font-semibold text-lg"
            style={{ color: "#4C1D95" }}
          >
            Create Ride
          </h3>

          <p
            className="text-sm"
            style={{ color: "#6D28D9" }}
          >
            Offer seats to riders
          </p>
        </button>
        </Link>
      </div>

      {/* Popular Routes */}
      <div className="mt-8 px-4">
        <h2
          className="text-xl font-bold mb-4"
          style={{ color: "#374151" }}
        >
          Popular Routes
        </h2>

        <div className="space-y-4">

          <div
            className="rounded-2xl p-4 border"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#D1D5DB",
            }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p
                  className="font-semibold"
                  style={{ color: "#374151" }}
                >
                  Pune → Mumbai
                </p>

                <p
                  className="text-sm"
                  style={{ color: "#6B7280" }}
                >
                  12 rides available
                </p>
              </div>

              <span
                className="font-bold"
                style={{ color: "#2563A6" }}
              >
                ₹350
              </span>
            </div>
          </div>

          <div
            className="rounded-2xl p-4 border"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#D1D5DB",
            }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p
                  className="font-semibold"
                  style={{ color: "#374151" }}
                >
                  Nashik → Pune
                </p>

                <p
                  className="text-sm"
                  style={{ color: "#6B7280" }}
                >
                  8 rides available
                </p>
              </div>

              <span
                className="font-bold"
                style={{ color: "#2563A6" }}
              >
                ₹220
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Ride */}
      <div className="mt-8 px-4">
        <h2
          className="text-xl font-bold mb-4"
          style={{ color: "#374151" }}
        >
          Upcoming Ride
        </h2>

        <div
          className="rounded-3xl p-5 border"
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "#D1D5DB",
          }}
        >
          <div className="flex items-center gap-3">
            <MapPin style={{ color: "#2563A6" }} />

            <div>
              <h3
                className="font-semibold"
                style={{ color: "#374151" }}
              >
                Pune → Mumbai
              </h3>

              <p
                className="text-sm"
                style={{ color: "#6B7280" }}
              >
                Driver: Rahul Sharma
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-2 mt-4"
            style={{ color: "#6B7280" }}
          >
            <Calendar size={18} />
            <span>Today • 4:30 PM</span>
          </div>
        </div>
      </div>

      {/* Safety Hub */}
      <div className="mt-8 px-4 pb-28">
        <h2
          className="text-xl font-bold mb-4"
          style={{ color: "#7d8188" }}
        >
          Safety Hub
        </h2>

        <div
          className="rounded-3xl p-5 border"
          style={{
            backgroundColor: "#eeecec",
            borderColor: "#D1D5DB",
          }}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-500" />

            <div>
              <h3
                className="font-semibold"
                style={{ color: "#374151" }}
              >
                Verified Members
              </h3>

              <p
                className="text-sm"
                style={{ color: "#6B7280" }}
              >
                Ride confidently with trusted users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      
    </div>
  );
}