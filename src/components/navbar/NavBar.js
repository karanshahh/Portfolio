import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav
      class="navbar navbar-dark bg-dark navbar-expand-lg px-3 
                shadow p-3 mb-5"
    >
      <a class="navbar-brand" href="index.html">
        Portfolio
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#home">
              <i class="fa-solid fa-house"></i> Home
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#about">
              <i class="fa-solid fa-user"></i> About
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#skills">
              <i class="fa-solid fa-bolt-lightning"></i> Skills
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#projects">
              <i class="fa-solid fa-laptop-code"></i> Projects
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#research">
              <i class="fa-solid fa-file"></i> Research
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#contact">
              <i class="fa-solid fa-phone"></i> Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
