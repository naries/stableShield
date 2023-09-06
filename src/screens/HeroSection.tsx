import React from "react";
import "../screens/onboarding/styles/styles.css";

function HeroSection() {
  return (
    <div className="heroSectionContainer">
      <h1 className="heroSection_text">
        Welcome to
        <br />
        <span className="heroSection_text_two">Cooperative Silo</span>
        <br />
        <span className="heroSection_text_two">
          All-in-one Cooperative management Platform
        </span>
      </h1>
      <div className="buttonContainer">
        <button className="register_button">Register</button>
        <button className="login_button">Login</button>
      </div>
      <div>
        <div className="mouseContainer">
          <img src={require("../img/mouse.png")} height={40} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
