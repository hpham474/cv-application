import PropTypes from "prop-types";
import "../styles/Subsection.css";

function Subsection({ type, name, label, value, func }) {
  return (
    <>
      <div className="sub-section">
        <label htmlFor={name}>
          <span>{label}</span>
          <strong>
            <span aria-label="required">*</span>
          </strong>
        </label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={func}
          required
        />
      </div>
    </>
  );
}

Subsection.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Subsection;
