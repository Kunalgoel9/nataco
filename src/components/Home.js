import "./Home.css";
import React from "react";
import Header from "./Header";

import PackSection from "./PackSection";

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
        </div>
        <div className="price-section">
          <h1>₹899</h1>
          <h2>₹1299</h2>
        </div>
        <PackSection />
      </div>
    </div>
  );
};

export default Home;
