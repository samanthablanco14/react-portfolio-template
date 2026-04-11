import React from "react";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Teaching Portfolio</h1>

      <div className="projects-grid">
        <div className="project">
          <a
            href={`${process.env.PUBLIC_URL}/philosophy-of-learning.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Philosophy of Learning</h2>
          </a>
          <p>
            Statement reflecting my perspective on how meaningful learning
            happens and how students build understanding through engagement,
            reflection, and application.
          </p>
        </div>

        <div className="project">
          <a
            href={`${process.env.PUBLIC_URL}/teaching-philosophy.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Teaching Philosophy</h2>
          </a>
          <p>
            I believe meaningful learning happens when students can connect
            ideas to real problems, reflect on their thinking, and actively
            engage with the learning process. In engineering education, this
            means creating opportunities for students to move beyond
            memorization and instead develop understanding through application,
            discussion, and purposeful problem solving.
          </p>
        </div>

        <div className="project">
          <a
            href={`${process.env.PUBLIC_URL}/final-lesson-plan.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Lesson Plan Documents I & II</h2>
          </a>
          <p>
            Final lesson plan materials developed as part of my teaching and
            learning portfolio.
          </p>
        </div>

        <div className="project">
          <a
            href={`${process.env.PUBLIC_URL}/teaching-event-artifacts.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Artifacts from the Teaching Event</h2>
          </a>
          <p>
            Supporting materials, resources, and artifacts created for the
            teaching event.
          </p>
        </div>

        <div className="project">
          <a
            href={`${process.env.PUBLIC_URL}/teaching-event-assessment.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Assessment of the Teaching Event</h2>
          </a>
          <p>
            Assessment materials and evaluation components related to the
            teaching event.
          </p>
        </div>

        <div className="project">
          <a
            href={`${process.env.PUBLIC_URL}/reflection-on-the-process.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Reflections on the Process</h2>
          </a>
          <p>
            Reflection on what the experience meant to me and what I learned
            throughout the semester.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
