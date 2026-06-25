"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Star,
  X,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Clock3,
  Wallet,
  Users,
  Car,
  CarFront,
} from "lucide-react";

const rideData = {
  from: "Central Station, North Wing",
  to: "Tech Hub South Sector",
  date: "Today, 8:30 AM",
  duration: "24 min",
  fare: "₹180",
  seats: 2,
};

const driver = {
  id: "driver",
  name: "Marcus T.",
  avatar: "https://i.pravatar.cc/100?img=15",
  role: "driver",
  vehicle: "Maruti Swift · MH 12 AB 3456",
};

const coPassengers = [
  { id: "p1", name: "Sarah K.", avatar: "https://i.pravatar.cc/100?img=5", role: "passenger" },
  { id: "p2", name: "James R.", avatar: "https://i.pravatar.cc/100?img=12", role: "passenger" },
];

const driverTags = ["Punctual", "Friendly", "Safe driving", "Clean car", "Smooth ride", "Great music"];
const passengerTags = ["Respectful", "On time", "Good company", "Quiet ride", "Easy to find", "Polite"];

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          className="transition-transform hover:scale-110 active:scale-95"
        >
          <Star
            size={36}
            fill={(hovered || value) >= star ? "#F59E0B" : "none"}
            color={(hovered || value) >= star ? "#F59E0B" : "#D1D5DB"}
            strokeWidth={1.5}
          />
        </button>
      ))}
    </div>
  );
}

function TagPill({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all"
      style={
        selected
          ? { backgroundColor: "#5B5BC8", borderColor: "#5B5BC8", color: "white" }
          : { backgroundColor: "white", borderColor: "#E5E7EB", color: "#6B7280" }
      }
    >
      {label}
    </button>
  );
}

function RatingStep({ person, tags, rating, setRating, selectedTags, toggleTag, comment, setComment, isLast, onNext, stepIndex, totalSteps }) {
  const isDriver = person.role === "driver";
  const ratingLabel = ["", "Poor", "Fair", "Good", "Great", "Amazing!"][rating] || "Tap to rate";

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all"
            style={{ width: i === stepIndex ? 20 : 8, height: 8, backgroundColor: i <= stepIndex ? "#5B5BC8" : "#E5E7EB" }}
          />
        ))}
      </div>

      <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ backgroundColor: "#F5F6FF" }}>
        <img src={person.avatar} alt={person.name} className="w-14 h-14 rounded-full object-cover" />
        <div>
          <p className="font-extrabold text-slate-900 text-base">{person.name}</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            {isDriver
              ? <><Car size={12} className="text-gray-400" /><span className="text-xs text-gray-400">{person.vehicle}</span></>
              : <><Users size={12} className="text-gray-400" /><span className="text-xs text-gray-400">Co-passenger</span></>
            }
          </div>
        </div>
        <div className="ml-auto text-right">
          <p className="text-xs text-gray-400 mb-0.5">Rating</p>
          <p className="font-bold text-sm" style={{ color: "#5B5BC8" }}>{rating ? `${rating}.0 ★` : "—"}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <StarRating value={rating} onChange={setRating} />
        <p className="text-sm font-semibold" style={{ color: rating ? "#F59E0B" : "#9CA3AF" }}>{ratingLabel}</p>
      </div>

      {rating > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">What stood out?</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TagPill key={tag} label={tag} selected={selectedTags.includes(tag)} onClick={() => toggleTag(tag)} />
            ))}
          </div>
        </div>
      )}

      {rating > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
            Leave a note <span className="normal-case font-normal text-gray-300">(optional)</span>
          </p>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={isDriver ? "How was the ride overall?" : "Anything about your co-passenger?"}
            rows={2}
            className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-slate-800 placeholder:text-gray-300 outline-none resize-none focus:border-indigo-300 transition-colors"
          />
        </div>
      )}

      <button
        onClick={onNext}
        disabled={!rating}
        className="w-full py-3.5 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 border-2 border-dashed transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90"
        style={{ backgroundColor: "#5B5BC8", borderColor: "#8B8BDE" }}
      >
        {isLast ? "Submit Ratings" : `Next — Rate ${coPassengers[stepIndex] ? coPassengers[stepIndex].name.split(" ")[0] : ""}`}
        <ChevronRight size={16} />
      </button>

      {!rating && <p className="text-center text-xs text-gray-400 -mt-2">Tap the stars to continue</p>}
    </div>
  );
}

function SummaryStep({ ratings, onDone }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center gap-3 py-2">
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: "#DCFCE7" }}>
          <CheckCircle2 size={32} color="#16A34A" />
        </div>
        <div className="text-center">
          <p className="font-extrabold text-xl text-slate-900">Thanks for rating! 🎉</p>
          <p className="text-sm text-gray-400 mt-1">Your feedback helps keep Vroom safe</p>
        </div>
      </div>

      <div className="rounded-2xl p-4 flex flex-col gap-3" style={{ backgroundColor: "#F5F6FF" }}>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Trip Summary</p>
        <div className="flex gap-3">
          <div className="flex flex-col items-center pt-1 shrink-0">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#5B5BC8" }} />
            <div className="w-px h-6 bg-gray-200 my-1" />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2563EB" }} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-slate-800">{rideData.from}</p>
            <div className="my-1" />
            <p className="text-xs font-semibold text-slate-800">{rideData.to}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-1 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Clock3 size={13} /><span className="text-xs">{rideData.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <MapPin size={13} /><span className="text-xs">{rideData.date}</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <Wallet size={13} color="#5B5BC8" />
            <span className="text-xs font-bold" style={{ color: "#134688" }}>{rideData.fare}</span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Ratings Given</p>
        <div className="flex flex-col gap-2">
          {ratings.map(({ person, rating }) => (
            <div key={person.id} className="flex items-center gap-3 p-3 bg-white rounded-2xl">
              <img src={person.avatar} alt={person.name} className="w-9 h-9 rounded-full object-cover" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-800">{person.name}</p>
                <p className="text-xs text-gray-400">{person.role === "driver" ? "Driver" : "Co-passenger"}</p>
              </div>
              <div className="flex items-center gap-1">
                <Star size={14} fill="#F59E0B" color="#F59E0B" />
                <span className="text-sm font-bold text-slate-900">{rating}.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onDone}
        className="w-full py-3.5 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 border-2 border-dashed hover:opacity-90 transition-opacity"
        style={{ backgroundColor: "#134688", borderColor: "#8B8BDE" }}
      >
        Let's Vroom! 🚗
      </button>
    </div>
  );
}

function RatingSheet({ open, onClose }) {
  const router = useRouter();
  const allPeople = [driver, ...coPassengers];
  const totalSteps = allPeople.length + 1;
  const [step, setStep] = useState(0);
  const [ratings, setRatings] = useState({});
  const [selectedTags, setSelectedTags] = useState({});
  const [comments, setComments] = useState({});

  const currentPerson = allPeople[step];
  const isLastRatingStep = step === allPeople.length - 1;
  const isSummaryStep = step === allPeople.length;

  const getRating = (id) => ratings[id] || 0;
  const setRating = (id, val) => setRatings((r) => ({ ...r, [id]: val }));
  const getSelectedTags = (id) => selectedTags[id] || [];
  const toggleTag = (id, tag) =>
    setSelectedTags((t) => {
      const current = t[id] || [];
      return { ...t, [id]: current.includes(tag) ? current.filter((x) => x !== tag) : [...current, tag] };
    });
  const getComment = (id) => comments[id] || "";
  const setComment = (id, val) => setComments((c) => ({ ...c, [id]: val }));
  const handleNext = () => setStep((s) => s + 1);
  const handleDone = () => {
    setStep(0);
    setRatings({});
    setSelectedTags({});
    setComments({});
    onClose();
    router.push("/home");
  };

  const summaryRatings = allPeople.map((p) => ({ person: p, rating: getRating(p.id) }));

  return (
    <>
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        onClick={onClose}
      />
      <div
        className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl transition-transform duration-500 ease-out"
        style={{ transform: open ? "translateY(0)" : "translateY(100%)", maxHeight: "90vh", overflowY: "auto" }}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100">
          <div>
            <p className="font-extrabold text-slate-900 text-base">
              {isSummaryStep ? "Trip Complete" : `Rate ${currentPerson.role === "driver" ? "Your Driver" : currentPerson.name.split(" ")[0]}`}
            </p>
            <p className="text-xs text-gray-400">
              {isSummaryStep ? "Here's how your trip went" : `Step ${step + 1} of ${totalSteps}`}
            </p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <X size={15} className="text-gray-500" />
          </button>
        </div>
        <div className="px-6 py-5">
          {isSummaryStep ? (
            <SummaryStep ratings={summaryRatings} onDone={handleDone} />
          ) : (
            <RatingStep
              person={currentPerson}
              tags={currentPerson.role === "driver" ? driverTags : passengerTags}
              rating={getRating(currentPerson.id)}
              setRating={(val) => setRating(currentPerson.id, val)}
              selectedTags={getSelectedTags(currentPerson.id)}
              toggleTag={(tag) => toggleTag(currentPerson.id, tag)}
              comment={getComment(currentPerson.id)}
              setComment={(val) => setComment(currentPerson.id, val)}
              isLast={isLastRatingStep}
              onNext={handleNext}
              stepIndex={step}
              totalSteps={totalSteps}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default function RatingSheetPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ backgroundColor: "#ECECF3" }}>

      <div className="text-center mb-4">
        <Link href="/home" className="flex items-center justify-center gap-2 mb-2" style={{ textDecoration: "none" }}>
          <CarFront size={20} color="#0a2f5f" />
          <span className="font-bold text-2xl" style={{ color: "#134688" }}>Vroom</span>
        </Link>
        <p className="text-sm text-gray-500">Post-ride rating sheet</p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-sm w-80 text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#DCFCE7" }}>
          <CheckCircle2 size={28} color="#16A34A" />
        </div>
        <p className="font-extrabold text-slate-900 text-lg mb-1">You've arrived!</p>
        <p className="text-sm text-gray-400 mb-1">{rideData.from} → {rideData.to}</p>
        <p className="text-xs text-gray-400 mb-4">{rideData.duration} · {rideData.fare}</p>
        <button
          onClick={() => setOpen(true)}
          className="w-full py-3 rounded-2xl text-white font-bold text-sm border-2 border-dashed hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#134688", borderColor: "#8B8BDE" }}
        >
          Rate Your Ride ★
        </button>
      </div>

      <RatingSheet open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
