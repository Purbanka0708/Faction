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
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Abantika%20Das%20CNMC.png",
    thumb:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Abantika%20Das%20CNMC.png",
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
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Mitadru%20Ghosh.png",
    thumb:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Mitadru%20Ghosh.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description:
      "Faction provided me with a solid foundation for my NEET journey. Their guidance and support were invaluable, helping me navigate the challenges of the examination.",
    name: "Rasmita Sarkar",
    company: "King George's Medical College(KGMC) (2025)",
    image:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Rasmita%20Sarkar.png",
    thumb:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Rasmita%20Sarkar.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description: `Faction guided me with dedication, clarity, and patience throughout my NEET journey. Every concept and doubt was addressed with care, and the mentors provided both academic and emotional support. Their guidance shaped me not just as a student, but as a person.`,
    name: "Krishti Sarkar",
    company: "Lady Hardinge Medical College(LHMC) (2024)",
    image:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Krishti%20Sarkar.png",
    thumb:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Krishti%20Sarkar.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description: `The structured roadmap and constant mentorship helped me crack interviews I never thought I could. Faction bridges the gap colleges leave behind.`,
    name: "Krish Kumar Deb",
    company: "Nil Ratan Sarkar Medical College and Hospital(NRSMCH) (2024)",
    image:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Krish%20Kumar%20Deb.jpg",
    thumb:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Krish%20Kumar%20Deb.jpg",
  },
  {
    stat: "Know what our Toppers say",
    title: "The JEE journey with Faction",
    description: `The guidance from Niladri Sir and Soumyadeep Sir played a key role in my JEE preparation. Individual mentoring and well-structured content in Biology and Physics helped me build strong concepts and a clear mental framework. I highly recommend Faction to serious aspirants.`,
    name: "Saptarshi Deb",
    company: "IIT Madras (2025)",
    image:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Saptarshi%20Deb.jpg",
    thumb:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Saptarshi%20Deb.jpg",
  },
  {
    stat: "Know what our Toppers say",
    title: "The JEE journey with Faction",
    description: `Soumyadeep Sir’s structured and concept-focused teaching made Physics much clearer for me. His ability to simplify complex topics helped me build strong fundamentals throughout my JEE journey.`,
    name: "Shubhranil Majumder",
    company: "IIT Gandhinagar (2025)",
    image:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Shubhranil.png",
    thumb:
      "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Shubhranil.png",
  },

  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`Reflecting upon my journey from a struggling aspirant to a proud IITian, one name that stands out above all is that of Er. Soumyadeep Nandi – my Physics Faculty, but more than a faculty he was like a big brother to me. During our classes we called him ”DADA” instead of “SIR” which explains lot in itself what was our relationship with him. I first met Er. Nandi in the latter part of my 11th standard. Although he was my school senior and we travelled in same school bus and I knew him as a senior . At that time, like many students, I was still trying to find my footing in the vast world of JEE preparation. With his calm demeanor, crystal-clear conceptual teaching, and question solving skills in Physics, he immediately made a lasting impression. A graduate with both B.Tech and M.Tech in Chemical Engineering from IIT Kharagpur, his academic background reflected in the clarity and depth with which he explained complex topics. Despite receiving coaching from other sources, it was his personal mentorship that helped me build a real foundation. We a batch of 8 students formed a very special bond both among ourselves and with Soumyadeep Dada. But my first attempt at JEE didn't go as expected. In that batch dada brought out 4 IITians, and I personally felt like I have let down dada with my performance in JEE ADVANCED. After my Class 12th results, I was disheartened and unsure of what to do next. It was during this diﬃcult phase that Er. Nandi didn’t just remain my teacher – he became my mentor and emotional anchor. He believed in me when I had begun to doubt myself. His words, his belief, and his strategy helped me decide to take a bold step — to repeat a year and give JEE another shot. Throughout my drop year, Er. Nandi was more involved than ever. He didn't just teach me Physics — he trained my mind to think, to stay calm under pressure, to focus on concepts rather than chasing problems mechanically. His methodical teaching, personalized guidance, motivational support, and ability to simplify the most abstract concepts were the pillars of my preparation.The result? I successfully secured an All India Rank of 12494 in JEE Advanced, and today, I am pursuing B.Tech in Mining Engineering at IIT (ISM) Dhanbad. This achievement is not mine alone. It belongs equally to the man who walked every step of the way with me – not just a tutor, but a true mentor and a guide, Er. Soumyadeep Nandi. His contribution to my academic and personal growth is immeasurable, and I shall always remain grateful for his role in helping me reach where I am today.`,
    name:"Swasti Sundar Nath",
    company:"IIT ISM Dhanbad (2024)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Swasti%20Nath.jpg",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Swasti%20Nath.jpg",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`Studying Physics at Faction Institute under Soumyadeep Dada was a transformative experience.

The clarity of concepts, structured approach, and regular doubt-solving sessions helped me build a strong foundation for JEE. What stood out most was the personal attention and constant motivation throughout the journey.

I’m genuinely grateful for the guidance and support that played a crucial role in my success.`,
    name:"Ayushkar Nath",
    company:"IIT Patna (2024)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Ayushkar%20Nath.jpg",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Ayushkar%20Nath.jpg",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`The only constants in my JEE Journey was me xd , my parents , quizzing and Soumyadeep Dada . Yeah I don’t call him sir ,  Dada feels like more close to home . I was never constant in my JEE preparation but whenever I had any doubts , Dada was there to help me . Transforming my fear of physics to love for it . The fun we had in having quizzes , to find out who can attempt the questions in the shortest possible time was pure nostalgia . The JEE journey was great but having Dada always by my side made it ultimate . Thank you for everything !`,
    name:"Utsab Das",
    company:"IIT Delhi (2023)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Utsab%20Das.jpg",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Utsab%20Das.jpg",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`When I think about my JEE Advanced journey, one name stands out — Soumyadeep Dada. He wasn't just a physics teacher; he was my Jeetu Bhaiya, an elder brother who genuinely cared about my success.

He had a rare gift of simplifying complex concepts and making physics intuitive. Beyond academics, he supported me emotionally, believed in me when I doubted myself, and treated us like younger siblings.

Dada didn’t just teach physics — he taught resilience, curiosity, and confidence. His guidance shaped not only my preparation, but also how I approach life.`,
    name:"Uditangshu Chakraborty",
    company:"IIT Kharagpur (2023)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Uditangshu%20Chakraborty.jpg",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Uditangshu%20Chakraborty.jpg",
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