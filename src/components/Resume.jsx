import "../styles/resume.css";
function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>

      <p>
        You can download my resume to know more about my education, skills,
        internships, and projects.
      </p>

      <a
        href="/Satyam_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
