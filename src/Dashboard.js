import React, { useContext, useEffect, useState } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import axios from "axios";
import PrivateRoute from "./utils/PrivateRoute";
import ProfileDetails from "./ProfileDetails";
import "./Dashboard.css";

import { axiosWithAuth } from "./utils/AxiosWithAuth";
import AddListing from "./AddListing";


const Dashboard = () => {
  const [userDetails, setUserDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [count, setCount] = useState(0);
  const { push } = useHistory();
  console.log(count)

  console.log("Inside dashboard", userDetails)

  useEffect(() => {
    axiosWithAuth()
      .get("/users/myinfo")
      .then((res) => {
        console.log(res);
        setUserDetails(res.data);
        setCount(res.data.list.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

   function add(){
     setIsEditing(!isEditing);
   }

  return (
    <>
      <div className="logo-nav-container">
        <div className="logo">
          <i className="fas fa-search-dollar"></i>
          <h1>landbnb</h1>
        </div>
        <nav className="nav-container">
        <a className="name" href="#">{userDetails.username}</a>
        <a className="name" href="#">You have {count ? count : "+"} listings</a>
          <Link to="/logout">Logout</Link>
        </nav>
      </div>
      <img className="dashboard-banner" alt="plane" src="https://images.unsplash.com/photo-1599126492701-4a1833776831?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img>
      <div className="main-wrapper">
        <i onClick={add} className="material-icons">+</i>
      </div>

      {isEditing ? <AddListing setCount={count} setIsEditing={setIsEditing}/> : null}
      
      <ProfileDetails
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        listings={userDetails.list}
      />
     
    </>
  );
};

export default Dashboard;
