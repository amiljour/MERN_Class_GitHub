import React from 'react'

// Update when receiving new props or updating state

const InputDisplay = (props) => {
    const {flavor, quantity} = props;

    return (
        <fieldset>
            <legend>InputDisplay.jsx</legend>
            <div>
                <p> Flavor: {flavor}</p>
                <p> Quantity: {quantity}</p>
            </div>
        </fieldset>
    )
}

export default InputDisplay