import React, { useState } from 'react'

const IcecreamForm = (props) => {
    // Destructure the props variables 
    // Form concerns the form input ONLY. Create state variables to keep track of the input change

    const handleSubmit = (e) => {
        e.preventDefault();
        // After submit, update the list AT PARENT! Call/execute that function that is passed down by the parent
    }


    return (
        <fieldset>
            <legend> IcecreamForm.jsx</legend>
            <form onSubmit={handleSubmit}>
           </form>
        </fieldset>
    )
}

export default IcecreamForm