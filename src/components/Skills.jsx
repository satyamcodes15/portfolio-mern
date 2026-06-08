import "../styles/skills.css";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiAlteryx,
  SiPostman,
  SiC,
  SiCplusplus,
  SiRender,
  SiNetlify,
  SiTensorflow,
  SiOpenai,
  SiGit,
  SiGithub,
  // SiPython,
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <SiMongodb size={28} />
          <p>MongoDB</p>
        </div>

        <div className="skill-card">
          <SiExpress size={28} />
          <p>Express.js</p>
        </div>

        <div className="skill-card">
          <SiReact size={28} />
          <p>React.js</p>
        </div>

        <div className="skill-card">
          <SiNodedotjs size={28} />
          <p>Node.js</p>
        </div>

        <div className="skill-card">
          <SiJavascript size={28} />
          <p>JavaScript</p>
        </div>

        {/* <div className="skill-card">
          <SiPython size={28} />
          <p>Python</p>
        </div> */}

        <div className="skill-card">
          <SiHtml5 size={28} />
          <p>HTML5</p>
        </div>

        <div className="skill-card">
          <SiCss3 size={28} />
          <p>CSS3</p>
        </div>

        <div className="skill-card">
          <SiGit size={28} />
          <p>Git</p>
        </div>

        <div className="skill-card">
          <SiGithub size={28} />
          <p>GitHub</p>
        </div>

        <div className="skill-card">
          <SiPostman size={28} />
          <p>Postman</p>
        </div>

        <div className="skill-card">
          <SiAlteryx size={28} />
          <p>Alteryx</p>
        </div>

        <div className="skill-card">
          <SiRender size={28} />
          <p>Render</p>
        </div>

        <div className="skill-card">
          <SiNetlify size={28} />
          <p>Netlify</p>
        </div>

        <div className="skill-card">
          <SiC size={28} />
          <p>C</p>
        </div>

        <div className="skill-card">
          <SiCplusplus size={28} />
          <p>C++</p>
        </div>

        <div className="skill-card">
          <SiTensorflow size={28} />
          <p>Machine Learning</p>
        </div>

        <div className="skill-card">
          <SiOpenai size={28} />
          <p>AI & LLMs</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;