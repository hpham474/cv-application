import PropTypes from "prop-types";
import "../styles/Resume.css";
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import { mdiPhoneOutline } from "@mdi/js";
import { mdiMapMarkerOutline } from "@mdi/js";

<Icon path={mdiEmailOutline} size={1} />;

function Resume({ resumePersonalInfo }) {
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
      </div>
    </>
  );
}

Resume.propTypes = {
  resumePersonalInfo: PropTypes.object.isRequired,
};

export default Resume;
