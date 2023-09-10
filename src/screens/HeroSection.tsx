import React from "react";
import "../screens/onboarding/styles/styles.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
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
        <button
          onClick={() => navigate("register")}
          className="register_button"
        >
          Register
        </button>
        <button onClick={() => navigate("login")} className="login_button">
          Login
        </button>
      </div>
      <div>
        <div className="mouseContainer">
          <img src={require("../img/mouse.png")} height={40} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
