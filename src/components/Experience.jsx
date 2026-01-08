import { motion } from "framer-motion";
import "../styles/experience.css";
const experienceData = [
  {
    company: "Alteryx",
    role: "Intern",
    duration: "2025",
    description:
      "Worked on data analytics workflows and gained hands-on experience with Alteryx tools, focusing on data preparation, analysis, and automation.",
  },
  {
    company: "Cognifyz Technologies",
    role: "Full Stack Intern",
    duration: "2025",
    description:
      "Worked on full-stack web development projects using modern technologies, strengthening skills in frontend, backend, and real-world application development.",
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
