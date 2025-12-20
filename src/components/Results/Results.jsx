import React from "react";
import Navbar from "../Navbar/Navbar";

import HeroResults from "./HeroResults";
import VideoBites from "./VideoBites";
import ResultsSlider from "./ResultsSlider";
import ToppersSection from "./ToppersSection";
import ResultsTable from "./ResultsTable";
import Testimonials from "./Testimonials";

const Results = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2a0638] via-[#1b0627] to-[#12001a] text-white overflow-hidden">
      <Navbar />

      <HeroResults />
      {/* <VideoBites /> */}
      {/* <ResultsSlider /> */}
      <ToppersSection />
      <ResultsTable />
      <Testimonials />
    </main>
  );
};

export default Results;
