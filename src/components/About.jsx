import { motion } from "framer-motion";
import Satyam from "../assets/Satyam.jpg";
import "../styles/about.css";


function About() {
  return (
    <motion.section
  className="about"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>

      <img src={Satyam} alt="Satyam profile" />

      <h2>About Me</h2>

      <p>
        I’m a passionate MERN Stack Developer with a strong interest in building
        real-world, scalable web applications using clean architecture and modern
        UI practices.
      </p>

      <p>
        Along with full-stack development, I have growing knowledge in Artificial
        Intelligence and Machine Learning, and I enjoy exploring how AI-powered
        features can be integrated into web applications to solve practical
        problems.
      </p>

      <p>
        I focus on writing maintainable code, creating smooth user experiences,
        and continuously improving my skills across React, Node.js, MongoDB,
        REST APIs, and emerging AI technologies.
      </p>
    </motion.section>

  );
}

export default About;
