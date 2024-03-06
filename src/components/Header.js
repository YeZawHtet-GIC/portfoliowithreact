// Header.js
import React from "react";

function Header() {
  return (
    <>
      {/* <!--===Home Section Start===--> */}
      <section class="home section" id="home">
        <div class="container">
          <div class="row">
            <div class="home-info padd-15">
              <h3 class="hello">
                Hello, my name is <span class="owner-name">Ye Zaw Htet</span>
              </h3>
              <h3 class="my-profession">
                I' m a <span class="typing">Web Developer</span>
              </h3>
              <p>
                I had Studied at NVL University and got 2 Diploma and
                B.Sc(Hons)BCIS Bachelor Degree from University of Central
                Lancashire at UK. I'm developing websites starting from 2021.
                Welcome projects from you...
              </p>
              <a href="#contact" class="btn hire-me btn-background-slide">
                Hire Me
              </a>
            </div>
            <div class="home-img padd-15" style={{ borderRadius: "5rem" }}>
              <img src="img/profile.png" alt="Profile" />
            </div>
          </div>
        </div>
      </section>
      {/* <!--===Home Section End===--> */}
    </>
  );
}

export default Header;
