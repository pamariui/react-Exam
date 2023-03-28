import React from 'react'
import { Route, Routes} from 'react-router-dom';
import Filters from './components/Filters';
import Header from './components/Header';


import Homepage from './pages/Homepage';


const  App = () => {

  return (
    <> 
      <Header/>
      <Filters />
      <Routes>
            <Route exact path='/'  element = {<Homepage/>}/>
        </Routes>
        
    </>
  );
}

export default App;
