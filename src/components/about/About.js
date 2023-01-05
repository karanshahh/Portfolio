import React from "react";
import Info from "./Info";
import "./About.css";
const About = () => {
  return (
    <div className="about mb-4" id="about">
      <p className="about-title">About Me</p>
      <p className="about-subtitle">Short Introduction</p>
      <div className="about-container container grid">
        <div className="about-data">
          <Info />
          <p className="about-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nisi orci, fringilla maximus nibh vel, commodo lacinia
            felis. Phasellus in mauris et lorem vehicula lacinia sit amet et
            lectus. Donec eleifend nulla a vulputate aliquam. Aliquam interdum,
            lorem sed scelerisque venenatis, lacus dui eleifend diam, vel
            feugiat tellus sem in purus. In at purus lectus. In hac habitasse
            platea dictumst. Phasellus vel dui nec tortor euismod finibus at ac
            erat.
          </p>
          <div className="btn-container mb-4">
            <a download="" className="resume-button btn">
              <i class="fa-solid fa-download"></i> Download Resume
            </a>
            <a
              href="https://digitalcard-karan.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="dig-card-btn btn"
            >
              <i class="fa-solid fa-eye"></i> View Digital Card
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
