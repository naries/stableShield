import React from "react";
import "../screens/onboarding/styles/styles.css";
function LatestNews() {
  return (
    <div className="latestNewsContainer">
      <div className="latestNewImage">
        <img
          src={require("../img/engineer.png")}
          alt=""
          width="100%"
          height="100%"
        />
      </div>
      <div className="latestNewsContent">
        <div className="latestNews">Latest News</div>
        <div className="trendingContainer">Trending News Headline</div>
        <div className="trendingContents">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
          faucibus id sed pellentesque. Quam interdum lacinia eu pretium. Elit
          euismod... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fermentum faucibus id sed pellentesque. Quam interdum lacinia eu
          pretium. Elit euismod... Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ferment...
        </div>
        <button className="continueButton">KEEP READING</button>
      </div>
    </div>
  );
}

export default LatestNews;
