import React from "react";
import "./Projects.css";
import { ProjectData } from "./ProjectData";

const Projects = () => {
  return (
    <div className="proj-content mb-4" id="projects">
      <div className="proj-main-title">
        <p>Projects</p>
      </div>
      <div className="proj-box">
        {ProjectData.map(({ id, title, description, link }) => {
          return (
            <a href={`${link}`} target="_blank" rel="noreferrer" className="proj-link zoom">
              <div className="proj-card mb-5 shadow p-3 mb-5">
                <p className="proj-title">{title}</p>
                <p className="proj-description">{description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
