import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const colorsMap = {
  blue: styles.blue,
  red: styles.red,
};

const Button = (props) => {
  const [isPressed, setPressed] = useState(false);
  const { children, color, onClick, className, type } = props;
  const btnIsPressed = isPressed;
  const pressedStyle = btnIsPressed ? styles.pressed : "";

  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={onClick}
      className={`${styles.btn} ${pressedStyle} ${colorsMap[color]} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["blue", "red"]),
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  onClick: () => {},
  color: "blue",
  className: "",
  type: "button",
};

export default Button;
