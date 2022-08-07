import React from "react";
import "./Card.css";

//reusable wrapper component
function Card(props) {
  //anything we receive as a classname from outside is added to this string
  const classes = "card " + props.className;

  //we use one special prop which is built into react, which every component receives
  //childen is a reserved name and the value of this special children prop will always be the content
  //between opening and closing tags of your custom component
  return <div className={classes}>{props.children}</div>;
}

export default Card;
