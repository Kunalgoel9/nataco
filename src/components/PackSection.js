import React from "react";
import Pack from "./Pack";
import "./PackSection.css";
const PackSection = () => {
  return (
    <div class="outer-pack-section">
      <div class="packs-section">
        <Pack />
      </div>

      <div class="tick">
        <p>tick</p>
      </div>
    </div>
  );
};

export default PackSection;
