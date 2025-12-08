// src/components/Team/OurTeam.jsx
import React from "react";
import { Link } from "react-router-dom";
import TeamData from "./TeamData";
import TeamMember from "./TeamMember";
import Navbar from "../Navbar/Navbar";

const OurTeam = () => {
  return (
    <section className="min-h-screen bg-[#FEFCED]">
      <Navbar />
      <div className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#A767FF]">Meet The Faction Team</h1>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto">
            Our experienced faculty and mentors guide students from foundations through NEET &amp; IIT/JEE.
            Every member brings subject mastery and real mentoring experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {TeamData.map((m) => (
            <div key={m.id} className="hover:translate-y-1 transition-transform duration-200">
              <TeamMember member={m} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Want to join our team or collaborate?{" "}
            <Link
              to="/signin"
              className="text-[#A767FF] font-semibold hover:underline hover:text-[#E2B2FF] transition"
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
