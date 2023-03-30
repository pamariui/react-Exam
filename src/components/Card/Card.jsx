import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'


const Card = ({img,name, price, currency, id}) => {
  return (
    <Link to={`/apartaments/${id}` }>
        <div className='card'>
          <img src={img} alt="" />
          <h4>{name}</h4>
          <p>Price for night: {price} {currency}</p>
        </div>
    </Link>
    
  )
}

export default Card