import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
//import AddListing from "./AddListing";
import "./Profile.css";
import Listings from "./Listings";
import AddListing from "./AddListing";

const Profile = ({ userDetails, setUserDetails, isEditing, setIsEditing }) => {
  console.log("In profile", userDetails);
 
   
    
    
  return (
    <div className="profile">
        <h2 className={"user-name"}>{userDetails.username}</h2>
        <Listings setUserDetails={setUserDetails} setIsEditing={setIsEditing} userDetails={userDetails}/>
        <h2>Add Listing</h2>
        <button></button>
        <AddListing/>
    </div>
        )
};

export default Profile;
