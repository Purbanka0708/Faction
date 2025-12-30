import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { testimonialsData } from "./data/testimonialsData";

gsap.defaults({
  overwrite: "auto",
});

const UserIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-9 h-9 md:w-10 md:h-10 text-purple-300"
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
  const timerRef = useRef(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const getVisualPosition = (distanceFromFront) => {
    switch (distanceFromFront) {
      case 0:
        return { x: 0, y: 0, rotation: 0, scale: 1, zIndex: 10, opacity: 1 };
      case 1:
        return { x: 25, y: -8, rotation: 4, scale: 0.96, zIndex: 9, opacity: 1 };
      case 2:
        return {
          x: -20,
          y: -15,
          rotation: -3,
          scale: 0.92,
          zIndex: 8,
          opacity: 1,
        };
      default:
        return { scale: 0, opacity: 0, zIndex: 0 };
    }
  };

  const handleNext = contextSafe(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const total = testimonialsData.length;
    const nextIndex = (activeIndex + 1) % total;
    const currentCard = cardsRef.current[activeIndex];

    gsap
      .timeline({
        onComplete: () => {
          setActiveIndex(nextIndex);
          isAnimating.current = false;
        },
      })
      .to(currentCard, {
        x: 300,
        y: 50,
        rotation: 15,
        opacity: 0,
        scale: 1.1,
        duration: 0.5,
        ease: "power2.in",
        zIndex: 20,
      })
      .set(currentCard, { x: 0, y: 0, rotation: 0, scale: 0.9, zIndex: 0 });
  });

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startAutoPlay = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(handleNext, 3500);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [handleNext]);

  useGSAP(() => {
    testimonialsData.forEach((_, i) => {
      const total = testimonialsData.length;
      let distance = (i - activeIndex + total) % total;
      if (distance > 2) distance = 3;

      const pos = getVisualPosition(distance);
      if (!isAnimating.current) {
        gsap.to(cardsRef.current[i], {
          ...pos,
          duration: 0.6,
          ease: "back.out(1.2)",
        });
      }
    });
  }, [activeIndex]);

  return (
    <div className="min-h-screen px-4 bg-gradient-to-b from-[#2B0A3D] via-[#1B0629] to-[#12041B] flex flex-col items-center justify-center pt-10">
      {/* Heading */}
      <div className="mb-10 text-center ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white ">
          Testimonials
        </h2>
        <p className="text-xs sm:text-sm font-semibold text-purple-300 tracking-widest">
          TRUSTED BY FOUNDERS, BACKED BY RESULTS
        </p>
      </div>

      {/* Card Stack */}
      <div
        ref={containerRef}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
        className="
          relative
          w-full
          max-w-[360px]
          sm:max-w-[440px]
          md:max-w-[520px]
          lg:max-w-[620px]
          h-[520px]
          sm:h-[580px]
          md:h-[680px]
          lg:h-[760px]
          mb-14
        "
      >
        {testimonialsData.map((t, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            onClick={handleNext}
            className="
              absolute inset-0
              rounded-2xl
              p-5 sm:p-6 md:p-8
              bg-gradient-to-br from-[#3A1C5E]/80 to-[#1C0B2E]/80
              backdrop-blur-xl
              border border-white/10
              shadow-[0_25px_80px_-15px_rgba(138,79,255,0.35)]
              cursor-pointer
            "
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-gradient-to-r from-[#FACC15] to-[#F59E0B] shadow-[0_0_20px_rgba(250,204,21,0.6)] flex items-center justify-center text-xs font-bold text-black"></div>

            <div className="h-full flex flex-col gap-4 md:gap-6">
              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-400/30">
                  <UserIcon />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    {t.name}
                  </h4>
                  <p className="text-xs text-purple-300">
                    {t.exam}
                    {t.college !== "—" && ` • ${t.college}`}
                    {t.year && ` • ${t.year}`}
                  </p>
                </div>
              </div>

              {/* Review */}
              <div className="flex-1 overflow-y-auto pr-1">
                <p className="text-[#E9DFFF] text-sm sm:text-[15px] leading-relaxed whitespace-pre-line">
                  {t.review}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-white/10 text-right">
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