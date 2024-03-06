import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Aside from "./Aside";

export default function Home() {
  return (
    <div>
      <Aside />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
