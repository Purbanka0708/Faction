
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Courses from "./components/Courses/Courses";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import OurTeam from "./components/Team/OurTeam"; 
import Contact from "./components/Contact/Contact";


const Home = () => {
  return (
    <main className="overflow-x-hidden bg-[#FEFCED] text-[#1e1e1e]">
      <Hero />
      <Courses />
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
