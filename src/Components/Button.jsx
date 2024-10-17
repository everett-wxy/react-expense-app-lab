import React from 'react';

const Button = ({ name, type = "button", onClick }) => {
    return (
        <button type={type} onClick={onClick}>{name}</button>
    );
};

export default Button;