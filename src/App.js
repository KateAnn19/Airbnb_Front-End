import React from 'react';
import Register from './Register'
import AirbnbRegistration from './AirbnbRegistration'
import Login from './Login';
import { Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import Safety from './Safety';
//import './App.css'; 
import MarketPage from './MarketPage';


function App() {

  
  return (
    <>
    {/* <header>
      <h1>landbnb</h1>
    </header> */}
    {/* <div> */}
      <MarketPage/>
      {/* <Safety/> */}

      
        {/* <Link className='RegLink' to='/register'>
          <button color="primary" size="lg"> Register Here </button>
        </Link>
      
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route>
          <AirbnbRegistration/>
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/userprofile'>
          <UserProfile />
        </Route>
      
        <Link className ='RegLink' to='/login'>
          <button color="primary" size="lg">Already a user?</button>
        </Link>
       */}
       
    {/* </div>  */}
    </>
  )
}

export default App;
