import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setsticky(true) : setsticky(false);
    });
  }, []);

  const [mobileMenu, setmobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark" : ""}`}>
      <Link to="home" smooth={true} offset={0} duration={500}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="home" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} offset={-226} duration={500}>
            Features
          </Link>
        </li>
        <li>
          <Link to="pricing" smooth={true} offset={-220} duration={500}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-220} duration={500}>
          Contact us
          </Link>
        </li>
        <li className="a">
          <Link
            to=""
            smooth={true}
            offset={-210}
            duration={500}
            className="btn"
          >
            Sign in
          </Link>
        </li>
      </ul>
      <img src={menu} className="menu" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
