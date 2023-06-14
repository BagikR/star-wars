import PropTypes from "prop-types";
import cn from "classnames";
import clearIcon from "./img/cancel.svg";
import "../index.css";
import styles from "./UIInput.module.css";

export default function UIInput({ value, handleInputChange, placeholder, classes }) {
  return (
    <div className={cn(styles.wrapper_input, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <img
        src={clearIcon}
        alt="clear"
        className={cn(styles.clear, !value && styles.clear__disabled)}
        onClick={() => value && handleInputChange("")}
      />
    </div>
  );
}

UIInput.propTypes = {
  value: PropTypes.string,
  inputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
};
