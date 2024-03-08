import React from "react";

export default function Service() {
  return (
    <>
      {/* <!--=====Services Section Start====--> */}
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Services</h2>
            </div>
          </div>
          <div className="row">
            {/* <!--====service item Start===--> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-mobile-alt"></i>
                </div>
                <h4>Web Design</h4>
                <p>Designing websites such as converting figma to html,css.</p>
              </div>
            </div>
            {/* <!--====service item End===--> */}
            {/* <!--====service item Start===--> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-laptop-code"></i>
                </div>
                <h4>Web Development</h4>
                <p>Developing BackEnd Development with PHP and MySql.</p>
              </div>
            </div>
            {/* <!--====service item End===--> */}
            {/* <!--====service item Start===--> */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon">
                  <i className="fa fa-code"></i>
                </div>
                <h4>Website Hosting</h4>
                <p>
                  Hosting my own website with GitHub Pages and 000webhost
                  Website.
                </p>
              </div>
            </div>
            {/* <!--====service item End===--> */}
          </div>
        </div>
      </section>
      {/* <!--=====Services Section End====--> */}
    </>
  );
}
