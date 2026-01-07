import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DURATION = 5;

const slides = [
    {
    stat:"Know what our Toppers say",
    title: "The NEET journey with Faction",
    description:`Faction is the best institute for Biology and Physics in the state. Niladri Sir strengthened my concepts, and Soumyadeep Sir made Physics logical and approachable.

They treated us like younger brothers and constantly motivated us to achieve our goals.`,
    name:"Mitadru Ghosh",
    company:"North Eastern Indira Gandhi Regional Institute of health and Medical Sciences (2025)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Mitadru%20Ghosh.png",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Mitadru%20Ghosh.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description:
      "Faction provided me with a solid foundation for my NEET journey. Their guidance and support were invaluable, helping me navigate the challenges of the examination.",
    name: "Rasmita Sarkar",
    company: "King George's Medical College (2025)",
    image: "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Rasmita%20Sarkar.png",
    thumb: "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Rasmita%20Sarkar.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description:
      `Faction guided me with dedication, clarity, and patience throughout my NEET journey.

Every concept and doubt was addressed with care, and the mentors provided both academic and emotional support. Their guidance shaped me not just as a student, but as a person.`,
    name: "Krishti Sarkar",
    company: "Lady Hardinge Medical College (2024)",
    image: "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Krishti%20Sarkar.png",
    thumb: "https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/neet.webp/Krishti%20Sarkar.png",
  },
  {
    stat: "Know what our Toppers say",
    title: "The NEET journey with Faction",
    description:
      `The structured roadmap and constant mentorship helped me crack interviews I never thought I could. Faction bridges the gap colleges leave behind.`,
    name: "Krish Kumar Deb",
    company: "Nil Ratan Sarkar Medical College and Hospital (2024)",
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
    description:` The structured approach and constant mentoring helped me crack JEE Mains I never thought I could.Faction bridges the gap colleges leave behind.`,
    name:"Shreelekha",
    company:"IIT Madras (2025)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Shreelekha.jpg",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Shreelekha.jpg",
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
    description:`The day Dada walked into Faction to take that one Physics session for KVPY — I didn’t know then, but everything changed for me. From that moment on, he wasn’t just a teacher. He became an elder brother, a mentor, and someone who made me believe I could achieve things I never even dared to dream of.

The day he told us to call him “Dada” instead of “Sir,” something shifted. He wasn’t standing on a pedestal anymore — he was sitting beside us, guiding us through. And the best part? He had gone through the same journey himself. He *knew* the struggle, the pressure, the fear — and that made all the difference. His advice wasn’t just theory; it came from lived experience.

JEE was a tough time. It drained us, filled us with doubt, and often made us question our worth. But having him by our side helped me not drown in all of it. Whether it was a concept I couldn’t understand or a breakdown I didn’t see coming — he handled both with the same calm. He was our true agony aunt in every sense — someone who just *got it*, and never made us feel less for slipping.

Somewhere along the way, I also found my tribe — a set of like-minded people, all working towards the same goal, without the drama, comparison, or pressure that usually surrounds this journey. He helped create that space.

Apart from my beautiful parents, no one has impacted my life the way he has. Thank you, Dada, for everything — for your time, your belief, your patience, and for changing my game when I needed it the most.`,
    name:"Dwija",
    company:"NIT Trichy (2023)",
    image:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Dwija%20pic.jpeg",
    thumb:"https://ao0klrqx42lirtpn.public.blob.vercel-storage.com/toppers/jee.webp/Dwija%20pic.jpeg",
  },

];

function HeroTestimonials() {
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
      setProgressKey((k) => k + 1);
    }, DURATION * 1000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className="w-full bg-[#FEFCED] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* MAIN CARD */}
        <div className="relative bg-[#FEFCED]  p-12 h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center"
            >
              {/* LEFT CONTENT */}
              <div>
                <p className="text-blue-600 font-semibold text-sm tracking-wide mb-4">
                  {slide.stat}
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {slide.title}
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-8 h-[200px] overflow-hidden">
                  {slide.description}
                </p>

                <div className="flex items-center gap-3">
                  <span className="font-semibold text-lg text-blue-700">
                    {slide.name}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="font-semibold text-gray-800">
                    {slide.company}
                  </span>

                  <div className="ml-4 w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white text-lg">
                    in
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center md:justify-end">
                <img
                  src={slide.image}
                  alt=""
                  className="w-64 h-64 object-cover rounded-2xl shadow-md"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* INDICATORS */}
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