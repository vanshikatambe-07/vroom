"use client";

import Link from "next/link";
import {
  Bell,
  MapPin,
  Flag,
  Calendar,
  Clock3,
  Car,
  Search,
  Shield,
  User,
  CarFront,
} from "lucide-react";

export default function CreateRidePage() {
  return (
    <div
      className="min-h-screen pb-24"
      style={{ backgroundColor: "#ECECF3" }}
    >
      <div className="w-full px-5 pt-5 pb-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">

  {/* Left: Logo */}
  <Link href="/home" className="flex items-center gap-2">
    <CarFront size={20} color="#134688" />

    <h1
      className="font-bold text-2xl"
      style={{ color: "#134688" }}
    >
      Vroom
    </h1>
  </Link>

  {/* Right: Profile */}
  <Link href="/profile">
    <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition">
      <User size={20} color="#134688" />
    </button>
  </Link>

</div>

    
       

        {/* Title */}
        <h2 className="text-4xl font-bold text-slate-900">
          Offer a Ride
        </h2>

        <p className="text-slate-500 mt-2 mb-10">
          Fill in your journey details to find passengers.
        </p>

        {/* STEP 1 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: "#134688" }}
            >
              1
            </div>
            <div className="w-[2px] h-full bg-gray-300 mt-2"></div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-5">
              Set Route
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-2xl border">
                <label className="text-xs text-gray-500">
                  PICKUP POINT
                </label>

                <div className="flex items-center gap-3 mt-2">
                  <MapPin size={18} color="#134688" />
                  <input
                    placeholder="Enter departure city"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border">
                <label className="text-xs text-gray-500">
                  DROPOFF POINT
                </label>

                <div className="flex items-center gap-3 mt-2">
                  <Flag size={18} color="#134688" />
                  <input
                    placeholder="Enter destination city"
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <div className="bg-white p-3 rounded-2xl shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=1000"
                  alt="map"
                  className="rounded-xl h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="flex gap-4 mb-10">
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: "#134688" }}
            >
              2
            </div>

            <div className="w-[2px] h-full bg-gray-300 mt-2"></div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-5">
              Schedule
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-2xl border">
                <label className="text-xs text-gray-500">
                  DEPARTURE DATE
                </label>

                <div className="flex items-center gap-3 mt-2">
                  <Calendar size={18} color="#134688" />
                  <input
                    type="date"
                    className="outline-none w-full"
                  />
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border">
                <label className="text-xs text-gray-500">
                  DEPARTURE TIME
                </label>

                <div className="flex items-center gap-3 mt-2">
                  <Clock3 size={18} color="#134688" />
                  <input
                    type="time"
                    className="outline-none w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="flex gap-4">
          <div>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
              style={{ backgroundColor: "#134688" }}
            >
              3
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-5">
              Ride Details
            </h3>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl border p-5">
                <h4 className="font-bold">
                  Available Seats
                </h4>

                <div className="flex justify-center gap-5 mt-4">
                  <button className="w-10 h-10 rounded-full bg-gray-200">
                    -
                  </button>

                  <span className="text-2xl font-bold">
                    3
                  </span>

                  <button
                    className="w-10 h-10 rounded-full text-white"
                    style={{
                      backgroundColor: "#134688",
                    }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl border p-5">
                <h4 className="font-bold">
                  Price per Seat
                </h4>

                <input
                  type="number"
                  defaultValue="25"
                  className="mt-4 border rounded-xl p-3 w-full"
                />
              </div>

              <div className="bg-white rounded-2xl border p-5">
                <div className="flex items-center gap-3">
                  <Car size={22} color="#134688;" />

                  <div>
                    <h4 className="font-bold">
                      Tesla Model 3
                    </h4>

                    <p className="text-gray-500">
                      White • ABC1234
                    </p>
                  </div>
                </div>
              </div>

              {/* Publish Button */}
              <Link href="/my_rides" className="w-full block">
              <button
                type="button"
                className="w-full py-4 rounded-2xl text-white font-bold text-lg mt-6 mb-8"
                style={{
                  backgroundColor: "#134688",
                }}
              >
                Publish Ride 🚀
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
        );
}