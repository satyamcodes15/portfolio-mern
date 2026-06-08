import { motion } from "framer-motion";
import "../styles/experience.css";
const experienceData = [
  {
    company: "HCL Technologies",
    role: "Software Development Intern",
    duration: "Jan 2026 – Apr 2026",
    description:
      "Built an AI-powered customer engagement chatbot using React.js, Python, and AI APIs. Automated query resolution workflows and gained hands-on experience in agile software development.",
  },
  {
    company: "Alteryx",
    role: "Data Analytics Intern",
    duration: "2025",
    description:
      "Worked on data preparation, workflow automation, and analytics using Alteryx tools to improve business data processing.",
  },
  {
    company: "Cognifyz Technologies",
    role: "Full Stack Intern",
    duration: "2025",
    description:
      "Developed full-stack web applications and strengthened frontend, backend, and database development skills through practical projects.",
  },
];

function Experience() {
  return (
   <motion.section className="experience" id="experience" 

  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <h2>Experience</h2>

      {experienceData.map((exp, index) => (
        <div key={index} className="experience-card">
  <h3>{exp.company}</h3>
  <p className="experience-role">
    {exp.role} | {exp.duration}
  </p>
  <p className="experience-desc">{exp.description}</p>
</div>

      ))}
</motion.section>

  );
}

export default Experience;
