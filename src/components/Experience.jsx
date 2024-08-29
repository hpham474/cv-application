import Subsection from "./Subsection.jsx";
import "../styles/Experience.css";

function Experience() {
  return (
    <>
      <div className="experience">
        <h2>Experience</h2>
        <Subsection type="text" name="company" label="Company"></Subsection>
        <Subsection type="text" name="role" label="Role"></Subsection>
        <Subsection
          type="text"
          name="responsibilities"
          label="Responsibilities"
        ></Subsection>
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

export default Experience;
