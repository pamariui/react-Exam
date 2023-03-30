import React from 'react'
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import './style.css'

const Privacy = () => {
  return (
    <>
        <Header logoText='Help center' colorClass={'black'}/>
        <Main>
          <div className='container'>
            <Button 
                  bcolor={'#DC0D63'} 
                  title='Log in or sign up'
                  border='none'
                  radius='5px'
                  color='#FFFFFF'
                  padding={'10px 150px'}
              />
            
            <h1>Airbnb privacy</h1>
              <img src="https://images.unsplash.com/photo-1615925982634-c7cb5b71822b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80" alt="privacy" />
            <h2>Privacy policy</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolorum qui libero vel ab beatae culpa harum quia, natus assumenda doloremque iure debitis adipisci dignissimos tempora? Consectetur quia minima laboriosam?</p>
          </div>
        </Main>
        <Footer copyright='React exam MP'/>
    </>
  )
}

export default Privacy;