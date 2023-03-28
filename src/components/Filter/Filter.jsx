import React from 'react';
import './style.css'

const Filter = ({icon, title , onClick, clas}) => {
  return (
    <div className={`filter-item ${clas}`} onClick={onClick}>
        <div className="icon">
            {icon}
        </div>
        <p className="title">
            {title}
        </p>
    </div>
  )
}

export default Filter