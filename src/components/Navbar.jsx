import React, { useState } from "react";
import "./Navbars.css";
import logo from "./logo_nav.png";
import MobileNav from "./mobileNav/MobileNav";
import { Link } from "react-router-dom";
import { HashLink as LinkTo } from "react-router-hash-link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = (e) => {
    e.stopPropagation();
    setOpenMenu(!openMenu);

  };
  

  return (
    <div className="main-container">
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}  />
      <nav className="nav-wrapper" style={{ position: "sticky" }}>
        <div className="nav-content">
          <div className="logo">
            {" "}
            <img className="img" src={logo} alt="logo" />
          </div>
          {/* <p className='logo-name'>
            Shahzee-Coder
           </p> */}
          <ul>
            <li>
              <LinkTo
                className="menu-item"
                smooth
                to="/#home"
                
              >
                Home
              </LinkTo>
            </li>
            <li>
              <LinkTo className="menu-item" smooth to="/#skill" >
                Skills
              </LinkTo>
            </li>
            <li>
              <LinkTo className="menu-item" smooth to="/#skill" >
                Work Experience
              </LinkTo>
            </li>
            <li>
              <LinkTo className="menu-item" smooth to="/#contact" >
                Contact
              </LinkTo>
            </li>

            <button className="nav-btn" onClick={() => {}}>
              About Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }} 
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
