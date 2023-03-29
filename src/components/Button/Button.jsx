import React from 'react'
import './style.css'

const Button = ({
    title,
    bcolor,
    color, 
    className, 
    onClick, 
    radius,
    border,
    padding
}) => {

    const btnStyle = {
        backgroundColor: bcolor,
        borderRadius: radius,
        border: border,
        color: color,
      };
  return (
    <button 
        style={btnStyle}
        className={className}
        onClick={onClick}
    >
        {title}
    </button>
  )
}

export default Button