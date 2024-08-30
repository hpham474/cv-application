import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import "./styles/App.css";

function App() {
  const [resumePersonalInfo, setResumePersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const [educationList, setEducationList] = useState([
    {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ]);

  return (
    <>
      <nav>
        <h1>CV Builder</h1>
      </nav>
      <div className="content">
        <div className="sidebar">
          <PersonalInfo
            resumePersonalInfo={resumePersonalInfo}
            setResumePersonalInfo={setResumePersonalInfo}
          ></PersonalInfo>
          <Education
            educationList={educationList}
            setEducationList={setEducationList}
          ></Education>
          <Experience></Experience>
          <Skills></Skills>
        </div>
        <div className="display">
          <Resume
            resumePersonalInfo={resumePersonalInfo}
            educationList={educationList}
          ></Resume>
        </div>
      </div>
    </>
  );
}

export default App;
