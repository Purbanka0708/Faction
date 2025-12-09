// src/components/Team/OurTeam.jsx
import React from "react";
import { Link } from "react-router-dom";
import TeamData from "./TeamData";
import TeamMember from "./TeamMember";
import Navbar from "../Navbar/Navbar";

const SectionHeader = ({ id, title, desc }) => (
  <div id={id} className="mb-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[black]">{title}</h2>
    <p className="mt-2 text-slate-700 max-w-2xl mx-auto">{desc}</p>
  </div>
);

const OurTeam = () => {
  // split groups
  const educators = TeamData.filter((m) => m.group === "educators");
  const operations = TeamData.filter((m) => m.group === "operations");
  const content = TeamData.filter((m) => m.group === "content");

  return (
    <section className="min-h-screen bg-[#FEFCED]">
      <Navbar />

      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e1e1e]">
            Meet The Faction Team
          </h1>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">
            Our experienced faculty and mentors guide students from foundations through NEET &amp; IIT/JEE.
            Every member brings subject mastery and real mentoring experience.
          </p>

          {/* quick in-page links */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#educators" className="px-3 py-1 rounded-md bg-[#E2B2FF] text-[#1e1e1e] hover:bg-[#A767FF] hover:text-white transition">
              Educators
            </a>
            <a href="#operations" className="px-3 py-1 rounded-md bg-[#A7E6C1] text-[#1e1e1e] hover:bg-[#F0D200] transition">
              Operations
            </a>
            <a href="#content" className="px-3 py-1 rounded-md bg-[#FFD6D6] text-[#1e1e1e] hover:bg-[#E2B2FF] transition">
              Content Team
            </a>
          </div>
        </div>

        {/* Educators section */}
        <div className="mb-16">
          <SectionHeader
            id="educators"
            title="Educators"
            desc="Subject experts and mentors responsible for teaching, concept clarity and exam strategy."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {educators.map((m) => (
              <div key={m.id} className="hover:translate-y-1 transition-transform duration-200">
                <TeamMember member={m} />
              </div>
            ))}
          </div>
        </div>

        {/* Operations section */}
        <div className="mb-16">
          <SectionHeader
            id="operations"
            title="Operations"
            desc="The team that keeps Faction running — coordination, logistics, test management and growth."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {operations.map((m) => (
              <div key={m.id} className="hover:translate-y-1 transition-transform duration-200">
                <TeamMember member={m} />
              </div>
            ))}
          </div>
        </div>

        {/* Content section */}
        <div className="mb-12">
          <SectionHeader
            id="content"
            title="Content & Media"
            desc="Content creators, editors and media partners who build study material, videos and outreach."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {content.map((m) => (
              <div key={m.id} className="hover:translate-y-1 transition-transform duration-200">
                <TeamMember member={m} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Want to join our team or collaborate?{" "}
            <Link
              to="/signin"
              className="text-[black] font-semibold hover:underline hover:text-slate-600 transition"
            >
              Get in touch
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
