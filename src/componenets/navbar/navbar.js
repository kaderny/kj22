import React, { UseState } from "react";
import "./navbar.scss";

function navbar() {
  const handleClick = () => setisMobile(!isMobile);
  const [isMobile, setisMobile] = UseState(false);

  return (
    <nav className="nav">
      <a className="logo" href="#landing">
        Abdelkader Draou
      </a>

      <ul
        className={isMobile ? "navLinksMobile" : "navLinksDesktop"}
        onClick={() => setisMobile(false)}
      >
        <li>
          <a href="#landing">About</a>
        </li>
        <li>
          <a href="#projects">Work</a>
        </li>
        <li>
          <a href="#contact"> Contact</a>
        </li>
      </ul>
      <button className="hamburger" onClick={() => handleClick()}>
        <i className={isMobile ? "fas fa-times" : "fas fa-bars"} />
      </button>
    </nav>
  );
}

export default navbar;
