import PropTypes from "prop-types";
import Subsection from "./Subsection.jsx";
import "../styles/Skills.css";

function Skills({ resumeSkills, setResumeSkills }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setResumeSkills(value);
  };

  return (
    <>
      <div className="skills">
        <h2>Skills</h2>
        <Subsection
          type="text"
          name="skills"
          label="Skills"
          value={resumeSkills}
          func={handleChange}
        ></Subsection>
      </div>
    </>
  );
}

Skills.propTypes = {
  resumeSkills: PropTypes.string.isRequired,
  setResumeSkills: PropTypes.func.isRequired,
};

export default Skills;
