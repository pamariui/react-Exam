import React, { useState, useEffect }from 'react'
import { useParams } from 'react-router'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Spinner from '../../components/Spinner/Spinner';
import { getAppartaments } from '../../utils/api'
import './style.css'


const Apartaments = () => {

    const [apartament,setApartament] = useState(null);
    const {id} = useParams() ;

    useEffect(() => {
        const getApartment = async () => {
          let data = await getAppartaments(IDBFactory);
          if (data instanceof Error) {
            console.log(data);
          } else {
            setApartament(data[id-1]);
            
          }
        };
        getApartment();
      }, [id]);

    if(!apartament) {
        return <Spinner />
    }
    return (
        <>
            <Header logoText='airbnb' colorClass='red'/>
            <Main>
                <div className='container'>
                  <div className='left-side'>
                    <img src={apartament.imageUrl} alt='' />
                  </div>
                  <div className="right-side">
                    <h1>{apartament.name}</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque officia quae labore saepe ipsa hic deleniti facilis. Accusamus obcaecati cupiditate, impedit enim tenetur sapiente odio sequi neque id cumque, eaque fugit itaque dolor eum, sint incidunt nesciunt dolorem debitis repudiandae blanditiis quia mollitia tempore doloremque! Voluptas quis aliquam eaque. Dolores, quisquam harum tempora, dolor officiis quaerat provident numquam excepturi consectetur ex voluptates quis, culpa recusandae voluptate sequi vel. Architecto praesentium maxime, odio quos quas ipsa quod et eum, ducimus eligendi tempore numquam recusandae sequi commodi expedita deleniti pariatur dolorum eius? Distinctio beatae eveniet, dolore fugit minus nihil ex quod dignissimos qui, voluptas, maiores aut optio modi provident doloremque consectetur vero rem? Atque deleniti, perspiciatis praesentium nihil nisi commodi fugiat ipsum voluptates minima. Placeat non quisquam id, illo quibusdam saepe perspiciatis dicta eius similique exercitationem dolorum, perferendis velit nobis aliquam illum eos laboriosam veritatis voluptatibus impedit officia? Eligendi, iure nesciunt.</p>
                    <div className='location'>
                        <h4>Location</h4>
                        <p>Latitude: <span>{apartament.lat}</span>  longitude <span>{apartament.lng}</span></p>
                    </div>
                    <p className='price'>
                      Price starts from: <span>{apartament.price}{apartament.priceCurrency}</span> per night.
                    </p>
                  </div>
                </div>
            </Main>
            <Footer copyright='React exam MP'/>
        </>
        
  );
}

export default Apartaments