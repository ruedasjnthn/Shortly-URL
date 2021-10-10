import React from "react";

const STYLES = ["btn--curved", "btn--edged",];

const SIZES = ["btn--getStarted", "btn--copy", "btn--copied", "btn--signUp", "btn--shorten"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const setButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const setButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button className={`btn ${setButtonStyle} ${setButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
