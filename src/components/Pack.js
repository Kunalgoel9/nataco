import React from "react";
import "./Pack.css";
import { AiFillStar } from "react-icons/ai";
const Pack = ({ heading, savings, saved, mostpopular, price, oldprice }) => {
  return (
    <div class="pack">
      <div class="pack-left">
        {mostpopular && (
          <div class="most-popular">
            <p>
              {" "}
              <AiFillStar />
              MOST POPULAR <AiFillStar />
            </p>
          </div>
        )}
        <h1>{heading}</h1>
        <h2>{savings}</h2>
        <div style={{ display: "flex" }}>
          <p>{saved}</p>
          <p id="highlight">Best Results</p>
        </div>
      </div>
      <div class="pack-right">
        <div>
          <h2 class="pack-right-price">{price}</h2>
          <h3 class="pack-right-oldprice">{oldprice}</h3>
        </div>
      </div>
    </div>
  );
};

Pack.defaultProps = {
  mostpopular: false,
};

export default Pack;
