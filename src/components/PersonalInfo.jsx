import PropTypes from "prop-types";
import Subsection from "./Subsection.jsx";
import "../styles/Personal.css";

function PersonalInfo({ resumePersonalInfo, setResumePersonalInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumePersonalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="general">
        <h2>Personal Information</h2>
        <Subsection
          type="text"
          name="name"
          label="Name"
          value={resumePersonalInfo.name}
          func={handleChange}
        ></Subsection>
        <Subsection
          type="text"
          name="email"
          label="Email"
          value={resumePersonalInfo.email}
          func={handleChange}
        ></Subsection>
        <Subsection
          type="text"
          name="phone"
          label="Phone Number"
          value={resumePersonalInfo.phone}
          func={handleChange}
        ></Subsection>
        <Subsection
          type="text"
          name="location"
          label="Location"
          value={resumePersonalInfo.location}
          func={handleChange}
        ></Subsection>
      </div>
    </>
  );
}

PersonalInfo.propTypes = {
  resumePersonalInfo: PropTypes.object.isRequired,
  setResumePersonalInfo: PropTypes.func.isRequired,
};

export default PersonalInfo;
