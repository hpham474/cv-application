import PropTypes from "prop-types";
import { format } from "date-fns";
import "../styles/Resume.css";
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import { mdiPhoneOutline } from "@mdi/js";
import { mdiMapMarkerOutline } from "@mdi/js";

function Resume({ resumePersonalInfo, educationList }) {
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
                <p>
                  {education.startDate !== "" &&
                    format(education.startDate, "LLL yyyy")}{" "}
                  -{" "}
                  {education.endDate !== "" &&
                    format(education.endDate, "LLL yyyy")}
                </p>
              )}
              <p>{education.school}</p>
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
};

export default Resume;
