// Contact.js
import React from "react";

function Contact() {
  return (
    <>
      {/* <!--=====Contact Section Start====--> */}
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <h3 className="contact-title padd-15">Have You Any Questions?</h3>
          <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
          <div className="row">
            {/* <!--Contact Info item Start--> */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <h4>Call Us On</h4>
              <p>
                <a href="tel:+959899885101">+959 8998 85101</a>
              </p>
            </div>
            {/* <!--Contact Info item End--> */}
            {/* <!--Contact Info item Start--> */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <h4>Address</h4>
              <p>Pyin Oo Lwin</p>
            </div>
            {/* <!--Contact Info item End--> */}
            {/* <!--Contact Info item Start--> */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>
                <a href="mailto:yezawhtet.web@gmail.com">
                  yezawhtet.web@gmail.com
                </a>
              </p>
            </div>
            {/* <!--Contact Info item End--> */}
            {/* <!--Contact Info item Start--> */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-globe-europe"></i>
              </div>
              <h4>Website</h4>
              <a href="https://trojanportfolio.netlify.app/">
                Trojan Portfolio Website
              </a>
            </div>
            {/* <!--Contact Info item End--> */}
          </div>
          <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15">
            I'M VERY RESPONSE TO MESSAGES
          </h4>
          {/* <!--===== Contact Form ======--> */}
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      name=""
                      className="form-control"
                      id=""
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <button type="submit" className="btn  btn-background-slide">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--=====Contact Section End====--> */}
    </>
  );
}

export default Contact;
