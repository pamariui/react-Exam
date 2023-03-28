import React, {useState, useEffect} from 'react'
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import { getAppartaments } from '../../utils/api';
import './style.css'

const Homepage = () => {

  const [apartament,setApartament] = useState(null);
 
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
    },2000)
  },[]);

  return (
    <>
    
      <Main>
        <div className='card-container'>
          { apartament &&
              apartament.map((el,i) => {
                return (
                  <Card 
                  key={i} 
                  img={el.imageUrl} 
                  name={el.name} 
                  price={el.price} 
                  currency= {el.priceCurrency}/>
                )
              })
          }
        </div>
      </Main>
      <Footer />
    </>
  )
}

export default Homepage;