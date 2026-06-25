"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Phone,
  MoreVertical,
  ShieldCheck,
  Smile,
  Plus,
  Send,
  Check,
  CheckCheck,
} from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "Marcus Chen",
    role: "Driver",
    avatar: "https://i.pravatar.cc/100?img=15",
    text: "Hi everyone! I'm about 5 minutes away from the pickup point at 5th and Main. I'm driving a silver sedan.",
    time: "10:15 AM",
    type: "incoming",
  },
  {
    id: 2,
    sender: "Sarah Jenkins",
    role: null,
    avatar: "https://i.pravatar.cc/100?img=5",
    text: "Great, thanks Marcus! I'm standing right by the coffee shop. See you soon!",
    time: "10:16 AM",
    type: "incoming",
  },
  {
    id: 3,
    sender: "You",
    role: null,
    avatar: null,
    text: "Perfect. I'm just crossing the street now. I see the coffee shop!",
    time: "10:17 AM",
    type: "outgoing",
    read: true,
  },
];

export default function RideChatPage() {
  const [input, setInput] = useState("");

  return (
    <div className="h-screen w-full flex flex-col bg-white">
      {/* Header */}
      <div
        className="px-5 md:px-8 pt-5 pb-4 flex items-center justify-between shrink-0 border-b border-gray-100"
        style={{ backgroundColor: "#ECECF3" }}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <button>
          <Link
            href="/ride_details"
           className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
            <ArrowLeft size={18} />
                 </Link>
          </button>

          <div className="flex -space-x-3">
            <img
              src="https://i.pravatar.cc/100?img=15"
              alt=""
              className="w-9 h-9 rounded-full border-2 border-white"
            />
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt=""
              className="w-9 h-9 rounded-full border-2 border-white"
            />
          </div>

          <div>
            <h1 className="font-bold text-sm md:text-base leading-tight">
              Ride to Downtown
            </h1>
            <p className="text-xs text-gray-500 leading-tight">
              Marcus, Sarah, and You
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-5">
          <button>
            <Phone size={20} color="#5B5BC8" />
          </button>
          <button>
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Encrypted banner */}
      <div className="mx-5 md:mx-auto md:w-full md:max-w-3xl mt-4 shrink-0">
        <div
          className="rounded-2xl p-4 flex gap-3"
          style={{ backgroundColor: "#E8F0FE" }}
        >
          <ShieldCheck size={20} color="#2563EB" className="shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-sm text-blue-900">
              Encrypted Ride Chat
            </h3>
            <p className="text-xs text-blue-700 mt-0.5">
              Only participants in this ride can see these messages. Safe
              travels!
            </p>
          </div>
        </div>
      </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 md:px-8 py-4">
          <div className="md:max-w-3xl md:mx-auto">
            <div className="flex justify-center mb-5">
              <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">
                TODAY
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {messages.map((m) =>
                m.type === "incoming" ? (
                  <div key={m.id} className="flex flex-col items-start">
                    <span className="text-xs font-semibold text-gray-500 mb-1 ml-12">
                      {m.sender}
                      {m.role ? ` (${m.role})` : ""}
                    </span>

                    <div className="flex items-end gap-2 max-w-[85%]">
                      <img
                        src={m.avatar}
                        alt=""
                        className="w-8 h-8 rounded-full shrink-0"
                      />

                      <div>
                        <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
                          <p className="text-sm text-gray-800">{m.text}</p>
                        </div>
                        <span className="text-xs text-gray-400 mt-1 block">
                          {m.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={m.id} className="flex flex-col items-end">
                    <div className="max-w-[85%]">
                      <div
                        className="rounded-2xl rounded-br-sm px-4 py-3"
                        style={{ backgroundColor: "#5B5BC8" }}
                      >
                        <p className="text-sm text-white">{m.text}</p>
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-xs text-gray-400">{m.time}</span>
                        {m.read ? (
                          <CheckCheck size={14} color="#5B5BC8" />
                        ) : (
                          <Check size={14} className="text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                )
              )}

              {/* Shared photo preview */}
              <div className="flex justify-end">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400"
                  alt="shared"
                  className="rounded-2xl w-40 h-28 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="px-4 md:px-8 py-4 border-t border-gray-100 shrink-0">
          <div className="flex items-center gap-3 md:max-w-3xl md:mx-auto">
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
              <Plus size={18} className="text-gray-500" />
            </button>

            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <Smile size={18} className="text-gray-400 shrink-0" />
            </div>

            <button
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#5B5BC8" }}
            >
              <Send size={16} color="white" />
            </button>
          </div>
        </div>
    </div>
  );
}
