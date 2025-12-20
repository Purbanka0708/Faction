import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import HeroSection from "./sections/HeroSection";
import FilterBar from "./sections/FilterBar";
import CoursesGrid from "./sections/CoursesGrid";
import SupportSection from "./sections/SupportSection";
import FooterCTA from "./sections/FooterCTA";
import { coursesData } from "./data/coursesData";

const CoursesPage = () => {
  return (
    <main className="min-h-screen bg-[#F8F4E8]">

      <Navbar />

      <HeroSection />
      {/* <FilterBar /> */}

      <CoursesGrid data={coursesData.class_5_8} />
      <CoursesGrid data={coursesData.foundation} />
      <CoursesGrid data={coursesData.neet} />
      <CoursesGrid data={coursesData.jee} />

      {/* <SupportSection /> */}
      <FooterCTA />

      {/* <Footer /> */}
    </main>
  );
};

export default CoursesPage;
