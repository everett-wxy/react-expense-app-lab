import React from 'react';

const Label = (props) => {
    return (
      <label htmlFor={props.htmlFor}>{props.htmlFor}:</label>
    );
};

export default Label;