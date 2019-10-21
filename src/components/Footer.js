import React from "react";
import { Link } from "gatsby";
import Image from "./image";

const Footer = () => {
  const date = new Date();

  const links = [
    { id: 1, name: "link1", url: "https://www.google.com" },
    { id: 2, name: "link2", url: "https://www.google.com" },
    { id: 3, name: "link3", url: "https://www.google.com" },
    { id: 4, name: "link4", url: "https://www.google.com" },
    { id: 5, name: "link5", url: "https://www.google.com" },
    { id: 6, name: "link6", url: "https://www.google.com" },
  ];

  const addressLine1 = "RM 225J, Student Pavilion,";
  const addressLine2 = "400 E Orange St,";
  const addressLine3 = "Tempe, Arizona 85281.";

  return (
    <footer>
      <div className="footer-top-container">
        <div className="footer-top">
          <div className="section-one">
            <div className="left-section">
              <Image />
            </div>
            <div className="right-section">
              <p>Coalition of International Students</p>
              <div className="social-link">Social</div>
              <div className="social-link">Social</div>
              <div className="social-link">Social</div>
              <div className="social-link">Social</div>
              <p>{addressLine1}</p>
              <p>{addressLine2}</p>
              <p>{addressLine3}</p>
            </div>
          </div>
          <div className="section-two">
            <h1>Section title</h1>
            {links.map(link => (
              <Link key={link.id} to={link.url}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="section-three">
            <h1>Section title</h1>
            {links.map(link => (
              <a key={link.id} href={link.url}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className="footer-bottom">
          <div className="left-section">
            <p>
              Arizona State University © Coalition of International Students{" "}
              {date.getFullYear()}. All rights reserved
            </p>
          </div>
          <div className="right-section">
            <p>
              Built by{" "}
              <a
                href="https://www.dickwyn.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                dickwyn
              </a>{" "}
              and the collaborators. This code is available under the{" "}
              <a
                href="https://github.com/asucis/v3/blob/dev/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT License
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
