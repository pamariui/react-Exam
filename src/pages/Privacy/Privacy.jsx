import React from 'react'
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

const Privacy = () => {
  return (
    <>
        <Header logoText='Help center' colorClass={'black'}/>
        <Main>
            <Button 
                bcolor={'#DC0D63'} 
                title='Log in or sign up'
                border='none'
                radius='5px'
                color='#FFFFFF'
            />
        </Main>
        <Footer copyright='React exam MP'/>
    </>
  )
}

export default Privacy;