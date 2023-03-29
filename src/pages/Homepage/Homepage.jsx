import React, {useState, useEffect} from 'react'
import Card from '../../components/Card';
import Filters from '../../components/Filters';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import { getAppartaments } from '../../utils/api';
import './style.css'
import { filtersList } from '../../components/Filters/filter-list';
import Spinner from '../../components/Spinner/Spinner';
import Header from '../../components/Header';

const Homepage = () => {

  const [apartament,setApartament] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const getAllApartaments = async () => {
    let data = await getAppartaments();
    if(data instanceof Error) {
      console.log(data);
    } else {
      setApartament(data);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getAllApartaments();
    },1500)
  },[]);

  const filteredApartments = selectedFilter !== null ? apartament.filter(apartment => apartment.id === selectedFilter) : apartament;

  return (
    <>
      <Header logoText='airbnb' colorClass='red'/>
      <Filters 
        filtersList={filtersList}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Main>
        <div className='card-container'>
          {
            
              filteredApartments ?
                filteredApartments.map((el,i) => {
                  return (
                    <Card 
                    key={i} 
                    img={el.imageUrl} 
                    name={el.name} 
                    price={el.price} 
                    currency= {el.priceCurrency}/>
                  )
                }) : <Spinner style={{backgroundColor: 'red'}}/>
          }
        </div>
      </Main>
      <Footer copyright='React exam MP'/>
    </>
  )
}

export default Homepage;