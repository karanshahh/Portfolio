import React from "react";

const Socials = () => {
  return (
    <div className="home-socials">
      <a
        href="https://www.instagram.com/karan_1206/"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://github.com/karanshahh/"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/karanshahh/"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="mailto:karanshah.cs@gmail.com"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa-solid fa-envelope"></i>
      </a>
    </div>
  );
};

export default Socials;
