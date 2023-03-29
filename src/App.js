import React from 'react'
import { Route, Routes} from 'react-router-dom';

//pages import
import Homepage from './pages/Homepage';
import Privacy from './pages/Privacy';


const  App = () => {

  return (
    <> 
      <Routes>
            <Route exact path='/'  element = {<Homepage/>}/>
            <Route exact path='/privacy'  element = {<Privacy/>}/>
        </Routes>
        
    </>
  );
}

export default App;
