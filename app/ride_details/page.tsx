"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Share2,
  Shield,
  User,
  Search,
  Car,
  MapPin,
  MessageSquare,
  CarFront,
} from "lucide-react";

const source = "find_ride"; // change to "create_ride" when coming from driver flow

export default function RideDetailsPage() {
  return (
    <div
      className="min-h-screen pb-28 md:pb-0"
      style={{ backgroundColor: "#ECECF3" }}
    >
      {/* Top Header */}
      <div className="flex items-center justify-between p-5 md:max-w-6xl md:mx-auto md:px-8 md:py-6">
        <Link href="/home" className="flex items-center gap-2">
          <CarFront size={20} color="#134688" />
          <h1 className="font-bold text-2xl" style={{ color: "#134688" }}>
            Vroom
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <Share2 size={20} className="cursor-pointer" />
          <Link href="/profile">
  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition">
    <User size={20} color="#134688" />
  </button>
</Link>
        </div>
      </div>

      {/* Back arrow + title */}
      <div className="px-5 md:max-w-6xl md:mx-auto md:px-8 mb-4 flex items-center gap-3">
        {source === "find_ride" ? (
          <Link href="/find_ride">
            <ArrowLeft size={22} />
          </Link>
        ) : (
          <Link href="/my_rides">
            <ArrowLeft size={22} />
          </Link>
        )}
        <h2 className="font-bold text-2xl" style={{ color: "#5B5BC8" }}>
          Ride Details
        </h2>
      </div>

      {/* Page content */}
      <div className="px-5 md:max-w-6xl md:mx-auto md:px-8 md:grid md:grid-cols-[1.3fr_1fr] md:gap-6 md:items-start">

        {/* LEFT COLUMN */}
        <div>
          {/* Route Map */}
          <div className="bg-white rounded-3xl p-3 shadow-sm">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=1000"
                alt="map"
                className="rounded-2xl h-64 md:h-[420px] w-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white px-4 py-2 rounded-full text-sm font-medium">
                ⏱ 42 min est.
              </div>
            </div>
          </div>

          {/* Route Card */}
          <div className="bg-white rounded-3xl p-5 mt-5">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <MapPin size={18} color="#5B5BC8" />
                <div className="h-12 border-l border-gray-300"></div>
                <MapPin size={18} color="#2563EB" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Financial District</h3>
                <p className="text-gray-500 text-sm">
                  Market & 1st St, San Francisco
                </p>
                <div className="h-5"></div>
                <h3 className="font-bold text-lg">Palo Alto Tech Park</h3>
                <p className="text-gray-500 text-sm">
                  University Ave, Palo Alto
                </p>
              </div>
            </div>
          </div>

          {/* Co Passengers */}
          <div className="bg-white rounded-3xl p-5 mt-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl">Co-passengers</h2>
              <span className="text-sm text-gray-500">2/3 Seats taken</span>
            </div>

            <div className="flex gap-5">
              <div className="text-center">
                <img
                  src="https://i.pravatar.cc/100?img=5"
                  className="w-12 h-12 rounded-full mx-auto"
                  alt=""
                />
                <p className="text-xs mt-2">Sarah J.</p>
              </div>

              <div className="text-center">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  className="w-12 h-12 rounded-full mx-auto"
                  alt=""
                />
                <p className="text-xs mt-2">David L.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-2 border-dashed flex items-center justify-center">
                  <User size={18} />
                </div>
                <p className="text-xs mt-2">Your Seat</p>
              </div>

              <Link href="/ride_chat" className="text-center block">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                  <MessageSquare size={18} />
                </div>
                <p className="text-xs mt-2">Chat</p>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:sticky md:top-6">
          <div className="bg-white rounded-3xl p-5 mt-5 md:mt-0">
            <div className="flex gap-4">
              <img
                src="https://i.pravatar.cc/150?img=15"
                alt=""
                className="w-16 h-16 rounded-2xl"
              />
              <div>
                <h2 className="font-bold text-2xl">Marcus Chen</h2>
                <p className="text-gray-500 text-sm">124 rides completed</p>
                <div className="flex gap-2 mt-2">
                  <span
                    className="text-white text-xs px-2 py-1 rounded"
                    style={{ backgroundColor: "#F59E0B" }}
                  >
                    ★ 4.9
                  </span>
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded">
                    ID VERIFIED
                  </span>
                </div>
              </div>
            </div>

            {/* Vehicle */}
            <div className="bg-gray-50 rounded-2xl p-4 mt-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-xs">Vehicle</p>
                  <h3 className="font-bold">Tesla Model 3</h3>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Color</p>
                  <h3 className="font-bold">Midnight Silver</h3>
                </div>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-gray-50 rounded-2xl p-4 mt-4 flex items-center gap-3">
              <Shield size={20} color="#5B5BC8" />
              <div>
                <p className="text-gray-400 text-xs">Safety Rating</p>
                <h3 className="font-bold">Top Tier</h3>
              </div>
            </div>

            {/* Pricing */}
            <div className="mt-6">
              <p className="text-gray-500">Total per person</p>
              <div className="flex justify-between items-end">
                <h1 className="text-5xl font-bold">$14.50</h1>
                <div className="text-right">
                  <p className="line-through text-gray-400">$18.00</p>
                  <p className="text-orange-500 text-sm font-semibold">
                    20% Corporate Discount
                  </p>
                </div>
              </div>
            </div>

            {/* Join Ride */}
            <Link href="/join_ride" className="block">
              <button
                className="w-full py-4 rounded-2xl text-white font-bold text-lg mt-6 transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#134688" }}
              >
                Join Ride
              </button>
            </Link>

            <p className="text-xs text-center text-gray-500 mt-4">
              By joining, you agree to the Vroom Community Guidelines and
              Safety Protocol.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:h-12" />

      {/* Bottom Navigation - mobile only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t h-20 md:hidden">
        <div className="flex justify-around py-4">
          <Link
            href="/find_ride"
            className="flex flex-col items-center"
            style={{ color: "#134688" }}
          >
            <Search size={20} />
            <span className="text-xs">Find Ride</span>
          </Link>

          <Link
            href="/my_rides"
            className="flex flex-col items-center text-gray-500"
          >
            <Car size={20} />
            <span className="text-xs">My Rides</span>
          </Link>

          <button className="flex flex-col items-center text-gray-500">
            <Shield size={20} />
            <span className="text-xs">Safety</span>
          </button>

          <button className="flex flex-col items-center text-gray-500">
            <User size={20} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
