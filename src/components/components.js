import React from "react";
import NavBar from "./navbar/NavBar";
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Research from "./research/Research";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
const components = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
};

export default components;
