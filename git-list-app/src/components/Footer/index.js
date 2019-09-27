import React from "react";
import logo from "../../logo.svg";

const Footer = () => {
  return (
    <footer>
      <p>
        create by
        <a
          className="App-link"
          href="https://www.linkedin.com/in/lev-saltsyn-1467ab15b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lev Saltsyn
        </a>
      </p>
      <img src={logo} className="App-logo" alt="logo" />
    </footer>
  );
};

export default Footer;
