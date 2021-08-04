import React from "react";
import button from "../../styles/button.module.css";
const Button = ({ children, color, text, width, height }) => {
  const custom = {
    color: text,
    backgroundColor: color,
    width,
    height
  };
  return (
    <button className={button.button_root} style={custom} type="button">
      {children}
    </button>
  );
};

export default Button;
