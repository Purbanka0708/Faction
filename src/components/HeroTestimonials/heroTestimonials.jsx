import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DURATION = 15;

/* 🔒 ALL TESTIMONIALS — UNCHANGED */
const slides = [
  {
    stat:"Know what our Toppers say",
    title: "The NEET journey with Faction",
    description:`Soumyadeep Dada, this one's for you! Without your guidance, patience, and motivation, I wouldn't be where I am today. Scoring "100 percentile" in JEE Mains in Physics wouldn’t have been possible without the unwavering guidance of him. In the beginning, Physics used to confuse me more than anything else. There were concepts I just couldn’t wrap my head around, and I would often feel stuck. But the way he explained things—so simply, so patiently—slowly started making everything click.
What really stood out was how he never made it feel like a strict teacher-student relationship. He was more like an elder brother who just happened to be amazing at Physics. His knowledge of physics is truly immense and deep, he doesn't just teach us formulas, but helps us understand the very fundamentals. His depth of understanding makes difficult concepts feel clear and simple. Whether it was a silly doubt late at night or a last-minute concept I couldn’t grasp before a test, he was always there. No complaints, no frustration—just pure support.
We’ve had long sessions where he broke things down until I actually understood them. Sometimes, I’d be panicking over a test or feeling low, and he'd somehow know exactly what to say to calm me down and get me back on track.He handled everything like a elder brother—firm when needed, chill when I was stressed, and always giving his time, even when he was busy himself. Looking back, I think having someone like him—who genuinely cared, who never gave up on me—made all the difference.
To me, he was never just a teacher but "Soumyadeep Dada", someone I could count on. And that made all the difference`,
    name:"Abantika Das",
    company:"Calcutta National Medical College & Hospital(CNMC) (2025)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Abantika%20Das%20CNMC.png",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Abantika%20Das%20CNMC.png",
  },
  {
    stat:"Know what our Toppers say",
    title: "The NEET journey with Faction",
    description:`Faction is the best institute for Biology and Physics in the state. Niladri Sir strengthened my concepts, and Soumyadeep Sir made Physics logical and approachable.

They treated us like younger brothers and constantly motivated us to achieve our goals.`,
    name:"Mitadru Ghosh",
    company:"North Eastern Indira Gandhi Regional Institute of health and Medical Sciences(NEIGRIHMS) (2025)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Mitadru%20Ghosh.png",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Mitadru%20Ghosh.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description:
      "Faction provided me with a solid foundation for my NEET journey. Their guidance and support were invaluable, helping me navigate the challenges of the examination.",
    name: "Rasmita Sarkar",
    company: "King George's Medical College(KGMC) (2025)",
    image: "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Rasmita%20Sarkar.png",
    thumb: "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Rasmita%20Sarkar.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description:`Faction guided me with dedication, clarity, and patience throughout my NEET journey.

Every concept and doubt was addressed with care, and the mentors provided both academic and emotional support. Their guidance shaped me not just as a student, but as a person.`,
    name: "Krishti Sarkar",
    company: "Lady Hardinge Medical College(LHMC) (2024)",
    image: "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Krishti%20Sarkar.png",
    thumb: "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Krishti%20Sarkar.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description:`The structured roadmap and constant mentorship helped me crack interviews I never thought I could. Faction bridges the gap colleges leave behind.`,
    name: "Krish Kumar Deb",
    company: "Nil Ratan Sarkar Medical College and Hospital(NRSMCH) (2024)",
    image: "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Krish%20Kumar%20Deb.jpg",
    thumb: "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Krish%20Kumar%20Deb.jpg",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`During my preparation for higher secondary competitive exams I received unequivocal assistance from the able faculty of both Niladri Sir and Soumyadeep Sir. Biology and Physics took a transformative turn for me under their guidance as I was subject to individual mentoring sessions benefitting me a lot. The well structured content also helped develop a mental framework that worked out well for me. I highly recommend budding aspirants to become a part of this great learning experience.`,
    name:"Saptarshi Deb",
    company:"IIT Madras (2025)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Saptarshi%20Deb.jpg",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Saptarshi%20Deb.jpg",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`Preparing for JEE is a long and challenging journey, and having the right guidance can make all the difference. For me, Soumyadeep Sir played an important role in shaping my understanding of Physics. His teaching was clear, structured, and focused on building strong concepts rather than just solving problems mechanically.

What I appreciated most was his ability to simplify complex topics and present them in a way that actually made sense.`,
    name:"Shubhranil Majumder",
    company:"IIT Gandhinagar (2025)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Shubhranil.png",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Shubhranil.png",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`Reflecting upon my journey from a struggling aspirant to a proud IITian...`,
    name:"Swasti Sundar Nath",
    company:"IIT ISM Dhanbad (2024)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Swasti%20Nath.jpg",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Swasti%20Nath.jpg",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`Studying Physics at Faction Institute under Soumyadeep Dada was a transformative experience.`,
    name:"Ayushkar Nath",
    company:"IIT Patna (2024)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Ayushkar%20Nath.jpg",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Ayushkar%20Nath.jpg",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`The only constants in my JEE Journey was me xd , my parents , quizzing and Soumyadeep Dada.`,
    name:"Utsab Das",
    company:"IIT Delhi (2023)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Utsab%20Das.jpg",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Utsab%20Das.jpg",
  },
  {
    stat:"Know what our Toppers say",
    title: "The JEE journey with Faction",
    description:`When I think about my JEE Advanced journey, one name stands out — Soumyadeep Dada.`,
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
    <section className="w-full bg-[#FEFCED] py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="relative bg-[#FEFCED] p-6 md:p-12 min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center"
            >
              {/* LEFT */}
              <div>
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

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-h-[220px] overflow-y-auto">
                      {slide.description}
                    </p>

                    <div className="flex items-center gap-3">
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
              <div className="flex justify-center md:justify-end">
                {loading ? (
                  <div className="w-[280px] h-[360px] bg-gray-200 rounded-3xl animate-pulse" />
                ) : (
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-[280px] h-[360px] md:w-[340px] md:h-[420px] object-cover rounded-3xl shadow-lg"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* INDICATORS — UNCHANGED LOGIC */}
        <div className="flex justify-center gap-6 mt-12">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setProgressKey((k) => k + 1);
              }}
              className="relative w-16 h-16"
            >
              {i === index && (
                <svg
                  className="absolute inset-0 rotate-[-90deg]"
                  width="64"
                  height="64"
                >
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                    fill="none"
                  />
                  <motion.circle
                    key={progressKey}
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#111827"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 28}
                    initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: DURATION, ease: "linear" }}
                  />
                </svg>
              )}

              <img
                src={slide.thumb}
                className={`w-14 h-14 rounded-full object-cover mx-auto transition ${
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
