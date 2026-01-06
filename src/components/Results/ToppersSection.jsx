import React from "react";
import { toppersData } from "./data/ToppersData";

const getYearFromRank = (rank) => {
  const match = rank.match(/\b(20\d{2})\b/);
  return match ? match[1] : "Others";
};

const ToppersSection = ({ activeExam, setActiveExam }) => {
  const filteredToppers = toppersData.filter(
    (topper) => topper.exam === activeExam
  );

  // Group toppers by year
  const groupedByYear = filteredToppers.reduce((acc, topper) => {
    const year = getYearFromRank(topper.rank);
    if (!acc[year]) acc[year] = [];
    acc[year].push(topper);
    return acc;
  }, {});

  // Sort years descending (2025 → 2024 → 2023)
  const sortedYears = Object.keys(groupedByYear).sort(
    (a, b) => b - a
  );

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#2a0038] via-[#24002f] to-[#1a0022]">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Faction Hall of Fame
      </h2>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-6 mb-20">
        {["NEET", "JEE"].map((exam) => (
          <button
            key={exam}
            onClick={() => setActiveExam(exam)}
            className={`px-8 py-3 rounded-full font-semibold transition
              ${
                activeExam === exam
                  ? "bg-yellow-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            {exam}
          </button>
        ))}
      </div>

      {/* YEAR-WISE SECTIONS */}
      <div className="container mx-auto px-6 space-y-32">
        {sortedYears.map((year) => (
          <div key={year}>
            
            {/* Year Heading */}
            <h3 className="text-4xl font-bold text-center text-yellow-400 mb-16">
              {year} Results
            </h3>

            {/* Toppers Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-24 gap-x-16 text-center">
              {groupedByYear[year].map((topper, index) => (
                <div key={index} className="flex flex-col items-center">
                  
                  {/* Photo */}
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

                  {/* Rank */}
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
        ))}
      </div>
    </section>
  );
};

export default ToppersSection;
