import React from 'react';

const Button = (props) => {
    return (
        <fieldset>
            <legend>Button.jsx</legend>

            <button onClick={() => console.log("onClick Event!")}>Button</button>
            <input onChange={() => console.log("typed")} />
        </fieldset>
    );
};

export default Button;