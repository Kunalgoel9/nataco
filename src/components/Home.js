import "./Home.css";
import React from "react";
import Header from "./Header";

import PackSection from "./PackSection";
import Button from "./Button";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="inner-container">
        <div className="image-container">
          <img
            style={{ width: "100%", height: "auto", margin: "auto" }}
            src="https://i.pinimg.com/originals/e6/22/de/e622deb81dd76b758d4f98a196ee22d5.jpg"
            alt=""
          />
        </div>

        <div className="details-container">
          <h3>Everyday rinse and reload</h3>
          <p>
            Achieve your dream skin goal with this complete package of skincare
            produts that will rejuvenate your day.
          </p>
          <div className="rating-section">
            <div className="rating">
              {[0, 1, 2, 3, 4].map((obj) => (
                <AiFillStar />
              ))}
            </div>
            <p className="rating-number">4.5</p>
            <p className="reviews">Click to read reviews</p>
          </div>
        </div>
        <div className="price-section">
          <h1>₹899</h1>
          <h2>₹1299</h2>
        </div>

        <PackSection
          heading="1 Months Pack (4 tubes)"
          savings="Savings: ₹200"
          saved="38% Saved"
          mostpopular={true}
          price="₹595"
          oldprice="₹795"
        />
        <PackSection
          heading="3 Months Pack (12 tubes)"
          savings="Savings: ₹100"
          saved="12% Saved"
          mostpopular={false}
          price="₹899"
          oldprice="₹999"
        />
      </div>
      <Button icon={<AiOutlineShoppingCart />} text="ADD TO CART" />
    </div>
  );
};

export default Home;
