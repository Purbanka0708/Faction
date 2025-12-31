import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import HeroResults from "./HeroResults";
import ToppersSection from "./ToppersSection";
import ResultsTable from "./ResultsTable";
import Testimonials from "./Testimonials";

const Results = () => {
  const [activeExam, setActiveExam] = useState("NEET");

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2a0638] via-[#1b0627] to-[#12001a] text-white overflow-hidden">
      <Navbar />
      <HeroResults />

      <ToppersSection
        activeExam={activeExam}
        setActiveExam={setActiveExam}
      />

      <ResultsTable
        activeExam={activeExam}
        setActiveExam={setActiveExam}
      />

      <Testimonials key={activeExam} activeExam={activeExam} />
    </main>
  );
};

export default Results;