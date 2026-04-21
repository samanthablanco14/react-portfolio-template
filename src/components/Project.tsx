import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Teaching Portfolio</h1>

      <div className="projects-grid">
        <div className="project">
          <h2>Philosophy of Learning</h2>
          <p>
            Statement reflecting my perspective on how meaningful learning
            happens and how students build understanding.
          </p>
          <div className="project-buttons">
            <a
              href={`${process.env.PUBLIC_URL}/philosophy-of-learning.pdf`}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Document
            </a>
          </div>
        </div>

        <div className="project">
          <h2>Teaching Philosophy</h2>
          <p>
            Statement reflecting my perspective on how meaningful teaching
            happens and how it shapes my lesson designs.
          </p>
          <div className="project-buttons">
            <a
              href={`${process.env.PUBLIC_URL}/teaching-philosophy.pdf`}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Document
            </a>
          </div>
        </div>

        <div className="project">
          <h2>Final Lesson Plan</h2>
          <p>
            Final lesson plan on Introduction to Automation developed as part of
            my attended course Foundations of Engineering and Computing Teaching
            and Learning.
          </p>
          <div className="project-buttons">
            <a
              href={`${process.env.PUBLIC_URL}/final-lesson-plan.pdf`}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Document
            </a>
          </div>
        </div>

        <div className="project">
          <h2>Artifacts from the Teaching Event</h2>
          <p>
            Supporting materials, resources, and artifacts created for the
            teaching event.
          </p>
          <div className="project-buttons multi-buttons">
            <a
              href={`${process.env.PUBLIC_URL}/assessment-artifact.pdf`}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Assessment
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/teaching-slides.pdf`}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Presentation
            </a>
          </div>
        </div>

        <div className="project">
          <h2>Reflections of the Teaching Event</h2>
          <p>
            Reflection on what the experience meant to me and what I learned.
          </p>
          <div className="project-buttons">
            <a
              href={`${process.env.PUBLIC_URL}/reflection-on-the-process.pdf`}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Document
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
