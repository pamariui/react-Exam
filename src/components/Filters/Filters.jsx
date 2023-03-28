import React, { useState } from 'react'
import './style.css'
import Filter from '../Filter/Filter';
import { filtersList } from './filter-list';
import './style.css'


const Filters = () => {

  const [selectedFilter, setSelectedFilter] = useState(null)
  return (
    <div className='filters'>
        {
          filtersList.map((el,i) => (
            <Filter  
              icon = {el.icon} 
              title={el.title} 
              key={i} 
              onClick={()=> {
                setSelectedFilter(i); console.log(`Selecting ${i}`)}} 
              clas={i === selectedFilter && 'selected'}/>
          ))
        }
    </div>
  )
}

export default Filters;