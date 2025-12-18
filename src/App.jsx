import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Splash */
import SplashScreen from "./components/Splash/SplashScreen";

/* Home Sections */
import Hero from "./components/Hero/Hero.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Subscribe from "./components/Subscribe/Subscribe.jsx";
import Banner2 from "./components/Banner/Banner2.jsx";
import Footer from "./components/Footer/Footer.jsx";

/* Auth */
import SignIn from "./components/Auth/SignIn.jsx";
import SignUp from "./components/Auth/SignUp.jsx";

/* Team */
import OurTeam from "./components/Team/OurTeam";
import Educators from "./components/Team/Educators";
import Operations from "./components/Team/Operations";
import WebTech from "./components/Team/WebTech";

/* About */
import AboutUs from "./components/About/AboutUs";

/* Others */
import Contact from "./components/Contact/Contact.jsx";
import DroppingCards from "./components/UI/DroppingCards.jsx";

/* ---------------- HOME ---------------- */

const Home = () => {
  const items = [
    {
      title: "Why FACTION?",
      lines: [
        "Practice-first learning",
        "No rote memorization",
        "Skills > certificates",
      ],
    },
    {
      title: "How You Learn",
      lines: [
        "Real-world problems",
        "Project-based approach",
        "Learn by building",
      ],
    },
    {
      title: "Grow Faster",
      lines: [
        "Instant feedback",
        "Mentor-reviewed work",
        "Continuous improvement",
      ],
    },
  ];

  return (
    <main className="overflow-x-hidden bg-[#FEFCED] text-[#1e1e1e]">
      <Hero />
      <Courses />
      <DroppingCards items={items} />
      <Banner />
      <Subscribe />
      <Banner2 />
    </main>
  );
};

/* ---------------- APP ---------------- */

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {!showSplash && (
        <>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About */}
            <Route path="/about" element={<AboutUs />} />

            {/* Team */}
            <Route path="/team" element={<OurTeam />} />
            <Route path="/team/educators" element={<Educators />} />
            <Route path="/team/operations" element={<Operations />} />
            <Route path="/team/webtech" element={<WebTech />} />

            {/* Others */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>

          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
