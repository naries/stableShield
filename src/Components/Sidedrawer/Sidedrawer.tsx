import "./Sidedrawer.css";
import { Link } from "react-scroll";

const Sidedrawer = ({ show, click }: any) => {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer_links" onClick={click}>
        <li>
          <Link
            to="home"
            spy={true}
            onClick={click}
            offset={-100}
            smooth={true}
            duration={500}
            // style={{ color: "#fff" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            offset={-100}
            onClick={click}
            smooth={true}
            duration={500}
            // style={{ color: "#fff" }}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="help"
            spy={true}
            onClick={click}
            offset={-100}
            smooth={true}
            duration={500}
            // style={{ color: "#fff" }}
          >
            Help
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            onClick={click}
            offset={-100}
            smooth={true}
            duration={500}
            // style={{ color: "#fff" }}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="register"
            spy={true}
            offset={-100}
            smooth={true}
            onClick={click}
            duration={500}
            // style={{ color: "#fff" }}
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidedrawer;
