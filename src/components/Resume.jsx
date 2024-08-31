import PropTypes from "prop-types";
import { format } from "date-fns";
import "../styles/Resume.css";
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import { mdiPhoneOutline } from "@mdi/js";
import { mdiMapMarkerOutline } from "@mdi/js";

function Resume({ resumePersonalInfo, educationList, experienceList }) {
  function checkEducationList() {
    if (educationList.length < 1) {
      return false;
    }
    if (
      educationList[0].school === "" &&
      educationList[0].degree === "" &&
      educationList[0].startDate === "" &&
      educationList[0].endDate === ""
    ) {
      return false;
    }
    return true;
  }

  function checkExperienceList() {
    if (experienceList.length < 1) {
      return false;
    }
    if (
      experienceList[0].role === "" &&
      experienceList[0].company === "" &&
      experienceList[0].responsiblities === "" &&
      experienceList[0].startDate === "" &&
      experienceList[0].endDate === ""
    ) {
      return false;
    }
    return true;
  }

  function formatDate(inputDate) {
    const [year, month] = inputDate.split("-").map(Number);
    const date = new Date(year, month - 1);

    const formattedDate = format(date, "MMM yyyy");

    return formattedDate;
  }

  return (
    <>
      <div className="resume">
        <div className="personal">
          <h3 className="resumeName">{resumePersonalInfo.name}</h3>
          <p className="resumeEmail">
            {resumePersonalInfo.email !== "" && (
              <Icon path={mdiEmailOutline} size={1} />
            )}
            {resumePersonalInfo.email}
          </p>
          <p className="resumePhone">
            {resumePersonalInfo.phone !== "" && (
              <Icon path={mdiPhoneOutline} size={1} />
            )}
            {resumePersonalInfo.phone}
          </p>
          <p className="resumeLocation">
            {resumePersonalInfo.location !== "" && (
              <Icon path={mdiMapMarkerOutline} size={1} />
            )}
            {resumePersonalInfo.location}
          </p>
        </div>
        <div className="educationResume">
          {checkEducationList() && (
            <>
              <h3>Education</h3>
              <hr></hr>
            </>
          )}
          {educationList.map((education) => (
            <div key={education.id} className="educationEntryResume">
              <h4>{education.degree}</h4>
              {(education.startDate !== "" || education.endDate !== "") && (
                <p className="date">
                  {education.startDate !== "" &&
                    formatDate(education.startDate)}{" "}
                  - {education.endDate !== "" && formatDate(education.endDate)}
                </p>
              )}
              <p className="school">{education.school}</p>
            </div>
          ))}
        </div>
        <div className="experienceResume">
          {checkExperienceList() && (
            <>
              <h3>Experience</h3>
              <hr></hr>
            </>
          )}
          {experienceList.map((experience) => (
            <div key={experience.id} className="experienceEntryResume">
              <h4>{experience.role}</h4>
              {(experience.startDate !== "" || experience.endDate !== "") && (
                <p className="date">
                  {experience.startDate !== "" &&
                    formatDate(experience.startDate)}{" "}
                  -{" "}
                  {experience.endDate !== "" && formatDate(experience.endDate)}
                </p>
              )}
              <h5 className="company">{experience.company}</h5>
              <p className="responsibilities">{experience.responsiblities}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Resume.propTypes = {
  resumePersonalInfo: PropTypes.object.isRequired,
  educationList: PropTypes.array.isRequired,
  experienceList: PropTypes.array.isRequired,
};

export default Resume;
