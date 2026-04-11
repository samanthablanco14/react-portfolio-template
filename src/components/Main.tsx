import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div
        className="about-section"
        style={{
          backgroundImage: `linear-gradient(rgba(247, 241, 245, 0.18), rgba(247, 241, 245, 0.18)), url(${process.env.PUBLIC_URL}/hero-bg.png)`,
        }}
      >
        <div className="content">
          <div className="social_icons">
            <a
              href="https://www.linkedin.com/in/samantha-blanco14/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Samantha Blanco</h1>
          <p>Electrical Engineering Graduate Student | Electronic Engineer</p>

          <div className="mobile_social_icons">
            <a
              href="https://www.linkedin.com/in/samantha-blanco14/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="image-wrapper">
          <img
            src={`${process.env.PUBLIC_URL}/samantha-hero.jpg`}
            alt="Samantha Blanco"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
