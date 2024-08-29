import Subsection from "./Subsection.jsx";
import "./General.css";

function General() {
  return (
    <>
      <div className="general">
        <h2>Personal Information</h2>
        <Subsection type="text" name="name" label="Name"></Subsection>
        <Subsection type="text" name="email" label="Email"></Subsection>
        <Subsection type="tel" name="number" label="Phone Number"></Subsection>
      </div>
    </>
  );
}

export default General;
