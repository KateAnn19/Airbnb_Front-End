import React, { useContext, useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import axios from "axios";
import PrivateRoute from "./utils/PrivateRoute";
import ProfileDetails from "./ProfileDetails";
import "./Dashboard.css";

import { axiosWithAuth } from "./utils/AxiosWithAuth";


const Dashboard = () => {
  const [userDetails, setUserDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  console.log(userDetails);
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get("/users/myinfo")
      .then((res) => {
        console.log(res);
        setUserDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="logo-nav-container">
        <div className="logo">
          <i className="fas fa-search-dollar"></i>
          <h1>landbnb</h1>
        </div>
        <nav className="nav-container">
          <Link to="/">Home</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/logout">Logout</Link>
          <a className="user-name" href="#">
            {userDetails.username}
          </a>
          {/* <Link href="https://front-end-1-two.vercel.app/login">Get Started</Link> */}
        </nav>
      </div>
      <div className="dashboard">
        <h1>Welcome,</h1>
      </div>

      <ProfileDetails
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
     
    </>
  );
};

export default Dashboard;
