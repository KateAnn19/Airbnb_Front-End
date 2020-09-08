import React from "react";
import Register from "./Register";
import AirbnbRegistration from "./AirbnbRegistration";
import Login from "./Login";
import Logout from "./Logout";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Safety from "./Safety";
import MarketPage from "./MarketPage";
import HomePage from "./HomePage";
import About from "./About";
import Contact from "./Contact";
import PrivateRoute from "./utils/PrivateRoute";
import Listings from "./Listings";

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
      <PrivateRoute exact path="/dashboard">
        <Dashboard />
      </PrivateRoute>
     
      <PrivateRoute exact path="/logout">
        <Logout />
      </PrivateRoute>
    </>
  );
}

export default App;
