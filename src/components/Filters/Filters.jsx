import React from 'react'
import './style.css'
import Filter from '../Filter/Filter';
import './style.css'
import Carousel from '../Carousel';


const Filters = ({ filtersList, selectedFilter, setSelectedFilter }) => {
  
  
  return (
    <div className='filters'>
      <Carousel>
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
        </Carousel>
    </div>
  )
}

export default Filters;