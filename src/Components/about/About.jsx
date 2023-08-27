import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container grid">
        <img src={Image} alt="" className="about-img" />

        <div className="about-data grid">
          <div className="about-info">
            <p className="about-description">
              I am Bolby Doe, web developer from London, United Kingdom. I have
              rich experience in web site design and building and customization,
              also I am good at WordPress.
            </p>

            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about-skills grid">
            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-names">Development</h3>

                <span className="skills-number">90%</span>
              </div>

              <div className="skills-bar">
                <span className="skills-percentage development"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-names">UI/UX design</h3>

                <span className="skills-number">80%</span>
              </div>

              <div className="skills-bar">
                <span className="skills-percentage ui-design"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-titles">
                <h3 className="skills-names">Photography</h3>

                <span className="skills-number">60%</span>
              </div>

              <div className="skills-bar">
                <span className="skills-percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
}

export default About;
