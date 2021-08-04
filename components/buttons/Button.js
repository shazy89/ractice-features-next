import React from "react";
import button from "../../styles/button.module.css";
const Button = ({ children }) => {
  return (
    <button className={button.button_root} type="button">
      {children}
    </button>
  );
};

export default Button;
