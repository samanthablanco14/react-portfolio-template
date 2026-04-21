import React from "react";
import "../assets/styles/Contact.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Feel free to reach out for professional opportunities, collaboration,
            or academic connections.
          </p>

          <div className="contact-links">
            <a
              href="mailto:blanco.samantha@outlook.com"
              className="contact-link"
            >
              <EmailIcon />
              <span>Email Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/samantha-blanco14/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <LinkedInIcon />
              <span>LinkedIn Profile</span>
            </a>

            <a
              href={`${process.env.PUBLIC_URL}/resume-samantha-blanco.pdf`}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <DescriptionIcon />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
