import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onValueChange(e.target.value)}
      ></input>
    </>
  );
};

export default Input;
