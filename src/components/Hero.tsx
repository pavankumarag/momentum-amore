"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function getTimeLeft(targetDate: Date) {
  const distance = targetDate.getTime() - new Date().getTime();
  if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));
    const timer = setInterval(() => {
      const next = getTimeLeft(targetDate);
      setTimeLeft(next);
      if (Object.values(next).every(v => v === 0)) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-3 sm:gap-4 justify-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="text-center">
          <div className="bg-primary/10 rounded-lg py-2 sm:py-3 w-[60px] sm:w-[72px]">
            <span className="text-2xl sm:text-3xl font-bold text-primary">
              {String(value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-gray-500 mt-1 block capitalize">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const eventDate = new Date("2026-08-02T18:00:00");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Image src="/images/logo.jpg" alt="Momentum Amore" width={320} height={320} className="w-64 sm:w-80 md:w-96 h-auto" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary mb-4 animate-fade-in-up">
          Momentum<span className="text-primary">Amore</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-2 font-light">
          Where Sparks Meet Momentum
        </p>
        <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
          A curated speed dating experience designed for meaningful connections.
          Meet like-minded singles in a fun, safe, and organized setting.
        </p>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 text-primary text-sm sm:text-base mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>August 2, 2026 &bull; 6:00 PM onwards</span>
          </div>
        </div>

        <CountdownTimer targetDate={eventDate} />

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#register"
            className="px-8 py-4 bg-primary text-white rounded-full text-lg font-bold hover:bg-primary-dark transition-all animate-pulse-glow shadow-lg"
          >
            Register Now
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 bg-background text-primary border border-primary rounded-full text-lg font-medium hover:bg-primary/10 transition-all"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
