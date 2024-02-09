import React from 'react'

const SiblingDisplay = (props) => {
  const {count} = props;
  return (
    <fieldset style={{backgroundColor: "darkseagreen"}}>
        <legend> SiblingDisplay.jsx</legend>
        <h3>Count at display: {count} </h3>
    </fieldset>
  )
}

export default SiblingDisplay