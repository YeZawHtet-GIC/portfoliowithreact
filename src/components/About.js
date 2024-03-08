// About.js
import React from "react";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I'm <span>Web Developer</span>
                </h3>
                <p>
                  I'm <b> self-taught developer</b> and specialize in
                  programming languages start from the end of 2019. I'm freely
                  welcome new experience related with web development projects
                  from you.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      BirthDay : <span>10 June 2000</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Age : <span>23</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Website :
                      <span>
                        <a href="https://portfoliobyyzh.netlify.app/">
                          portfoliobyyzh
                        </a>
                      </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Email :{" "}
                      <span>
                        <a href="mailto:yezawhtet.web@gmail.com">
                          yezawhtet.web@gmail.com
                        </a>
                      </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Diploma :<br />
                      <span>
                        level 4 Diploma in Computing <br />
                        level 5 Diploma in Computing
                      </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Degree :<br />
                      <span>
                        B.Sc (Hons) Business Computing and Information Systems
                      </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone :<br />
                      <span>
                        09899885101
                        <br />
                        09798117191
                      </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Address : <br />
                      <span>Pyin Oo Lwin,</span>
                      <span>Mandalay, Myanmar</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Freelance : <span>Available</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    {/* <!--https://drive.google.com/file/d/15ZR86-i7xKn11w9bY8LeCW7Wf7oQ8U68/view?usp=drive_link--> */}
                    <a
                      href={require("../img/Ye Zaw Htet CV.pdf")}
                      className="btn  btn-background-slide"
                      download
                    >
                      Download CV
                    </a>
                  </div>
                  <div className="buttons padd-15">
                    <a
                      href="#contact"
                      className="btn  btn-background-slide hire-me"
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
              <div className="skills padd-15" data-aos="fade-up">
                <div className="row">
                  <div className="skill-item padd-15" data-aos="fade-up">
                    <h5>HTML</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "80%" }}
                      ></div>
                      <div className="skill-percent">80%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15" data-aos="fade-up">
                    <h5>CSS</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "75%" }}
                      ></div>
                      <div className="skill-percent">75%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15" data-aos="fade-up">
                    <h5>BOOTSTRAP</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "70%" }}
                      ></div>
                      <div className="skill-percent">70%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15" data-aos="fade-up">
                    <h5>JAVASCRIPT</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "60%" }}
                      ></div>
                      <div className="skill-percent">60%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15" data-aos="fade-up">
                    <h5>PHP</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "70%" }}
                      ></div>
                      <div className="skill-percent">70%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15" data-aos="fade-up">
                    <h5>C# (.Net Windows Forms App)</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "60%" }}
                      ></div>
                      <div className="skill-percent">60%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15" data-aos="fade-up">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {/* <!-- timeline item --> */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i>2018-2019
                        </h3>
                        <h4 className="timeline-title">
                          Level 4 Diploma in Computing
                        </h4>
                        <p className="timeline-text">
                          Started from 2018 and Ended in 2019
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i>2019-2020
                        </h3>
                        <h4 className="timeline-title">
                          Level 5 Diploma in Computing
                        </h4>
                        <p className="timeline-text">
                          Started in 2019 and Ended in 2020
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i>2023
                        </h3>
                        <h4 className="timeline-title">B.Sc(Hons)BCIS</h4>
                        <p className="timeline-text">
                          Still waiting for taking degree
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      {/* <!-- timeline item --> */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i>2018-2019
                        </h3>
                        <h4 className="timeline-title">
                          Level 4 Diploma in Computing
                        </h4>
                        <li>
                          <p className="timeline-text">
                            Created Sudoku Game with C# programing language with
                            my teacher.
                          </p>
                        </li>
                        <li>
                          <p className="timeline-text">
                            Created with Static Research website with HTML, CSS
                          </p>
                        </li>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i>2019-2020
                        </h3>
                        <h4 className="timeline-title">
                          Level 5 Diploma in Computing
                        </h4>
                        <p className="timeline-text">
                          Created Pet food selling website with HTML, CSS,
                          BOOTSTRAP and PHP
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i>2023
                        </h3>
                        <h4 className="timeline-title">
                          B.Sc(Hons) Business Computing and Information Systems
                        </h4>

                        <li>
                          <p className="timeline-text">
                            Created Tutor Finding system with HTML, CSS,
                            BOOTSTRAP, PHP and MySQL
                          </p>
                        </li>

                        <li>
                          <p className="timeline-text">
                            Created Hacking Question and Answer system with
                            HTML, CSS, BOOTSTRAP, PHP and MySQL
                          </p>
                        </li>

                        <li>
                          <p className="timeline-text">
                            Created Tutor Finding system with HTML, CSS,
                            BOOTSTRAP, PHP and MySQL
                          </p>
                        </li>

                        <li>
                          <p className="timeline-text">
                            Created Cleaning Service Website with HTML, CSS,
                            BOOTSTRAP, PHP and MySQL
                          </p>
                        </li>
                        <li>
                          <p className="timeline-text">
                            Created Travelling Website with HTML, CSS,
                            BOOTSTRAP, PHP and MySQL
                          </p>
                        </li>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i>2021 to Now
                        </h3>
                        <h4 className="timeline-title">
                          Created mini projects using JAVASCRIPT
                        </h4>
                        <p className="timeline-text">
                          Music Player
                          <br />
                          Stop Watch
                          <br />
                          Toast Alerm
                          <br />
                          Tabs Menu
                          <br />
                          Hamburger Menu
                          <br />
                          Auto Complete text <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
