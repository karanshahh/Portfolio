import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <h1 className="footer-title">Karan</h1>
        <ul class="footer-socials navbar-nav ms-auto">
          <li class="footer-social nav-item active">
            <a class="nav-link" href="#home">
              <i class="fa-solid fa-house"></i>
            </a>
          </li>
          <li class="footer-social nav-item active">
            <a class="nav-link" href="#about">
              <i class="fa-solid fa-user"></i>
            </a>
          </li>
          <li class="footer-social nav-item active">
            <a class="nav-link" href="#skills">
              <i class="fa-solid fa-bolt-lightning"></i>
            </a>
          </li>
          <li class="footer-social nav-item active">
            <a class="nav-link" href="#projects">
              <i class="fa-solid fa-laptop-code"></i>
            </a>
          </li>
          <li class="footer-social nav-item active">
            <a class="nav-link" href="#research">
              <i class="fa-solid fa-file"></i>
            </a>
          </li>
          <li class="footer-social nav-item active">
            <a class="nav-link" href="#contact">
              <i class="fa-solid fa-phone"></i>
            </a>
          </li>
        </ul>

        <span className="footer-copyright"></span>
      </div>
    </footer>
  );
};

export default Footer;
