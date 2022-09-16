import React from "react";
import "./heading.scss";
export default function Heading(props) {
  return <h1 className="heading">{props.name}</h1>;
}
