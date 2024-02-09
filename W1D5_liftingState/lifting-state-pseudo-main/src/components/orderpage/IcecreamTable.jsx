import React from 'react'

const IcecreamTable = (props) => {
    // Destructure the props variables 
  return (
    <fieldset>
        <legend> IcecreamTable.jsx</legend>
        {/* Display information (from props) in a table or div or list. Whichever way you want to display */}
       
        {/* Inside the .map, each item should have their corresponding delete button. 
          * But after clicking on the button, it should execute a function that is passed down by the parent 
          * to remove an item by idx */}
    </fieldset>
  )
}

export default IcecreamTable