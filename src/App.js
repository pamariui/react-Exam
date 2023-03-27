import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Header from './components/Header';


import Homepage from './pages/Homepage';


const  App = () => {

  return (
    <> 
      <Header/>
      <Routes>
       
            <Route exact path='/'  element = {<Homepage/>}/>
        </Routes>
    </>
  );
}

export default App;
