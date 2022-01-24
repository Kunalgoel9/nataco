import React from "react";
import "./Button.css";
const Button = ({ text, icon }) => {
  return (
    <div class="btn-container">
      <button class="btn">
        <p>
          {" "}
          {icon} {text}
        </p>
      </button>
    </div>
  );
};

export default Button;
