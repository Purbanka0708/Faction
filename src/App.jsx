// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

const Home = () => {
  return (
    <main className="overflow-x-hidden bg-[#FEFCED] text-dark">
      <Hero />
      <Services />
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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        
        <Route path="*" element={<Home />} />
      </Routes>

      
      <Footer />
    </Router>
  );
};

export default App;
