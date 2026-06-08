import "../styles/certifications.css";
const certificationsData = [
  {
    title: "AI & Large Language Models Certificate",
    issuer: "HCL Certification",
    year: "2026",
    file: "/HCL_Certificate.pdf",
  },
  {
    title: " Alteryx Internship Certificate",
    issuer: "Satyam Internship",
    year: "2025",
    file: "/Satyam_Internship_Certificate.pdf",
  },
  {
    title: "Full Stack Development Internship Certificate",
    issuer: "Cognifyz Technologies",
    year: "2025",
    file: "/Satyam_cognifyz.pdf",
  },
  {
    title: "MERN Stack Certification",
    issuer: "MERN Program",
    year: "2025",
    file: "/MERN_Certificate.jpg",
  },
];

function Certifications() {
  return (
    <section className="certifications">
      <h2>Certifications</h2>

      {certificationsData.map((cert, index) => (
        <div key={index} className="certification-card">
  <h3>{cert.title}</h3>
  <p className="certification-meta">
    {cert.issuer} | {cert.year}
  </p>

  <a
    href={cert.file}
    target="_blank"
    rel="noopener noreferrer"
    className="certification-link"
  >
    View Certificate
  </a>
</div>


      ))}
    </section>
  );
}

export default Certifications;
