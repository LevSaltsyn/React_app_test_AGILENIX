import React from "react";
import logo from "../../logo.svg";
import "./style/Footer.css"

const Footer = () => {
  return (
    <footer>
      <p>
        created by
        <a
          className="Footer-link"
          href="https://www.linkedin.com/in/lev-saltsyn-1467ab15b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lev Saltsyn
        </a>
      </p>
      <img src={logo} className="Footer-logo" alt="logo" />
    </footer>
  );
};

export default Footer;
