import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/projects";
import Resume from "../components/Resume";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
       <Experience />
      <Projects />
      <Resume />
      <Certifications />
      <Contact />
      
    </>
  );
}

export default Home;
