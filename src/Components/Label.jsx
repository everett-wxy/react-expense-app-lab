import React from "react";

const Label = (props) => {
  return <label htmlFor={props.htmlFor}>{props.htmlFor}{props.item}</label>;
};

export default Label;
