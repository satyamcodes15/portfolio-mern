import { motion } from "framer-motion";
import Satyam from "../assets/Tech_Theme.jpeg";
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

      <div className="about-content">
        <h2>About Me</h2>

        <div className="about-badge">
          🚀 MERN Stack Developer
        </div>

        <p>
          I’m a passionate MERN Stack Developer and Final Year B.Tech student
          with hands-on experience in building full-stack web applications using
          React.js, Node.js, Express.js, and MongoDB. I enjoy transforming ideas
          into scalable and user-friendly digital solutions.
        </p>

        <p>
          Through internships at HCL Technologies, Alteryx, and Cognifyz
          Technologies, I have gained practical exposure to software
          development, data analytics, AI-powered applications, and modern
          development workflows.
        </p>

        <p>
          My interests include full-stack development, artificial intelligence,
          problem-solving, and creating impactful products. I continuously
          explore new technologies while building projects such as AgroVision,
          Risk Sentinel, and AI-powered business applications.
        </p>
      </div>
    </motion.section>
  );
}

export default About;