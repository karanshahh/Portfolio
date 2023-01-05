import React from "react";
import "./Research.css";
import { ResearchData } from "./ResearchData";

const Research = () => {
  return (
    <div className="research-content mb-4" id="researchects">
      <div className="research-main-title" id="research">
        <p>Research Papers</p>
      </div>
      <div className="research-box">
        {ResearchData.map(({ id, title, description, link }) => {
          return (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="research-link zoom"
            >
              <div className="research-card mb-5 shadow p-3 mb-5">
                <p className="research-title">{title}</p>
                <p className="research-description">{description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Research;
