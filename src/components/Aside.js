import React from 'react'

export default function Aside() {
  return (
    <>
      {/* <!--====== Aside Start ======--> */}
    <div class="aside">
      <div class="logo">
        <a href="#"><span>D</span>anny</a>
      </div>
      <ul class="nav">
        <li class="lihome" data-section="home">
          <a href="#home" class="nav-link active"><i class="fa fa-home"></i>Home</a>
        </li>
        <li class="liabout" data-section="about">
          <a href="#about" class="nav-link"><i class="fa fa-user"></i>About</a>
        </li>
        <li class="liservices" data-section="services">
          <a href="#services" class="nav-link"><i class="fa fa-list"></i>Services</a>
        </li>
        <li class="liportfolio" data-section="portfolio">
          <a href="#portfolio" class="nav-link"><i class="fa fa-briefcase"></i>Portfolio</a>
        </li>
        <li class="licontact" data-section="contact">
          <a href="#contact" class="nav-link"><i class="fa fa-comments"></i>Contact</a>
        </li>
      </ul>
    </div>
    <div class="nav-toggler">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    {/* <!--====== Aside End ======--> */}
    </>
  )
}
