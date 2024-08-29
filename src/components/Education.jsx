import Subsection from "./Subsection.jsx";
import "./Education.css";

function Education() {
  return (
    <>
      <div className="education">
        <h2>Education</h2>
        <Subsection type="text" name="school" label="School"></Subsection>
        <Subsection type="text" name="degree" label="Degree"></Subsection>
        <Subsection
          type="date"
          name="startDate"
          label="Start Date"
        ></Subsection>
        <Subsection type="date" name="endDate" label="End Date"></Subsection>
      </div>
    </>
  );
}

export default Education;
