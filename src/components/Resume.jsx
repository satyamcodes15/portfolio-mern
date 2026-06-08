import "../styles/resume.css";

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>

      <p>
        Download the resume best suited to the role you are hiring for.
      </p>

      <div className="resume-buttons">
        <a
          href="/Satyam Kachhi SDE_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Download SDE Resume
        </a>

        <a
          href="Satyam Kachhi fullstack(MERN)_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Download MERN Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;