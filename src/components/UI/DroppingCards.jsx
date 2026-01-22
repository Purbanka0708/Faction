import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    title: "Visionary Leadership in Biology Education",
    description:
      "Under the guidance of Niladri Deb, FACTION’s Biology program is built on clarity, concept-first teaching, and deep understanding of life sciences. His mentorship inspires students to think scientifically, approach problems analytically, and build a strong foundation essential for NEET and beyond.",
    video: "https://res.cloudinary.com/dttquxaro/video/upload/v1769065042/niladri-da_zqtfdr.mp4",
    tag: "Foundational Vision",
  },
  {
    title: "Physics Taught with Precision and Purpose",
    description:
      "Led by Soumyadeep Nandi, FACTION’s Physics education emphasizes logical reasoning, problem-solving strategies, and real conceptual depth. His teaching bridges theory with application, empowering students to confidently tackle even the most challenging JEE and NEET problems.",
    video: "https://res.cloudinary.com/dttquxaro/video/upload/v1769065053/Soumya_da-_osr6pk.mp4",
    tag: "Academic Excellence",
  },
  {
    title: "A Learning Space Designed for Focus and Growth",
    description:
      "FACTION’s well-equipped library offers a calm, disciplined environment where students can study, revise, and practice without distractions. With curated academic resources and a student-friendly atmosphere, the library plays a crucial role in nurturing consistency, self-study habits, and academic excellence.",
    video: "https://res.cloudinary.com/dttquxaro/video/upload/v1769065065/Final-library_iymink.mp4",
    tag: "Focused Learning",
  },
  {
    title: "A Future-Ready Campus for Competitive Excellence",
    description:
      "FACTION provides a fully modern learning ecosystem featuring smart classrooms, dedicated test halls, computer-based test rooms, and innovative academic facilities. Every space is designed to simulate real exam conditions while fostering comfort, confidence, and high-performance learning for today’s competitive exams.",
    video: "https://res.cloudinary.com/dttquxaro/video/upload/v1769065046/Centre-2_rlngfk.mp4",
    tag: "Future-Ready Campus",
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
    <section className="bg-white overflow-x-hidden">
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

              {/* VIDEO CARD */}
              <div className="w-full md:w-5/12 flex justify-center relative z-20">
                <div className="timeline-card bg-white p-4 rounded-2xl shadow-2xl max-w-md w-full border border-slate-100">
                  <div className="aspect-video rounded-xl overflow-hidden bg-black">
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
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
              group inline-flex items-center gap-3 px-8 py-3 rounded-full
              bg-[#F0D200] text-[#0F172A] text-base font-semibold
              transition-all duration-300 ease-out
              hover:bg-[#A767FF] hover:text-white
              hover:shadow-[0_12px_28px_rgba(167,103,255,0.35)]
            "
          >
            <span>Start Learning</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DroppingCards;
