import PropTypes from "prop-types";
import Subsection from "./Subsection.jsx";
import "../styles/Education.css";

function Education({ educationList, setEducationList }) {
  const handleChange = (key, e) => {
    const { name, value } = e.target;
    const updatedEducationList = educationList.map((education) =>
      education.id === key ? { ...education, [name]: value } : education
    );
    setEducationList(updatedEducationList);
  };

  const addEducation = () => {
    setEducationList([
      ...educationList,
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const removeEducation = (id) => {
    const updatedEducationList = educationList.filter(
      (education) => education.id !== id
    );
    setEducationList(updatedEducationList);
  };

  return (
    <>
      <div className="education">
        <h2>Education</h2>
        {educationList.map((education) => (
          <div key={education.id} className="education-entry">
            <Subsection
              type="text"
              name="degree"
              label="Degree"
              value={education.degree}
              func={(e) => handleChange(education.id, e)}
            />
            <Subsection
              type="text"
              name="school"
              label="School"
              value={education.school}
              func={(e) => handleChange(education.id, e)}
            />
            <Subsection
              type="date"
              name="startDate"
              label="Start Date"
              value={education.startDate}
              func={(e) => handleChange(education.id, e)}
            />
            <Subsection
              type="date"
              name="endDate"
              label="End Date"
              value={education.endDate}
              func={(e) => handleChange(education.id, e)}
            />
            <button onClick={() => removeEducation(education.id)}>
              Remove
            </button>
          </div>
        ))}
        <button onClick={addEducation}>Add</button>
      </div>
    </>
  );
}

Education.propTypes = {
  educationList: PropTypes.array.isRequired,
  setEducationList: PropTypes.func.isRequired,
};

export default Education;
