import React from 'react';
import Register from './Register'
import AirbnbRegistration from './AirbnbRegistration'
import Login from './Login';
import { Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import Safety from './Safety';
//import './App.css'; 
import MarketPage from './MarketPage';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';


function App() {
  return (
    <>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/safety">
        <Safety />
      </Route>
      <Route exact path="/market">
        <MarketPage />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      
      {/* <header>
      <h1>landbnb</h1>
    </header> */}

      {/* <Link className='RegLink' to='/register'>
          <button color="primary" size="lg"> Register Here </button>
        </Link> */}

      

      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/register-airbnb">
        <AirbnbRegistration />
      </Route>
      {/* <Route exact path='/login'>
          <Login />
        </Route> */}
      <Route exact path="/userprofile">
        <UserProfile />
      </Route>

      {/* <Link className ='RegLink' to='/login'>
          <button color="primary" size="lg">Already a user?</button>
        </Link> */}
    </>
  );
}

export default App;
