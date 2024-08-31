import PropTypes from "prop-types";
import Subsection from "./Subsection.jsx";
import "../styles/Experience.css";

function Experience({ experienceList, setExperienceList }) {
  const handleChange = (key, e) => {
    const { name, value } = e.target;
    const updatedExperienceList = experienceList.map((experience) =>
      experience.id === key ? { ...experience, [name]: value } : experience
    );
    setExperienceList(updatedExperienceList);
  };

  const addExperience = () => {
    setExperienceList([
      ...experienceList,
      {
        id: crypto.randomUUID(),
        role: "",
        company: "",
        responsiblities: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeExperience = (id) => {
    const updatedExperienceList = experienceList.filter(
      (experience) => experience.id !== id
    );
    setExperienceList(updatedExperienceList);
  };

  return (
    <>
      <div className="experience">
        <h2>Experience</h2>
        {experienceList.map((experience) => (
          <div key={experience.id} className="experience-entry">
            <Subsection
              type="text"
              name="role"
              label="Role"
              value={experience.role}
              func={(e) => handleChange(experience.id, e)}
            />
            <Subsection
              type="text"
              name="company"
              label="Company"
              value={experience.company}
              func={(e) => handleChange(experience.id, e)}
            />
            <Subsection
              type="textarea"
              name="responsiblities"
              label="Responsiblities"
              value={experience.responsiblities}
              func={(e) => handleChange(experience.id, e)}
            />
            <Subsection
              type="month"
              name="startDate"
              label="Start Date"
              value={experience.startDate}
              func={(e) => handleChange(experience.id, e)}
            />
            <Subsection
              type="month"
              name="endDate"
              label="End Date"
              value={experience.endDate}
              func={(e) => handleChange(experience.id, e)}
            />
            <button onClick={() => removeExperience(experience.id)}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={addExperience}>Add</button>
      </div>
    </>
  );
}

Experience.propTypes = {
  experienceList: PropTypes.array.isRequired,
  setExperienceList: PropTypes.func.isRequired,
};

export default Experience;
