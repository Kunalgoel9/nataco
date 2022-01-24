import React, { useState } from "react";
import Pack from "./Pack";
import "./PackSection.css";
import { FiCheck } from "react-icons/fi";
const PackSection = ({
  heading,
  savings,
  saved,
  mostpopular,
  price,
  oldprice,
}) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div class="outer-pack-section">
      <div class="packs-section" onClick={() => setHidden(!hidden)}>
        <Pack
          heading={heading}
          savings={savings}
          saved={saved}
          mostpopular={mostpopular}
          price={price}
          oldprice={oldprice}
        />
      </div>

      <div class="tick">
        {!hidden && (
          <p>
            <FiCheck />
          </p>
        )}
      </div>
    </div>
  );
};

export default PackSection;
