import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  const [isAsideActive, setIsAsideActive] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleAside = () => {
    setIsAsideActive(!isAsideActive);
  };

  const handleAsideClick = () => {
    setIsAsideActive(false);
  };

  const handleLinkClick = (section) => {
    setActiveLink(section);
  };

  return (
    <>
      {/* <!--====== Aside Start ======--> */}
      <div
        className={`aside ${isAsideActive ? "active" : ""}`}
        onClick={handleAsideClick}
      >
        <div className="logo">
          <Link to="/">
            <span>D</span>anny
          </Link>
        </div>
        <ul className="nav">
          <li className="lihome" data-section="home">
            <Link
              to="Home"
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => handleLinkClick("home")}
            >
              <i className="fa fa-home"></i>Home
            </Link>
          </li>
          <li className="liabout" data-section="about">
            <Link
              to="About"
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              onClick={() => handleLinkClick("about")}
            >
              <i className="fa fa-user"></i>About
            </Link>
          </li>
          <li className="liservices" data-section="services">
            <Link
              to="Services"
              className={`nav-link ${
                activeLink === "services" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("services")}
            >
              <i className="fa fa-list"></i>Services
            </Link>
          </li>
          <li className="liportfolio" data-section="portfolio">
            <Link
              to="projects"
              className={`nav-link ${
                activeLink === "portfolio" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("portfolio")}
            >
              <i className="fa fa-briefcase"></i>Projects
            </Link>
          </li>
          <li className="licontact" data-section="contact">
            <Link
              to="contact"
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
              onClick={() => handleLinkClick("contact")}
            >
              <i className="fa fa-comments"></i>Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-toggler" onClick={toggleAside}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* <!--====== Aside End ======--> */}
    </>
  );
}
