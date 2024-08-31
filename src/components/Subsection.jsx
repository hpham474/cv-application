import PropTypes from "prop-types";
import "../styles/Subsection.css";

function Input({ type, name, value, func }) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={func}
      required
    />
  );
}

function TextArea({ name, value, func }) {
  return (
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={func}
      rows="5"
    ></textarea>
  );
}

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
        {type === "textarea" ? (
          <TextArea name={name} value={value} func={func} />
        ) : (
          <Input type={type} name={name} value={value} func={func} />
        )}
      </div>
    </>
  );
}

Subsection.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  func: PropTypes.func.isRequired,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  func: PropTypes.func.isRequired,
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  func: PropTypes.func.isRequired,
};

export default Subsection;
