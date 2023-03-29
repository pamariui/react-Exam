import React from 'react'
import './style.css'
import Filter from '../Filter/Filter';
import './style.css'


const Filters = ({ filtersList, selectedFilter, setSelectedFilter }) => {
  
  return (
    <div className='filters'>
        {
          filtersList.map((el,i) => (
            <Filter  
              icon={el.icon} 
              title={el.title} 
              key={i} 
              onClick={() => setSelectedFilter(i)} 
              clas={i === selectedFilter && 'selected'}
            />
          ))
        }
    </div>
  )
}

export default Filters;