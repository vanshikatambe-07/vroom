"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bell,
  CarFront,
  Shield,
  User,
  Search,
  Car,
  MapPin,
  MessageSquare,
  Clock3,
} from "lucide-react";

export default function MyRidesPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div
      className="min-h-screen pb-32"
      style={{ backgroundColor: "#ECECF3" }}
    >
      <div className="px-5 pt-5">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Link href="/home" className="flex items-center gap-2">
            <CarFront size={20} color="#134688" />

            <h1
              className="font-bold text-2xl"
              style={{ color: "#134688" }}
            >
              Vroom
            </h1>
            </Link>
            
          </div>

          <Link href="/profile">
    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition">
      <User size={20} color="#134688" />
    </button>
  </Link>
        </div>

        {/* Tabs */}
        
      {/* Tabs */}
<div className="bg-white rounded-2xl p-1 flex mb-8">
  <button
    onClick={() => setActiveTab("upcoming")}
    className="flex-1 py-3 rounded-xl font-medium transition"
    style={{
      backgroundColor:
        activeTab === "upcoming" ? "#15499c" : "transparent",
      color:
        activeTab === "upcoming" ? "#FFFFFF" : "#6B7280",
    }}
  >
    Upcoming
  </button>

  <button
    onClick={() => setActiveTab("history")}
    className="flex-1 py-3 rounded-xl font-medium transition"
    style={{
      backgroundColor:
        activeTab === "history" ? "#15499c" : "transparent",
      color:
        activeTab === "history" ? "#dddddd" : "#6B7280",
    }}
  >
    History
  </button>
</div>
        {/* Upcoming */}
        {activeTab === "upcoming" && (
          <>
            <h3 className="font-bold text-gray-500 mb-4">
              NEXT SCHEDULED RIDE
            </h3>

            <div className="bg-white rounded-3xl p-5 shadow-sm">

              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <img
                    src="https://i.pravatar.cc/100"
                    className="w-14 h-14 rounded-full"
                    alt=""
                  />

                  <div>
                    <h4 className="font-bold text-lg">
                      David Miller
                    </h4>

                    <p className="text-sm text-gray-500">
                      ⭐ 4.9 • Gold Partner
                    </p>
                  </div>
                </div>

                <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full">
                  CONFIRMED
                </span>
              </div>

              <div className="mt-6 space-y-4">

                <div>
                  <p className="text-xs text-gray-400">
                    PICKUP
                  </p>

                  <p className="font-semibold">
                    124 Tech Park Avenue
                  </p>

                  <p className="text-sm text-gray-500">
                    08:30 AM
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    DROPOFF
                  </p>

                  <p className="font-semibold">
                    Financial District Central
                  </p>

                  <p className="text-sm text-gray-500">
                    09:15 AM
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 mt-5">
                <div className="flex justify-between">
                  <span>Vehicle</span>

                  <div className="text-right">
                    <p className="font-semibold">
                      Tesla Model 3
                    </p>

                    <p className="text-sm text-gray-500">
                      VRM-7729
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between">
                  <span>Seat Count</span>

                  <span>👤 👤 👤</span>
                </div>
              </div>

              <div className="flex gap-3 mt-5">
                <Link href="/ride_details" className="flex-1 block">

                <button
                  className="w-full py-3 rounded-xl text-white font-semibold"
                  style={{
                    backgroundColor: "#134688",
                  }}
                >
                  View Details
                </button>
                </Link>

               <Link href="/ride_chat" className="block">
               
                </Link>
                
              </div>
            </div>
          </>
        )}

        {/* History */}
        {activeTab === "history" && (
          <>
            <div className="flex justify-between mb-5">
              <h3 className="font-bold text-gray-500">
                RECENT ACTIVITY
              </h3>

              <button className="text-indigo-600 text-sm">
                Export
              </button>
            </div>

            <div className="space-y-4">

              {[
                {
                  route:
                    "Central Square → North Station",
                  amount: "$14.50",
                },
                {
                  route:
                    "Home → Corporate HQ",
                  amount: "$18.20",
                },
                {
                  route:
                    "Airport Terminal 2 → Downtown Hotel",
                  amount: "$42.00",
                },
              ].map((ride, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4"
                >
                  <div className="flex justify-between">
                    <div className="flex gap-3">
                      <div className="bg-gray-100 p-3 rounded-xl">
                        <Clock3 size={20} />
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {ride.route}
                        </h4>

                        <p className="text-sm text-gray-500">
                          May 12, 2024
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold">
                        {ride.amount}
                      </p>

                      <p className="text-xs text-orange-500">
                        COMPLETED
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}