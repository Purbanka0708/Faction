import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    title: "Bridging the Educational Gap",
    description:
      "FACTION is an initiative built to uplift students from the Northeast by providing access to quality education, guidance, and opportunities once limited by geography.",
    image: "https://placehold.co/600x400/2a2a2a/FFF?text=Education+Access",
    tag: "Our Purpose",
  },
  {
    title: "Redefining JEE & NEET Preparation",
    description:
      "We go beyond traditional coaching by focusing on conceptual clarity, structured practice, and deep understanding rather than rote learning.",
    image: "https://placehold.co/600x400/1e293b/FFF?text=Conceptual+Learning",
    tag: "Academic Rigor",
  },
  {
    title: "Technology-Driven Learning",
    description:
      "FACTION leverages technology to personalize learning, track progress, and provide timely insights that help students improve efficiently.",
    image: "https://placehold.co/600x400/0f172a/FFF?text=Smart+Learning",
    tag: "Modern Approach",
  },
  {
    title: "Mentorship Beyond Academics",
    description:
      "We believe success requires emotional support and mentorship. FACTION nurtures confidence, resilience, and clarity alongside academics.",
    image: "https://placehold.co/600x400/334155/FFF?text=Student+Mentorship",
    tag: "Holistic Growth",
  },
];



const DroppingCards = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(
    () => {
      const rows = gsap.utils.toArray(".timeline-row");

      // SVG LINE DRAW
      if (lineRef.current) {
        const length = lineRef.current.getTotalLength();
        gsap.set(lineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });
      }

      // CARD + TEXT ANIMATIONS
      rows.forEach((row, index) => {
        const card = row.querySelector(".timeline-card");
        const text = row.querySelector(".timeline-text");
        const isEven = index % 2 === 0;

        gsap.from(card, {
          y: -120,
          opacity: 0,
          scale: 0.92,
          duration: 1.4,
          ease: "elastic.out(1, 0.55)",
          scrollTrigger: {
            trigger: row,
            start: "top 65%",
            once: true,
          },
        });

        gsap.from(text, {
          x: isEven ? 120 : -120,
          opacity: 0,
          duration: 1,
          delay: 0.35,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 65%",
            once: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="bg-[#FEFCED] overflow-x-hidden">
      <div
        ref={containerRef}
        className="relative max-w-6xl mx-auto px-6 pt-20 pb-32"
      >
        {/* SVG PATH */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox={`0 0 1200 ${contentData.length * 600}`}
            fill="none"
            preserveAspectRatio="xMidYMin slice"
          >
            <path
              ref={lineRef}
              d="M 600 0
                 C 600 200, 900 200, 900 400
                 C 900 600, 300 600, 300 800
                 C 300 1000, 900 1000, 900 1200
                 C 900 1400, 300 1400, 300 1600"
              stroke="#64748b"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="opacity-30"
            />
          </svg>
        </div>

        {/* TIMELINE CONTENT */}
        <div className="relative z-10">
          {contentData.map((item, index) => (
            <div
              key={index}
              className={`timeline-row flex flex-col md:flex-row items-center justify-between mb-40 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* TEXT */}
              <div className="timeline-text w-full md:w-5/12 px-6 mb-10 md:mb-0 text-[#1e1e1e]">
                <span className="inline-block mb-4 px-3 py-1 text-xs font-bold text-white bg-blue-600 rounded-full">
                  {item.tag}
                </span>
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  {item.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* CARD */}
              <div className="w-full md:w-5/12 flex justify-center relative z-20">
                <div className="timeline-card bg-white p-4 rounded-2xl shadow-2xl max-w-md w-full border border-slate-100">
                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* CTA BUTTON */}
<div className="mt-32 flex justify-center">
  <button
  onClick={() => navigate("/signin")}
  className="
    group
    inline-flex
    items-center
    gap-3
    px-8 py-3
    rounded-full

    bg-[#F0D200]
    text-[#0F172A]
    text-base
    font-semibold

    transition-all
    duration-300
    ease-out

    hover:bg-[#A767FF]
    hover:text-white
    hover:shadow-[0_12px_28px_rgba(167,103,255,0.35)]
  "
>
  <span>Start Learning</span>

  <span
    className="
      inline-block
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  >
    →
  </span>
</button>

</div>

      </div>
    </section>
  );
};

export default DroppingCards;
