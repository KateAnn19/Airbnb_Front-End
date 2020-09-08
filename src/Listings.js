import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
import "./Listings.css";

const Listings = ({ setIsEditing, setUserDetails, userDetails, listings }) => {
  const [listing, setListings] = useState([]);
  const [hidden, setHidden] = useState(true);
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  const [profiledetails, setProfileDetails] = useState(userDetails);

  
  
  const UseRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min + 1) + min);
  };
  

  const onDelete = (id) => {
    axiosWithAuth()
      .delete(`/listings/delete/${id}`)
      .then((res) => {
        console.log(res);
        setUserDetails({
          ...userDetails,
          list: userDetails.list.filter((list) => list.id !== id),
        });
        window.location.reload(true);
        push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/myinfo`)
      .then((res) => {
      setListings(res.data.list)
      setProfileDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var properties = listing.map((list) => {
    return (
      <div key={list.listingid} className="cards">
        <div className="info">
          <img
            src="https://images.unsplash.com/photo-1516281717304-181e285c6e58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
          <div className="utils-cont">
          <button className="utils" onClick={() => onDelete(list.listingid)}><i className="fa fa-trash"></i></button>
          </div>
          <div className="utils-cont">
          <button className="utils" onClick={() => {setIsEditing(true);}}><i className="fa fa-pencil"></i></button>
          </div>
          <div className="listing-info">
            <div>
              <i className="fas fa-map-pin ci-listing-card_icontray_wrap__icon"></i>
              {list.streetaddress}
            </div>
            <div>
              <i className="fas fa-city ci-listing-card_icontray_wrap__icon"></i>
              {list.city}
            </div>
            <div>
            <i className="fas fa-key ci-listing-card_icontray_wrap__icon"></i>
              {list.roomtype}
            </div>
            <div>
              <i className="fas fa-heart ci-listing-card_icontray_wrap__icon"></i>
              {list.reviewscorerating ? list.reviewscorerating : 4}
            </div>
            <div>
              <i
                className="fa fa-bath ci-listing-card_icontray_wrap__icon"
                aria-hidden="true"
              ></i>
              {list.bathrooms}
            </div>
            <div>
              <i className="fa fa-bed ci-listing-card_icontray_wrap__icon"></i>
              {list.beds}
            </div>
            <div>
              <i className="fas fa-tv ci-listing-card_icontray_wrap__icon"></i>
              {list.tv === 1 ? "Yes" : "No"}
            </div>
            <div>
              <i className="fas fa-user-circle ci-listing-card_icontray_wrap__icon"></i>
              {list.accomodates}
            </div>
            <div className="price">
              <i className="fas fa-dollar-sign ci-listing-card_icontray_wrap__icon price"></i>
              {list.price === "click for price"
                ? `${UseRandom(50, 100)}.00`
                : list.price}
            </div>
          </div>
        </div>
      </div>
      
    )})
    return(
      <div>
        {properties.length > 0 ? properties : <h2 className="loader">Loading....</h2>}
      </div>
    )

 

};

export default Listings;
