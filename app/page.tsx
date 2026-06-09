import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    /* z-10 lifts all content above the fixed GlobalBackground (z-0) */
    <main style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <CaseStudies />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
