"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  CarFront,
  MapPin,
  Users,
  Star,
  Clock3,
  Car,
  Shield,
  User,
  ArrowRight,
  Calendar,
} from "lucide-react";

const rides = [
  {
    id: 1,
    name: "Marcus T.",
    avatar: "https://i.pravatar.cc/100?img=15",
    rating: 4.9,
    price: 12.50,
    pickup: "Central Station, North Wing",
    dropoff: "Tech Hub South Sector",
    time: "08:30 AM",
    seats: 2,
  },
  {
    id: 2,
    name: "Sarah K.",
    avatar: "https://i.pravatar.cc/100?img=5",
    rating: 4.8,
    price: 15.00,
    pickup: "Airport Terminal 2",
    dropoff: "Downtown Marriott",
    time: "09:00 AM",
    seats: 3,
  },
  {
    id: 3,
    name: "James R.",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 4.7,
    price: 10.00,
    pickup: "Palo Alto Tech Park",
    dropoff: "Financial District",
    time: "09:45 AM",
    seats: 1,
  },
  {
    id: 4,
    name: "Priya M.",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 5.0,
    price: 18.00,
    pickup: "University Ave",
    dropoff: "Skyline Tower",
    time: "10:15 AM",
    seats: 2,
  },
];

export default function FindRidePage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div
      className="min-h-screen pb-28 md:pb-0"
      style={{ backgroundColor: "#ECECF3" }}
    >
      <div className="md:max-w-6xl md:mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center px-5 pt-5 pb-4 md:px-8 md:pt-8">
          <Link href="/home" className="flex items-center gap-2">
            <CarFront size={20} color="#134688" />
            <h1 className="font-bold text-2xl" style={{ color: "#134688" }}>
              Vroom
            </h1>
            
          </Link>
          <Link href="/profile">
  <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition">
    <User size={20} color="#134688" />
  </button>
</Link>
        </div>

        <div className="px-5 md:px-8 md:grid md:grid-cols-[340px_1fr] md:gap-8 md:items-start">

          {/* LEFT: Search form (sticky on desktop) */}
          <div className="md:sticky md:top-6">

            {/* From → To + Date + Passengers */}
            <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
              <div className="flex flex-col gap-3">

                {/* From */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#EEF2FF" }}
                  >
                    <MapPin size={13} color="#134688" />
                  </div>
                  <input
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="From — pickup location"
                    className="flex-1 outline-none text-sm placeholder:text-gray-400 bg-transparent"
                  />
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3 pl-0.5">
                  <div className="w-6 flex justify-center">
                    <div className="w-[2px] h-5 bg-gray-200 rounded-full mx-auto" />
                  </div>
                  <div className="flex-1 border-t border-dashed border-gray-200" />
                </div>

                {/* To */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#EEF2FF" }}
                  >
                    <ArrowRight size={13} color="#2563EB" />
                  </div>
                  <input
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="To — destination"
                    className="flex-1 outline-none text-sm placeholder:text-gray-400 bg-transparent"
                  />
                </div>

                <div className="border-t border-gray-100 my-1" />

                {/* Date */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#EEF2FF" }}
                  >
                    <Calendar size={13} color="#5B5BC8" />
                  </div>
                  <input
                    type="date"
                    className="flex-1 outline-none text-sm text-gray-500 bg-transparent"
                  />
                </div>

                <div className="border-t border-gray-100 my-1" />

                {/* Passengers */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#EEF2FF" }}
                  >
                    <Users size={13} color="#5B5BC8" />
                  </div>
                  <select className="flex-1 outline-none text-sm text-gray-500 bg-transparent">
                    <option value="">Passengers</option>
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                  </select>
                </div>

                {/* Search button */}
                <button
                  className="w-full py-3 rounded-xl text-white font-semibold text-sm mt-1 flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#134688" }}
                >
                  <Search size={15} />
                  Search Rides
                </button>

              </div>
            </div>

          </div>

          {/* RIGHT: Ride cards */}
          <div>
            {/* Title */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg text-slate-900">
                Available Rides
              </h2>
              <span className="text-sm font-semibold" style={{ color: "#5B5BC8" }}>
                {rides.length * 3} found
              </span>
            </div>

            <div className="space-y-4">
              {rides.map((ride) => (
                <div
                  key={ride.id}
                  className="bg-white rounded-3xl p-5 shadow-sm"
                >
                  {/* Driver info + price */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={ride.avatar}
                        alt=""
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-bold text-slate-900">
                          {ride.name}
                        </h3>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Star size={12} fill="#F59E0B" color="#F59E0B" />
                          <span className="text-xs text-gray-500">
                            {ride.rating} Safety Score
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-xl" style={{ color: "#5B5BC8" }}>
                        ${ride.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        per seat
                      </p>
                    </div>
                  </div>

                  {/* Route */}
                  <div className="flex gap-3 mb-4">
                    <div className="flex flex-col items-center pt-1">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#5B5BC8" }}
                      />
                      <div className="w-[1.5px] h-8 bg-gray-200 my-1" />
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: "#2563EB" }}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="mb-3">
                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                          Pickup
                        </p>
                        <p className="font-semibold text-sm text-slate-900">
                          {ride.pickup}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">
                          Dropoff
                        </p>
                        <p className="font-semibold text-sm text-slate-900">
                          {ride.dropoff}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Time + Book */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock3 size={15} />
                      <span className="text-sm">{ride.time}</span>
                      <span className="text-gray-300">·</span>
                      <Users size={15} />
                      <span className="text-sm">{ride.seats} seats left</span>
                    </div>

                    <Link href="/ride_details" className="block">
                      <button
                        className="px-5 py-2.5 rounded-2xl text-white text-sm font-bold border-2 border-dashed transition-opacity hover:opacity-90"
                        style={{
                          backgroundColor: "#134688",
                          borderColor: "#8B8BDE",
                        }}
                      >
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav - mobile only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t h-20 md:hidden">
        <div className="flex justify-around py-4">
          <button
            className="flex flex-col items-center"
            style={{ color: "#5B5BC8" }}
          >
            <Search size={20} />
            <span className="text-xs">Explore</span>
          </button>

          <Link href="/my_rides" className="flex flex-col items-center text-gray-500">
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
