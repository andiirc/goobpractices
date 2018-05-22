import React, {Component} from 'react'

const Input = ({type, borderColor = 'blue', label}) => (
  <div>
    <label htmlFor={label}> {label} </label>
    <input type={type} style={ {borderColor, display: 'block'} } name={label} placeholder={label.toUpperCase()}></input>
  </div>
)

export default Input
