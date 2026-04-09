import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Expected Fall 2026"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              M.S. in Electrical Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Florida International University
            </h4>
            <p>
              Focused on power and energy systems, with growing interests in
              sustainability and STEM education.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - Dec 2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Customer Order Specialist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Philips Healthcare
            </h4>
            <p>
              Managed end-to-end customer order processes, improved operational
              efficiency, and supported workflow execution across imaging
              systems.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2022 - Jan 2024"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Sales Operations Planner
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Philips Healthcare
            </h4>
            <p>
              Coordinated multimillion-dollar deals, supported commercial and
              operational teams, and drove process improvement through KPI
              analysis and workflow optimization.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2020 - Apr 2022"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Product Configuration Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Philips Healthcare
            </h4>
            <p>
              Configured medical equipment solutions, supported quotations and
              negotiations, and helped align technical accuracy with customer
              and business requirements.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2018 - Mar 2020"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Quality Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Philips Healthcare
            </h4>
            <p>
              Conducted risk assessments, supported corrective actions, and
              contributed to quality compliance and continuous improvement
              initiatives.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2019"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              B.S. in Electronics Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Universidad Católica Santa María la Antigua
            </h4>
            <p>
              Built the technical foundation for my engineering career and
              professional growth.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2015 - Nov 2016"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Information Technology Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              La Floresta Insurances
            </h4>
            <p>
              Provided hardware and software support, resolved technical issues,
              and supported day-to-day IT operations.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
