import React from 'react';
import Register from './Register'
import AirbnbRegistration from './AirbnbRegistration'
import Login from './Login';
import { Route, Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import Safety from './Safety';
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
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/register-airbnb">
        <AirbnbRegistration />
      </Route>
      <Route exact path="/userprofile">
        <UserProfile />
      </Route>
    </>
  );
}

export default App;
