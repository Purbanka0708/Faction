import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    title: "Projects & Hackathons",
    description:
      "We keep learning hands-on so that you build real projects and win hackathons.",
    image: "https://placehold.co/600x400/2a2a2a/FFF?text=Project+Dashboard",
    tag: "Resume Builder",
  },
  {
    title: "Live Sessions",
    description:
      "Live sessions focus on problem-solving approaches rather than rote memorization.",
    image: "https://placehold.co/600x400/1e293b/FFF?text=Live+Video+Call",
    tag: "Interactive Learning",
  },
  {
    title: "Tier-3 to MAANG",
    description:
      "Our mentorship and problem sets help students crack top tech roles.",
    image: "https://placehold.co/600x400/0f172a/FFF?text=Success+Story",
    tag: "Success Stories",
  },
  {
    title: "Competitive Programming",
    description:
      "Master DSA with a curriculum designed by industry experts.",
    image: "https://placehold.co/600x400/334155/FFF?text=Code+Editor",
    tag: "Algorithm Mastery",
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
        className="relative max-w-6xl mx-auto px-6 pt-20 pb-[320px]"
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
        <div className="absolute bottom-50 left-1/2 -translate-x-1/2 text-center">
          <button
            onClick={() => navigate("/signin")}
            className="bg-slate-900 text-white px-10 py-4 rounded-full text-lg font-bold
                       transition-all duration-300
                       hover:bg-slate-800 hover:scale-105
                       hover:shadow-[0_20px_40px_rgba(15,23,42,0.25)]"
          >
            Start Learning
          </button>
        </div>
      </div>
    </section>
  );
};

export default DroppingCards;
