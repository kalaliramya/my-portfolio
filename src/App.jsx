

/*
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import skill from "./components/Skills"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
    <Projects />
    <Experience />
    </>
  )
}
 */

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import config from "./data/config";
import About from "./components/About";




export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

 console.log("CONFIG:", config?.Contact);
  return (
    <>
      <Navbar />     
      <Hero />
       <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact config={config} />
           

    </>
  );
}