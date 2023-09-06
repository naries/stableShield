import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="left_footer_container">
        <div className="logoContainer">
          <div>
            <img src={require("../../img/logo.png")} width={200} alt="" />
          </div>
          <div className="followContainer">Follow Us</div>
          <div className="socialLinks">
            <img
              src={require("../../img/instagram.png")}
              alt=""
              width={25}
              height={25}
            />
            <img
              src={require("../../img/twitter.png")}
              alt=""
              width={25}
              height={25}
            />
            <img
              src={require("../../img/facebook.png")}
              alt=""
              width={25}
              height={25}
            />
            <img
              src={require("../../img/youtube.png")}
              alt=""
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className="quickLinks">
          <div>Quick Links</div>
          <div>About Us</div>
          <div>Privacy Policy</div>
          <div>Help</div>
          <div>Contact Us</div>
        </div>
      </div>
      <div className="right_container">
        Terms and conditions apply. We never send out unsolicited emails. You
        can unsubscribe at any time. To help us improve the emails we send you
        we collect information such as when they are opened and what you clicked
        on. For more information on how we use your personal details please
        refer to our Privacy Policy and Cookie Terms and conditions apply. We
        never send out unsolicited emails. You can unsubscribe at any time. To
        help us improve the emails we send you we collect information such as
        when they are opened and what you clicked on. For more information on
        how we use your personal details please refer to our Privacy Policy and
        Cookie Policy.Policy.
      </div>
    </div>
  );
}

export default Footer;
