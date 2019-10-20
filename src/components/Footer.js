import React from "react";
import { Link } from "gatsby";

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

  return (
    <footer>
      <div className="footer-top">
        <div className="section-one">
          <p>LOGO</p>
          <p>Coalition of International Students</p>
          <div className="social-link">Social</div>
          <div className="social-link">Social</div>
          <div className="social-link">Social</div>
          <div className="social-link">Social</div>
          <p>RM 225J, Student Pavilion,</p>
          <p>400 E Orange St,</p>
          <p>Tempe, Arizona 85281.</p>
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
      <div className="footer-bottom">
        <p>
          Arizona State University © Coalition of International Students{" "}
          {date.getFullYear()}. All rights reserved
        </p>
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
    </footer>
  );
};

export default Footer;
