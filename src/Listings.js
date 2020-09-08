import React, { useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
import "./Listings.css";

const Listings = ({setIsEditing, setUserDetails, userDetails}) => {
  const [listings, setListings] = useState([]);
  const [hidden, setHidden] = useState(true);
  const { push } = useHistory();


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
        push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  useEffect(() => {
    axiosWithAuth()
      .get(`/listings/listings`)
      .then((res) => {
        console.log(res);
        setListings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="listings">
      <h2>Available Houses</h2>
      {listings.map((list) => {
        return (
            <div key={list.listingid} className="cards">
            <div className="left">
                <button onClick={() => onDelete(list.listingid)}>Delete</button>
                <button className="edit" onClick={() => {setIsEditing(true)}}>Edit</button>
            </div>
         
            <div className="info">
              <h3>
                <img
                  src="https://image.flaticon.com/icons/svg/2942/2942933.svg"
                  alt=""
                />
                {list.streetaddress}
              </h3>
              <h3>
                <img
                  src="https://image.flaticon.com/icons/svg/888/888026.svg"
                  alt=""
                />
                {list.city}
              </h3>
              <h3>
                <img
                  src="https://www.flaticon.com/premium-icon/icons/svg/3183/3183157.svg"
                  alt=""
                />
                {list.roomtype}
              </h3>
              <h3>
                <img
                  src="https://www.flaticon.com/premium-icon/icons/svg/3119/3119410.svg"
                  alt=""
                />
                {list.reviewscorerating ? list.reviewscorerating : 4}
              </h3>
              <h3>
                <img
                  src="https://image.flaticon.com/icons/svg/2857/2857279.svg"
                  alt=""
                />
                {list.bathrooms}
              </h3>
              <h3>
                <img
                  src="https://image.flaticon.com/icons/svg/3030/3030336.svg"
                  alt=""
                />
                {list.beds}
              </h3>
              <h3>
                <img
                  src="https://image.flaticon.com/icons/svg/562/562384.svg"
                  alt=""
                />
                {list.tv === 1 ? "Yes" : "No"}
              </h3>
              <h3>
                <img
                  src="https://image.flaticon.com/icons/svg/554/554724.svg"
                  alt=""
                />
                {list.accomodates}
              </h3>
              <h3>
                <img
                  src="https://image.flaticon.com/icons/svg/631/631180.svg"
                  alt=""
                />
                {list.price === "click for price"
                  ? `${UseRandom(50, 100)}.00`
                  : list.price}
              </h3>
            </div>
          </div>
        );
      })}
          <div className="graphics">
                <button className="view" onClick={() => hidden ? setHidden(false) : setHidden(true)}>View Pricing Algorythm</button>
                {
                    hidden ? "" :
                        <div className="ds">
                            <h3>New York</h3>
                            <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plotly.com/~popkdodge/36.embed"></iframe>

                            <h3>Los Angeles</h3>
                            <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plotly.com/~popkdodge/38.embed"></iframe>

                            <h3>Washington D.C.</h3>
                            <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plotly.com/~popkdodge/40.embed"></iframe>

                            <h3>Chicago</h3>
                            <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plotly.com/~popkdodge/42.embed"></iframe>

                            <h3>Boston</h3>
                            <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plotly.com/~popkdodge/44.embed"></iframe>

                            <h3>San Franscisco</h3>
                            <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plotly.com/~popkdodge/46.embed"></iframe>
                        </div>
                }
            </div>
        
    </div>
  );
};

export default Listings;