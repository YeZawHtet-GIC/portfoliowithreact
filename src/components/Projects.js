// Projects.js
import React from "react";
//custom css
import "../css/projects.css";
//images
import Tutor from "../img/tutor.PNG";
import Tutor1 from "../img/tutor1.PNG";
import Travel from "../img/travelling_register.PNG";
import Travel1 from "../img/travelling_login.PNG";
import Travel2 from "../img/travelling_home.PNG";
import Travel3 from "../img/travelling_newtrip.PNG";
import Cyber from "../img/cybertech-web-home.PNG";
import Cyber1 from "../img/cybertech-web-learn.PNG";
import Cyber2 from "../img/cybertech-web-library.PNG";
import Cyber3 from "../img/cybertech-web-admin1.PNG";
import Pos from "../img/pos-login-form.PNG";
import Pos1 from "../img/pos-receipt-page.PNG";
import Pos2 from "../img/pos-sale-page.PNG";
import Pos3 from "../img/pos-sale-list-page.PNG";
function Projects() {
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading">
              <h2>My last Projects :</h2>
            </div>
          </div>
          <div className="portfolio-heading">
            <h4>Tutor Finding System Website</h4>
          </div>
          <div className="row" style={{ borderRadius: "20px" }}>
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Tutor}
                    alt="tutor image"
                  />
                </div>
              </div>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Tutor1}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px", marginBottom: "20px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Tutor}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Tutor1}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <!--====== portfolio item End ======--> */}
          </div>
          {/* <!-- Website 2 --> */}
          <hr style={{ margin: "30px 0" }} />
          <div className="portfolio-heading">
            <h4>Travelling Website</h4>
          </div>
          <div className="row" style={{ borderRadius: "20px" }}>
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Travel}
                    alt="Travelling Image"
                  />
                </div>
              </div>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Travel1}
                    alt="Travelling Image"
                  />
                </div>
              </div>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px", marginBottom: "20px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Travel2}
                    alt="Travelling Booking Manage Image"
                  />
                </div>
              </div>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Travel3}
                    alt="travelling New Trip Data Insert image"
                  />
                </div>
              </div>
            </div>
            {/* <!--====== portfolio item End ======--> */}
          </div>
          {/* <!-- Website 2 --> */}
          {/* <!-- Website 3 --> */}
          <hr style={{ margin: "30px 0" }} />
          <div className="portfolio-heading">
            <h4>Hacking Training Website</h4>
          </div>
          <div className="row" style={{ borderRadius: "20px" }}>
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Cyber}
                    alt=""
                  />
                </div>
              </div>
              <h4 style={{ textAlign: "center" }}>Home Page</h4>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Cyber1}
                    alt=""
                  />
                </div>
              </div>
              <h4 style={{ textAlign: "center" }}>Learn Page</h4>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px", marginBottom: "20px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Cyber2}
                    alt=""
                  />
                </div>
              </div>
              <h4 style={{ textAlign: "center" }}>Library Page</h4>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Cyber3}
                    alt=""
                  />
                </div>
              </div>
              <h4 style={{ textAlign: "center" }}>Admin Subject Manage Page</h4>
            </div>
            {/* <!--====== portfolio item End ======--> */}
          </div>
          {/* <!-- Website 3 --> */}
          {/* <!-- Windows Forms App --> */}
          <hr style={{ margin: "30px 0" }} />
          <div className="portfolio-heading">
            <h4>PhoneHub POS Windows Forms App</h4>
          </div>
          <div className="row" style={{ borderRadius: "20px" }}>
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Pos}
                    alt="login form image"
                  />
                </div>
              </div>
              <h4 style={{ textAlign: "center" }}>POS login Form</h4>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Pos1}
                    alt="receipt form image"
                  />
                </div>
              </div>
              <h4 style={{ textAlign: "center" }}>POS receipt Form</h4>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px", marginBottom: "20px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Pos2}
                    alt="sale form image"
                  />
                </div>
              </div>
              <h4 style={{ textAlign: "center" }}>POS sales Form</h4>
            </div>
            {/* <!--====== portfolio item End ======--> */}
            {/* <!--====== portfolio item start ======--> */}
            <div
              className="portfolio item padd-15 col-sm-4"
              style={{ paddingTop: "10px" }}
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img
                    style={{ minHeight: "20vh", maxWidth: "30vw" }}
                    src={Pos3}
                    alt="sale list image"
                  />
                </div>
              </div>
              <h4 style={{ textAlign: "center" }}>POS sale history Form</h4>
            </div>
            {/* <!--====== portfolio item End ======--> */}
          </div>
          {/* <!-- Website 2 --> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
