// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Subscribe from "./components/Subscribe/Subscribe.jsx";
import Banner2 from "./components/Banner/Banner2.jsx";
import Footer from "./components/Footer/Footer.jsx";

import SignIn from "./components/Auth/SignIn.jsx";
import SignUp from "./components/Auth/SignUp.jsx";

import OurTeam from "./components/Team/OurTeam";
import Educators from "./components/Team/Educators";
import Operations from "./components/Team/Operations";
import WebTech from "./components/Team/WebTech";

import Contact from "./components/Contact/Contact.jsx";

import DroppingCards from "./components/UI/DroppingCards.jsx";

const Home = () => {
  const items = [
    {
      title: "Faction is Different!",
      lines: ["Hands-on problems", "Peer reviews", "Active learning"],
    },
    {
      title: "Fast Feedback",
      lines: ["Auto-check tests", "Detailed hints"],
    },
    {
      title: "Community Driven",
      lines: ["Discuss solutions", "Mentor guidance"],
    },
  ];

  return (
    <main className="overflow-x-hidden bg-[#FEFCED] text-[#1e1e1e]">
      <Hero />
      <Courses />

      {/* 🔥 Dropping Cards Section */}
      <DroppingCards items={items} />

      <Banner />
      <Subscribe />
      <Banner2 />
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/team" element={<OurTeam />} />
        <Route path="/team/educators" element={<Educators />} />
        <Route path="/team/operations" element={<Operations />} />
        <Route path="/team/webtech" element={<WebTech />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
