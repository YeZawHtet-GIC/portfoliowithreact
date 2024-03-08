import React from "react";

export default function Aside() {
  return (
    <>
      {/* <!--====== Aside Start ======--> */}
      <div className="aside">
        <div className="logo">
          <a href="#">
            <span>D</span>anny
          </a>
        </div>
        <ul className="nav">
          <li className="lihome" data-section="home">
            <a href="#home" className="nav-link active">
              <i className="fa fa-home"></i>Home
            </a>
          </li>
          <li className="liabout" data-section="about">
            <a href="#about" className="nav-link">
              <i className="fa fa-user"></i>About
            </a>
          </li>
          <li className="liservices" data-section="services">
            <a href="#services" className="nav-link">
              <i className="fa fa-list"></i>Services
            </a>
          </li>
          <li className="liportfolio" data-section="portfolio">
            <a href="#portfolio" className="nav-link">
              <i className="fa fa-briefcase"></i>Portfolio
            </a>
          </li>
          <li className="licontact" data-section="contact">
            <a href="#contact" className="nav-link">
              <i className="fa fa-comments"></i>Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-toggler">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* <!--====== Aside End ======--> */}
    </>
  );
}
