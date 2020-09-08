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
        <Listings setUserDetails={setUserDetails} setIsEditing={setIsEditing} userDetails={userDetails}/>
    </div>
        )
};

export default Profile;
