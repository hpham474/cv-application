import PropTypes from "prop-types";
import "./Subsection.css";

function Subsection({ type, name, label }) {
  return (
    <>
      <div className="sub-section">
        <label htmlFor={name}>
          <span>{label}</span>
          <strong>
            <span aria-label="required">*</span>
          </strong>
        </label>
        <input id={name} name={name} type={type} required />
      </div>
    </>
  );
}

Subsection.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Subsection;
