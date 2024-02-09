import React from 'react'

const SiblingCounter = (props) => {
  const {handleCount} = props;

  return (
    <fieldset style={{backgroundColor: "powderblue"}}>
    <legend> SiblingCounter.jsx</legend>
    <button onClick={props.handleCount} > Edit Count!</button>

</fieldset>
  )
}

export default SiblingCounter