import React from 'react'
import './style.css'


const Card = ({img,name, price, currency}) => {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <p>Price for night: {price} {currency}</p>
    </div>
  )
}

export default Card