import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre"; // (this is the section on homepage)
import Demo from "./components/Demo";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TeamAndVision from "./components/TeamAndVision";
// import TeamAndVision from "./components/TeamAndVision"; // <-- new full page

function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <TeamAndVision />
      <Demo />
      <div className="-space-y-2">
<Features />
      <Contact />
      </div>
      
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-tourpin-soft-white text-neutral-900 flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<TeamAndVision />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
