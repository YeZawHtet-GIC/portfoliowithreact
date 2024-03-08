import React from "react";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="main-content">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
