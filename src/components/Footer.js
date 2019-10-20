import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer>
      <div className="credits">
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
