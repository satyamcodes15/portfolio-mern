import { motion } from "framer-motion";
import "../styles/projects.css";

const projectsData = [
  {
    title: "AgroVision",
    description:
      "A smart agriculture management platform connecting farmers and vendors with real-time features.",
    live: "https://agrovision-frontend.netlify.app",
    github: "https://github.com/satyamcodes15",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal MERN portfolio with animations, clean UI, and real backend integration.",
    live: "#",
    github: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Projects() {
  return (
    <motion.section id="projects" className="projects"
  initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 variants={cardVariants}>Projects</motion.h2>

      <motion.div className="projects-grid" variants={containerVariants}>
        {projectsData.map((project, index) => (
          <motion.div
  className="project-card"
  key={index}
  variants={cardVariants}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  <h3>{project.title}</h3>
  <p>{project.description}</p>

  <div className="project-actions">
    <a href={project.live} target="_blank" rel="noreferrer">
      Live
    </a>
    <a href={project.github} target="_blank" rel="noreferrer">
      GitHub
    </a>
  </div>
</motion.div>

        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
