import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DURATION = 15;

/* 🔒 ALL TESTIMONIALS — UNCHANGED */
const slides = [
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description: `Soumyadeep Dada’s guidance completely changed my relationship with Physics. His patient explanations, strong focus on fundamentals, and constant support helped me overcome my fears and build real confidence. More than a teacher, he was like an elder brother who genuinely cared—and that made all the difference.`,
    name: "Abantika Das",
    company: "Calcutta National Medical College & Hospital (CNMC) (2025)",
    image:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065051/Abantika_Das_CNMC_wlp9ix.png",
    thumb:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065051/Abantika_Das_CNMC_wlp9ix.png",
  },

  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description: `Faction is the best institute for Biology and Physics in the state. Niladri Sir strengthened my concepts, and Soumyadeep Sir made Physics logical and approachable.

They treated us like younger brothers and constantly motivated us to achieve our goals.`,
    name: "Mitadru Ghosh",
    company:
      "North Eastern Indira Gandhi Regional Institute of health and Medical Sciences(NEIGRIHMS) (2025)",
    image:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065056/Mitadru_Ghosh_waugl7.png",
    thumb:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065056/Mitadru_Ghosh_waugl7.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description:
      "Faction provided me with a solid foundation for my NEET journey. Their guidance and support were invaluable, helping me navigate the challenges of the examination.",
    name: "Rasmita Sarkar",
    company: "King George's Medical College(KGMC) (2025)",
    image:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065055/Rasmita_Sarkar_qhe5pn.png",
    thumb:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065055/Rasmita_Sarkar_qhe5pn.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description: `Faction guided me with dedication, clarity, and patience throughout my NEET journey. Every concept and doubt was addressed with care, and the mentors provided both academic and emotional support. Their guidance shaped me not just as a student, but as a person.`,
    name: "Krishti Sarkar",
    company: "Lady Hardinge Medical College(LHMC) (2024)",
    image:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065055/Krishti_Sarkar_qbz1fs.png",
    thumb:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065055/Krishti_Sarkar_qbz1fs.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description: ``,
    name: "Krish Kumar Deb",
    company: "Nil Ratan Sarkar Medical College and Hospital(NRSMCH) (2024)",
    image:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065501/Krish_Kumar_Deb_rrwiyz.jpg",
    thumb:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065501/Krish_Kumar_Deb_rrwiyz.jpg",
  },
  {
    stat: "Know what our Toppers say",
    title: "The JEE journey with Faction",
    description: `The guidance from Niladri Sir and Soumyadeep Sir played a key role in my JEE preparation. Individual mentoring and well-structured content in Biology and Physics helped me build strong concepts and a clear mental framework. I highly recommend Faction to serious aspirants.`,
    name: "Saptarshi Deb",
    company: "IIT Madras (2025)",
    image:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065443/Saptarshi_Deb_voxvfw.jpg",
    thumb:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065443/Saptarshi_Deb_voxvfw.jpg",
  },
  {
    stat: "Know what our Toppers say",
    title: "The JEE journey with Faction",
    description: `Soumyadeep Sir’s structured and concept-focused teaching made Physics much clearer for me. His ability to simplify complex topics helped me build strong fundamentals throughout my JEE journey.`,
    name: "Shubhranil Majumder",
    company: "IIT Gandhinagar (2025)",
    image:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065029/Shubhranil_hyp9jp.png",
    thumb:
      "https://res.cloudinary.com/dttquxaro/image/upload/v1769065029/Shubhranil_hyp9jp.png",
  },

  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`From a struggling JEE aspirant to an IITian, Er. Soumyadeep Nandi has been the biggest influence in my journey. More than a Physics teacher, he was a mentor, guide, and our beloved “DADA.” When my first attempt didn’t go well, he believed in me, supported my drop year, and helped me build strong concepts and mental clarity. Today, with an AIR 12494 in JEE Advanced, I am pursuing B.Tech at IIT (ISM) Dhanbad—a success that belongs equally to him.`,
    name:"Swasti Sundar Nath",
    company:"IIT ISM Dhanbad (2024)",
    image:"https://res.cloudinary.com/dttquxaro/image/upload/v1769065435/Swasti_Nath_lg4rmb.jpg",
    thumb:"https://res.cloudinary.com/dttquxaro/image/upload/v1769065435/Swasti_Nath_lg4rmb.jpg",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`Studying Physics at Faction Institute under Soumyadeep Dada was a transformative experience.

The clarity of concepts, structured approach, and regular doubt-solving sessions helped me build a strong foundation for JEE. What stood out most was the personal attention and constant motivation throughout the journey.

I’m genuinely grateful for the guidance and support that played a crucial role in my success.`,
    name:"Ayushkar Nath",
    company:"IIT Patna (2024)",
    image:"https://res.cloudinary.com/dttquxaro/image/upload/v1769065434/Ayushkar_Nath_zdyj5x.jpg",
    thumb:"https://res.cloudinary.com/dttquxaro/image/upload/v1769065434/Ayushkar_Nath_zdyj5x.jpg",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`The only constants in my JEE Journey was me xd , my parents , quizzing and Soumyadeep Dada . Yeah I don’t call him sir ,  Dada feels like more close to home . I was never constant in my JEE preparation but whenever I had any doubts , Dada was there to help me . Transforming my fear of physics to love for it . The fun we had in having quizzes , to find out who can attempt the questions in the shortest possible time was pure nostalgia . The JEE journey was great but having Dada always by my side made it ultimate . Thank you for everything !`,
    name:"Utsab Das",
    company:"IIT Delhi (2023)",
    image:"https://res.cloudinary.com/dttquxaro/image/upload/v1769065454/Utsab_Das_iy5ijw.jpg",
    thumb:"https://res.cloudinary.com/dttquxaro/image/upload/v1769065454/Utsab_Das_iy5ijw.jpg",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`When I think about my JEE Advanced journey, one name stands out — Soumyadeep Dada. He wasn't just a physics teacher; he was my Jeetu Bhaiya, an elder brother who genuinely cared about my success.

He had a rare gift of simplifying complex concepts and making physics intuitive. Beyond academics, he supported me emotionally, believed in me when I doubted myself, and treated us like younger siblings.

Dada didn’t just teach physics — he taught resilience, curiosity, and confidence. His guidance shaped not only my preparation, but also how I approach life.`,
    name:"Uditangshu Chakraborty",
    company:"IIT Kharagpur (2023)",
    image:"https://res.cloudinary.com/dttquxaro/image/upload/v1769065448/Uditangshu_Chakraborty_xwancc.jpg",
    thumb:"https://res.cloudinary.com/dttquxaro/image/upload/v1769065448/Uditangshu_Chakraborty_xwancc.jpg",
  },
];

function HeroTestimonials() {
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
      setProgressKey((k) => k + 1);
    }, DURATION * 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [index]);

  const slide = slides[index];
  if (!slide) return null;

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="relative bg-white p-4 sm:p-6 md:p-12 min-h-[unset] md:min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-10 items-center"
            >
              {/* LEFT */}
              <div className="min-h-[380px] sm:min-h-[420px] md:min-h-[460px] flex flex-col">
                {loading ? (
                  <div className="space-y-4 animate-pulse">
                    <div className="h-4 w-40 bg-gray-200 rounded" />
                    <div className="h-8 w-3/4 bg-gray-200 rounded" />
                    <div className="h-24 w-full bg-gray-200 rounded" />
                    <div className="h-5 w-2/3 bg-gray-200 rounded" />
                  </div>
                ) : (
                  <>
                    <p className="text-blue-600 font-semibold text-sm mb-4">
                      {slide.stat}
                    </p>

                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                      {slide.title}
                    </h2>

                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 flex-1 overflow-y-auto">
                      {slide.description}
                    </p>

                    <div className="flex items-center gap-3 mt-auto">
                      {" "}
                      <span className="font-semibold text-blue-700">
                        {slide.name}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="font-semibold text-gray-800">
                        {slide.company}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center md:justify-end mt-6 md:mt-0">
                {loading ? (
                  <div className="w-[280px] h-[360px] bg-gray-200 rounded-3xl animate-pulse" />
                ) : (
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-[220px] h-[280px] sm:w-[260px] sm:h-[320px] md:w-[340px] md:h-[420px] object-cover rounded-2xl md:rounded-3xl shadow-lg"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 flex-wrap">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setProgressKey((k) => k + 1);
              }}
              className="relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center hover:scale-105"
            >
              {i === index && (
                <svg
                  className="absolute inset-0 rotate-[-90deg] w-full h-full"
                  viewBox="0 0 80 80"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                    fill="none"
                  />
                  <motion.circle
                    key={progressKey}
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="#111827"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 34}
                    initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: DURATION, ease: "linear" }}
                  />
                </svg>
              )}

              <img
                src={slide.thumb}
                className={`w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover transition ${
                  i === index
                    ? "opacity-100 scale-100"
                    : "opacity-60 hover:opacity-100"
                }`}
                alt=""
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroTestimonials;