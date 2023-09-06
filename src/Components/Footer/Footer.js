import React, { useContext } from "react"
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="imgCon">
          <img src={require("../../img/logo.png")} alt="" />
        </div>
        <div className="listItems">
          <ul className="lists">
            <li>
              <Link
                className="footerLink"
                to="home"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="footerLink"
                to="about"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="footerLink"
                to="portfolio"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="footerLink"
                to="testimonials"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                Testimonial
              </Link>
            </li>
            <li>
              <Link
                className="footerLink"
                to="contact"
                smooth={true}
                spy={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <br />
        <hr />
        <br />
        <div className="copyright">
          <div>
            <small>Copyright © Egbetayo 2022.</small>
          </div>
          <div className="icons-container">
            <ul className="iconsbottom">
              <a href="https://github.com/hezhykeyhel">
                <li>
                  <i class="fab fa-github"></i>
                </li>
              </a>
              <a href="https://instagram.com/hezhykeyhel">
                <li>
                  <i class="fab fa-instagram"></i>
                </li>
              </a>
              <a href="https://linkedin.com/in/hezhykeyhel">
                <li>
                  <i class="fab fa-linkedin"></i>
                </li>
              </a>
              <a href="https://twitter.com/hezhykeyhel">
                <li>
                  <i class="fab fa-twitter"></i>
                </li>
              </a>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
