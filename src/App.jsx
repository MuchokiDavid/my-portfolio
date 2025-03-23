import React from "react";
import Hero from "./components/Hero";
import NavBars from "./components/utils/NavBars";
import Footer from "./components/utils/Footer";
import Work from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  return (
    <div>
      <NavBars />
      <div className="container mx-auto max-w-8xl px-2">
        <Hero /> {/* Introduction and key highlights */}
        <Skills /> {/* Core competencies */}
        <Work /> {/* Professional experience */}
        <Projects /> {/* Showcase of projects */}
        <Education /> {/* Educational background */}
        <Contact /> {/* Contact information */}
      </div>
      <Footer /> {/* Footer with additional links */}
    </div>
  );
}