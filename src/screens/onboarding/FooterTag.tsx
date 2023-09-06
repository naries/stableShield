import React from "react";

function FooterTag() {
  return (
    <div className="footertagContainer">
      <div>
        <img
          src={require("../../img/copyright.png")}
          alt=""
          width={20}
          height={20}
        />
      </div>
      <div> &nbsp; &nbsp; Stable Shield Solution</div>
    </div>
  );
}

export default FooterTag;
