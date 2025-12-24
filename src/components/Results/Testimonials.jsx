import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {testimonialsData} from './data/testimonialsData';

gsap.defaults({
  overwrite: "auto",
});

const UserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-10 h-10 text-purple-300"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const isAnimating = useRef(false);
  const timerRef = useRef(null); // Ref to store the interval ID

  const { contextSafe } = useGSAP({ scope: containerRef });

  // 1. SCATTER LOGIC
  const getVisualPosition = (distanceFromFront) => {
    switch (distanceFromFront) {
      case 0:
        return {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          zIndex: 10,
          opacity: 1,
          filter: "brightness(1)",
        };
      case 1:
        return {
          x: 25,
          y: -8,
          rotation: 4,
          scale: 0.96,
          zIndex: 9,
          opacity: 1,
          filter: "brightness(0.95)",
        };
      case 2:
        return {
          x: -20,
          y: -15,
          rotation: -3,
          scale: 0.92,
          zIndex: 8,
          opacity: 1,
          filter: "brightness(0.9)",
        };
      default:
        return {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 0,
          zIndex: 0,
          opacity: 0,
          filter: "brightness(0)",
        };
    }
  };

  // 2. ANIMATION HANDLER
  const handleNext = contextSafe(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const total = testimonialsData.length;
    const nextIndex = (activeIndex + 1) % total;

    const currentCard = cardsRef.current[activeIndex];

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(nextIndex);
        isAnimating.current = false;
      },
    });

    tl.to(currentCard, {
      x: 300,
      y: 50,
      rotation: 15,
      opacity: 0,
      scale: 1.1,
      duration: 0.5,
      ease: "power2.in",
      zIndex: 20,
    }).set(currentCard, {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 0.9,
      zIndex: 0,
    });
  });

  // 3. AUTO PLAY LOGIC
  // We use this function to clear the timer when hovering
  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // We use this to restart the timer
  const startAutoPlay = () => {
    if (timerRef.current) return; // Don't start if already running
    timerRef.current = setInterval(handleNext, 3500); // 3.5 seconds
  };

  // Effect to manage the interval lifecycle
  useEffect(() => {
    startAutoPlay();
    // Cleanup function: clear interval when component unmounts or updates
    return () => stopAutoPlay();
  }, [handleNext]); // Re-runs when handleNext changes (which happens when activeIndex changes)

  // 4. SHUFFLE LOGIC (React to state changes)
  useGSAP(() => {
    testimonialsData.forEach((_, i) => {
      const total = testimonialsData.length;
      let distance = (i - activeIndex + total) % total;
      if (distance > 2) distance = 3;
      const pos = getVisualPosition(distance);

      if (!isAnimating.current) {
        gsap.to(cardsRef.current[i], {
          x: pos.x,
          y: pos.y,
          rotation: pos.rotation,
          scale: pos.scale,
          zIndex: pos.zIndex,
          opacity: pos.opacity,
          filter: pos.filter,
          duration: 0.6,
          ease: "back.out(1.2)",
        });
      }
    });
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B0A3D] via-[#1B0629] to-[#12041B] flex flex-col items-center justify-center font-sans">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-white mt-10 mb-2">
          Testimonials
        </h2>
        <h4 className="text-s font-bold">TRUSTED BY FOUNDERS, BACKED BY RESULTS</h4>
        {/* <h4 className="text-s font-bold">BACKED BY RESULTS</h4> */}
      </div>
      <div
        ref={containerRef}
        
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        className="relative w-[620px] h-[760px] perspective-1000 group mb-14" 
      >
        {testimonialsData.map((t, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            onClick={handleNext}
            className="absolute top-0 left-0 w-full h-full rounded-2xl p-8 bg-gradient-to-br from-[#3A1C5E]/80 to-[#1C0B2E]/80 backdrop-blur-xl border border-white/10shadow-[0_25px_80px_-15px_rgba(138,79,255,0.35)] cursor-pointer origin-center transition-shadow duration-300 hover:shadow-[0_35px_90px_-10px_rgba(138,79,255,0.45)]"
            style={{ willChange: "transform, opacity" }}
          >
            {/* The Badge Clip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-gradient-to-r from-[#FACC15] to-[#F59E0B] shadow-[0_0_20px_rgba(250,204,21,0.6)] flex items-center justify-center text-xs font-bold text-black"></div>

            <div className="h-full flex flex-col gap-6">
              {/* TOP — USER IDENTITY */}
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl
      bg-purple-500/10 border border-purple-400/30"
                >
                  <UserIcon />
                </div>

                <div>
                  <h4 className="text-white font-semibold text-sm">{t.name}</h4>

                  <p className="text-xs text-purple-300 tracking-wide">
                    {t.exam}
                    {t.college !== "—" && ` • ${t.college}`}
                    {t.year && ` • ${t.year}`}
                  </p>
                </div>
              </div>

              {/* BODY — SCROLLABLE REVIEW */}
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-[#E9DFFF] text-[15px] leading-[1.75] whitespace-pre-line">
                  {t.review}
                </p>
              </div>

              {/* FOOTER — FACTION STYLE ACCENT */}
              <div className="pt-4 border-t border-white/10 flex justify-end">
                <span className="text-xs uppercase tracking-widest text-purple-400">
                  Faction Student
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;