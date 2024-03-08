import React from "react";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Service from "./Service";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
    </>
  );
}
