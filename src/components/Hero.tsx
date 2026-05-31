"use client";

import { useEffect, useState } from "react";

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[60px]">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-pink-200 mt-1 block capitalize">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const eventDate = new Date("2025-07-15T18:00:00");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-pink-500" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
          Momentum<span className="text-accent">Amore</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-pink-100 mb-2 font-light">
          Where Sparks Meet Momentum
        </p>
        <p className="text-base sm:text-lg text-pink-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          A curated speed dating experience designed for meaningful connections.
          Meet like-minded singles in a fun, safe, and organized setting.
        </p>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-pink-100 text-sm sm:text-base mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>July 15, 2025 &bull; 6:00 PM onwards</span>
          </div>
        </div>

        <CountdownTimer targetDate={eventDate} />

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#register"
            className="px-8 py-4 bg-accent text-primary-dark rounded-full text-lg font-bold hover:bg-yellow-300 transition-all animate-pulse-glow shadow-lg"
          >
            Register Now
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full text-lg font-medium hover:bg-white/20 transition-all"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
