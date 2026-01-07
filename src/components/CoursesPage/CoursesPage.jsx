import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "./sections/HeroSection";
import CoursesGrid from "./sections/CoursesGrid";
import FooterCTA from "./sections/FooterCTA";
import { coursesData } from "./data/coursesData";

const CoursesPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F4E8]">
      <Navbar />
      <HeroSection />

      {/* ROW 1 */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          <CoursesGrid data={coursesData.class_5_7} loading={loading} />
          <CoursesGrid data={coursesData.foundation} loading={loading} />
        </div>
      </section>

      {/* ROW 2 */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          <CoursesGrid data={coursesData.neet} loading={loading} />
          <CoursesGrid data={coursesData.jee_mains} loading={loading} />
        </div>
      </section>

      {/* ROW 3 */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
          <CoursesGrid data={coursesData.jee_advanced} loading={loading} />
          <CoursesGrid data={coursesData.olympiad} loading={loading} />
        </div>
      </section>

      <FooterCTA />
    </main>
  );
};

export default CoursesPage;
