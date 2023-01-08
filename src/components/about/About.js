import React from "react";
import "./About.css";
import resume from "./Karan Shah - Resume.pdf";

const About = () => {
  return (
    <div className="about mb-4" id="about">
      <p className="about-title">About Me</p>
      <p className="about-subtitle">Introduction</p>
      <div className="about-container container grid">
        <div className="about-data">
          <p className="about-description">
            I'm currently a Junior at Virginia Tech, pursuing a dual degree in
            Computer Science and Mathematics. The courses I'll be taking in the
            second semester of my Junior year at VT are: Computer Systems,
            Linear Algebra, Modern Algebra, Mobile Software
            Development(Android), Intermediate Software Design, and
            Professionalism in Computing. I have lots of interests. Art; I love
            drawing, and I've recently gotten back into it after a long time.
            Programming; I've been into programming since the second I wrote my
            first program. Math; I've been a Math freak since I was 6/7 years
            old. Playing Sports; I've always loved playing different types of
            sports, including but not limited to: football, cricket, basketball,
            swimming, tennis, table tennis, and others. MMA; this is a recent
            interest of mine, it's been about a year and a half since I've
            started watching MMA, and since then, I've learnt to appreciate the
            art of it (even though I'm not learning it myself). Video Games;
            I've played various multiplayer video games like Valorant, Fortnite,
            GTA Vice City, GTA San Andreas, GTA Online, GTA 5, various Call of
            Duties, CS: GO, and many more. I've also played a bunch of online
            browser games throughout my childhood. I was also in the top 10 of
            the world's scoreboard on the educational site 'Mathbuddy' when we
            had that in school, because of my absolute love for mathematics.
          </p>
          <div className="btn-container mb-4">
            <a href={resume} download className="resume-button btn">
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
