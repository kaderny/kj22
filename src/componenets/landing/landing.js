import React from "react";

import "./landing.scss";
import Heading from "../heading/heading";
import portrait from "../../assets/por.png";

function landing() {
  return (
    <div className="landing" id="landing">
      <div className="right">
        <Heading name="About" />
        <div className="landingPresentation">
          <h1>Hello !</h1>
          <h2>I'm Abdelkader Draou </h2>
          <h2>
            and I'm a <span className="grey">Web Developer </span>
          </h2>

          <div className="contactIcons">
            <a
              href="https://www.linkedin.com/in/abdelkader-draou/"
              class="fa fa-linkedin-square"
              aria-hidden="true"
            >
              {" "}
            </a>
            <i
              class="fa fa-github-square"
              aria-hidden="true"
              style={{ color: "black" }}
            ></i>
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
          </div>
          <button className="SeeMywork">My Work</button>
        </div>
      </div>
      <div className="left">
        <div className="myImage">
          <img className="me" src={portrait} alt="me"></img>
        </div>
      </div>
    </div>
  );
}
export default landing;
