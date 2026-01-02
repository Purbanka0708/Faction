import React from "react";
import { toppersData } from "./data/ToppersData";

const ToppersSection = ({ activeExam, setActiveExam }) => {
  const filteredToppers = toppersData.filter(
    (topper) => topper.exam === activeExam
  );

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#2a0038] via-[#24002f] to-[#1a0022]">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center  text-white mb-12">
        Faction Hall of Fame
      </h2>

      {/* Toggle Buttons (same style as ResultsTable) */}
      <div className="flex justify-center gap-6 mb-20">
        <button
          onClick={() => setActiveExam("NEET")}
          className={`px-8 py-3 rounded-full font-semibold transition
            ${
              activeExam === "NEET"
                ? "bg-yellow-400 text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
        >
          NEET
        </button>

        <button
          onClick={() => setActiveExam("JEE")}
          className={`px-8 py-3 rounded-full font-semibold transition
            ${
              activeExam === "JEE"
                ? "bg-yellow-400 text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
        >
          JEE
        </button>
      </div>

      {/* Toppers Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-24 gap-x-16 text-center">
          
          {filteredToppers.map((topper, index) => (
            <div key={index} className="flex flex-col items-center">
              
              {/* Circular Photo */}
              <div className="w-40 h-40 rounded-full overflow-hidden bg-white mb-8">
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {topper.name}
              </h3>

              {/* Exam + Rank / Score */}
              <p className="text-sm text-gray-300 mb-4">
                {topper.exam} • {topper.rank}
              </p>

              {/* College */}
              <p className="text-sm text-gray-400">
                {topper.college}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ToppersSection;