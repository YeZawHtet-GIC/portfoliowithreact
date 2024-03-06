import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
