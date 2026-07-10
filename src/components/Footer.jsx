import React from "react";

const Footer = ({ config }) => {
  return (
    <footer className="footer fade-in">
      <div>
        {config.name} · {config.title}
      </div>
      <div>{config.contact.location}</div>
    </footer>
  );
};

export default Footer;