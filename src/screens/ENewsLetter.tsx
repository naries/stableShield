import React, { useState } from "react";
import "../screens/onboarding/styles/styles.css";
function ENewsLetter() {
  const [search, setSearch] = useState("");
  return (
    <div className="newsletter_main_container">
      <div className="newsLetterContainer">
        <div className="latestNews">E-News Letter</div>
        <div className="newsLetterText">
          Subscribe to our newsletter to get the latest information right in
          your mail.
        </div>
      </div>
      <div>
        <div className="searchContents">
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Enter your email address"
          />
          <button className="continueButton">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default ENewsLetter;
