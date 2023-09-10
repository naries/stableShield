import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Link as DomLink } from "react-router-dom";

const Navbar = ({ click }: any) => {
  const [navbarColor, setNavbarColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 1.5) {
        setNavbarColor("black");
      } else {
        setNavbarColor("white");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="navbar">
      <div className="navigation_logo">
        <img
          src={require("../../img/logo.png")}
          alt="myLogo"
          className="myLogo"
        />
      </div>
      {/* {links} */}
      <ul className="navbar_links">
        <li>
          <Link
            to="home"
            className="nav_link"
            style={{ color: navbarColor }}
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
            to="about"
            className="nav_link"
            style={{ color: navbarColor }}
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="help"
            className="nav_link"
            style={{ color: navbarColor }}
            smooth={true}
            spy={true}
            offset={-350}
            duration={500}
          >
            Help
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="nav_link"
            style={{ color: navbarColor }}
            smooth={true}
            spy={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li>
          <DomLink
            to="register"
            className="nav_link"
            style={{ color: navbarColor }}
          >
            Register
          </DomLink>
        </li>
      </ul>
      {/* {Hamburger-Menu} */}
      <div className="hamburger_menu" onClick={click}>
        <div style={{ background: navbarColor }}></div>
        <div style={{ background: navbarColor }}></div>
        <div style={{ background: navbarColor }}></div>
      </div>
    </nav>
  );
};

export default Navbar;
