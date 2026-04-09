import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faGear,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Power and Energy Systems",
  "Energy Generation",
  "Sustainability",
  "Electrical Engineering",
  "NEC Familiarity",
];

const labelsSecond = [
  "Process Improvement",
  "Quality Engineering",
  "Risk Assessment",
  "Project Coordination",
  "Cross-Functional Collaboration",
  "Workflow Automation",
  "SAP",
  "Salesforce",
  "Advanced Excel",
];

const labelsThird = [
  "STEM Education",
  "Teaching Development",
  "Lesson Planning",
  "Student Support",
  "Technical Communication",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faBolt} size="3x" />
            <h3>Power, Energy & Sustainability</h3>
            <p>
              I am building my expertise in power and energy systems with a
              growing interest in energy generation, sustainability, and
              resilient engineering solutions that create practical impact for
              people and communities.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Focus areas:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faGear} size="3x" />
            <h3>Operations, Quality & Process Improvement</h3>
            <p>
              With 6 years of industry experience in healthcare, I have worked
              across quality engineering, product configuration, supply chain,
              and sales operations, strengthening my skills in reliability,
              process improvement, and cross-functional problem solving.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Core skills:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faChalkboardUser} size="3x" />
            <h3>STEM Education & Teaching Development</h3>
            <p>
              I am also developing my teaching skills with the goal of
              contributing to the STEM community through education, supporting
              students, and making technical concepts more accessible and
              meaningful.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Teaching interests:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
