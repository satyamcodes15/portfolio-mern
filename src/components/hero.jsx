import { motion } from "framer-motion";
import "../styles/hero.css";

function Hero() {
  return (
    <motion.section
  id="home"
  className="hero"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>

      <h1>
        Hi, I’m Satyam a <span style={{ color: "#8a2be2" }}>MERN Developer</span>
      </h1>

      <p>
        I build real, scalable, full-stack web applications with modern
        technologies and clean architecture.
      </p>

      <div className="hero-buttons">
  <a href="#skills" className="btn-primary">
    View Skills
  </a>
  <a href="#experience" className="btn-secondary">
    Experience
  </a>
</div>

    </motion.section>
  );
}

export default Hero;
