import React from "react";
import Profile from "../img/profile.png";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <>
      {/* <!--===Home Section Start===--> */}
      <section className="home section" id="home">
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hello, my name is
                <span className="owner-name">Ye Zaw Htet</span>
              </h3>
              <h3 className="my-profession">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "I'm Junior Web Developer",
                    1000, 
                    "I'm  Frondend Developer",
                    1000,
                    "I'm  Backend Developer",
                    1000,
                    "I'm  Web Designer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={10}
                  repeat={Infinity}
                />
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
