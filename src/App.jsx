import { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
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

  const [experienceList, setExperienceList] = useState([
    {
      id: crypto.randomUUID(),
      role: "",
      company: "",
      responsiblities: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [resumeSkills, setResumeSkills] = useState("");

  async function download() {
    try {
      const canvas = await html2canvas(document.querySelector(".resume"));
      const imgData = canvas.toDataURL("image/png");

      const doc = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const totalPages = Math.ceil(imgHeight / pageHeight);

      for (let i = 0; i < totalPages; i++) {
        const yOffset = -i * pageHeight;
        if (i > 0) {
          doc.addPage();
        }

        doc.addImage(imgData, "PNG", 0, yOffset, imgWidth, imgHeight);
      }

      doc.save("resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  }

  return (
    <>
      <nav>
        <h1>CV Builder</h1>
        <button className="download" onClick={download}>
          Download
        </button>
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
          <Experience
            experienceList={experienceList}
            setExperienceList={setExperienceList}
          ></Experience>
          <Skills
            resumeSkills={resumeSkills}
            setResumeSkills={setResumeSkills}
          ></Skills>
        </div>
        <div className="display">
          <Resume
            resumePersonalInfo={resumePersonalInfo}
            educationList={educationList}
            experienceList={experienceList}
            resumeSkills={resumeSkills}
          ></Resume>
        </div>
      </div>
    </>
  );
}

export default App;
