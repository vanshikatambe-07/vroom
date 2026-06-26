"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Flag,
  Calendar,
  Clock3,
  Car,
  User,
  CarFront,
} from "lucide-react";

export default function CreateRidePage() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState(3);
  const [fare, setFare] = useState(25);

  const publishRide = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/rides/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            source,
            destination,
            date,
            time,
            seats,
            fare,
            driverName: "Vanshika",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Ride Published Successfully 🚀");
        console.log(data);
      } else {
        alert(data.message || "Failed to publish ride");
      }
    } catch (error) {
      console.error(error);
      alert("Backend connection failed");
    }
  };

  return (
    <div
      className="min-h-screen pb-24"
      style={{ backgroundColor: "#ECECF3" }}
    >
      <div className="w-full px-5 pt-5 pb-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
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
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
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
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
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
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
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
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
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

                  <button
                    className="w-10 h-10 rounded-full bg-gray-200"
                    onClick={() => setSeats(Math.max(1, seats - 1))}
                  >
                    -
                  </button>

                  <span className="text-2xl font-bold">
                    {seats}
                  </span>

                  <button
                    className="w-10 h-10 rounded-full text-white"
                    style={{ backgroundColor: "#134688" }}
                    onClick={() => setSeats(seats + 1)}
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
                  value={fare}
                  onChange={(e) => setFare(Number(e.target.value))}
                  className="mt-4 border rounded-xl p-3 w-full"
                />
              </div>

              <div className="bg-white rounded-2xl border p-5">
                <div className="flex items-center gap-3">
                  <Car size={22} color="#134688" />

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

              <button
                type="button"
                onClick={publishRide}
                className="w-full py-4 rounded-2xl text-white font-bold text-lg mt-6 mb-8"
                style={{
                  backgroundColor: "#134688",
                }}
              >
                Publish Ride 🚀
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
