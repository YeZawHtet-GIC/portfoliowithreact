import React from "react";
import Profile from "../img/profile.png";
export default function Hero() {
  return (
    <>
      {/* <!--===Home Section Start===--> */}
      <section className="home section" id="home">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hello, my name is{" "}
                <span className="owner-name">Ye Zaw Htet</span>
              </h3>
              <h3 className="my-profession">
                I' m a <span className="typing">Web Developer</span>
              </h3>
              <p>
                I had Studied at NVL University and got 2 Diploma and
                B.Sc(Hons)BCIS Bachelor Degree from University of Central
                Lancashire at UK. I'm developing websites starting from 2021.
                Welcome projects from you...
              </p>
              <a href="#contact" className="btn hire-me btn-background-slide">
                Hire Me
              </a>
            </div>
            <div className="home-img padd-15" style={{ borderRadius: "5rem" }}>
              <img src={Profile} alt="Profile" />
            </div>
          </div>
        </div>
      </section>
      {/* <!--===Home Section End===--> */}
    </>
  );
}
