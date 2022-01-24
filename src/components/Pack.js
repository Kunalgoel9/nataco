import React from "react";
import "./Pack.css";
const Pack = () => {
  return (
    <div class="pack">
      <div class="pack-left">
        <div class="most-popular">
          <p>MOST POPULAR</p>
        </div>
        <h1>1 Months Pack (4 tubes)</h1>
        <h2>Savings: ₹200</h2>
        <p>38% Saved</p>
        <p id="highlight">Best Results</p>
      </div>
      <div class="pack-right">
        <div>
          <h2 class="pack-right-price">₹595</h2>
          <h3 class="pack-right-oldprice">₹795</h3>
        </div>
      </div>
    </div>
  );
};

export default Pack;
