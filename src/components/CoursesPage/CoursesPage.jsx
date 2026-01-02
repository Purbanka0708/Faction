import Navbar from "../Navbar/Navbar";
import HeroSection from "./sections/HeroSection";
import CoursesGrid from "./sections/CoursesGrid";
import FooterCTA from "./sections/FooterCTA";
import { coursesData } from "./data/coursesData";

const CoursesPage = () => {
  return (
    <main className="min-h-screen bg-[#F8F4E8]">

      <Navbar />
      <HeroSection />

      {/* ROW 1 */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          <CoursesGrid data={coursesData.class_5_7} />
          <CoursesGrid data={coursesData.foundation} />
        </div>
      </section>

      {/* ROW 2 */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          <CoursesGrid data={coursesData.neet} />
          <CoursesGrid data={coursesData.jee_mains} />
        </div>
      </section>

      {/* ROW 3 — NEW COURSES */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          <CoursesGrid data={coursesData.jee_advanced} />
          <CoursesGrid data={coursesData.olympiad} />
        </div>
      </section>

      <FooterCTA />
    </main>
  );
};

export default CoursesPage;
