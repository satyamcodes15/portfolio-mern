import { motion } from "framer-motion";
import Satyam from "../assets/Satyam.jpg";
import "../styles/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-container">

        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I’m Satyam a{" "}
            <span className="hero-highlight">MERN Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build real, scalable, full-stack web applicaiton.
            {/* applications with modern
            technologies and clean architecture. */}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#skills" className="btn-primary">
              View Skills
            </a>

            <a href="#experience" className="btn-secondary">
              Experience
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={Satyam} alt="Satyam" />
        </motion.div>
        
        <motion.div
  className="hero-stats"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <div className="stat-card">
    <h3>3+</h3>
    <p>Internships</p>
  </div>

  <div className="stat-card">
    <h3>4+</h3>
    <p>Projects</p>
  </div>

  <div className="stat-card">
    <h3>AI</h3>
    <p>& MERN</p>
  </div>
</motion.div>

      </div>

    </section>
  );
}

export default Hero;
