import React, { useState } from "react";
import Navbar from "../../Components/Navigation/Navbar";
import Sidedrawer from "../../Components/Sidedrawer/Sidedrawer";
import Backdrop from "../../Components/Backdrop/Backdrop";
import "./styles/styles.css";
import HeroSection from "../HeroSection";
import Features from "../Features";

function LandingPage() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <div>
      <div className="headerContainer"></div>
      <Navbar click={() => setSideToggle(!sideToggle)} />
      <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <HeroSection />
      <Features />
      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
