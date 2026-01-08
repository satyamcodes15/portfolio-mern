import { SiTensorflow, SiOpenai } from "react-icons/si";
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
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <SiMongodb size={28} />
          <p>mongodb</p>
        </div>

        <div className="skill-card">
          <SiExpress size={28} />
          <p>express.js</p>
        </div>

        <div className="skill-card">
          <SiReact size={28} />
          <p>react.js</p>
        </div>

        <div className="skill-card">
          <SiNodedotjs size={28} />
          <p>node.js</p>
        </div>

        <div className="skill-card">
          <SiJavascript size={28} />
          <p>javascript</p>
        </div>

        <div className="skill-card">
          <SiHtml5 size={28} />
          <p>html</p>
        </div>

        <div className="skill-card">
          <SiCss3 size={28} />
          <p>css</p>
        </div>

        <div className="skill-card">
          <SiAlteryx size={28} />
          <p>alteryx</p>
        </div>

        <div className="skill-card">
          <SiPostman size={28} />
          <p>postman</p>
        </div>

        <div className="skill-card">
          <SiRender size={28} />
          <p>render</p>
        </div>

        <div className="skill-card">
          <SiNetlify size={28} />
          <p>netlify</p>
        </div>

        <div className="skill-card">
          <SiC size={28} />
          <p>c</p>
        </div>

        <div className="skill-card">
          <SiCplusplus size={28} />
          <p>c++</p>
        </div>
        <div className="skill-card">
  <SiTensorflow size={28} />
  <p>machine learning</p>
</div>

<div className="skill-card">
  <SiOpenai size={28} />
  <p>ai basics</p>
</div>

      </div>
    </section>
  );
}

export default Skills;
