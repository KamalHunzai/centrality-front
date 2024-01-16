import React from 'react'

function Boxes(props) {
  return (
    <div>
        <input type='checkbox'>{props.input}</input>
        <label>{props.label}</label>
    </div>
  )
}

export default Boxes