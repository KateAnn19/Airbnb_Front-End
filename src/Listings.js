import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
import "./Listings.css";

const Listings = ({ setIsEditing, setUserDetails, userDetails }) => {
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
      {listings.map((list) => {
        return (
          <div key={list.listingid} className="cards">
            <div className="info">
              <img
                src="https://images.unsplash.com/photo-1516281717304-181e285c6e58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
              <button className="utils" onClick={() => onDelete(list.listingid)}><i class="fa fa-trash"></i></button>
              <button className="utils" onClick={() => {setIsEditing(true);}}><i class="fa fa-pencil"></i></button>
              <div className="listing-info">
                <div>
                  <i class="fas fa-map-pin ci-listing-card_icontray_wrap__icon"></i>
                  {list.streetaddress}
                </div>
                <div>
                  <i class="fas fa-city ci-listing-card_icontray_wrap__icon"></i>
                  {list.city}
                </div>
                <div>
                <i class="fas fa-key ci-listing-card_icontray_wrap__icon"></i>
                  {list.roomtype}
                </div>
                <div>
                  <i class="fas fa-heart ci-listing-card_icontray_wrap__icon"></i>
                  {list.reviewscorerating ? list.reviewscorerating : 4}
                </div>
                <div>
                  <i
                    class="fa fa-bath ci-listing-card_icontray_wrap__icon"
                    aria-hidden="true"
                  ></i>
                  {list.bathrooms}
                </div>
                <div>
                  <i class="fa fa-bed ci-listing-card_icontray_wrap__icon"></i>
                  {list.beds}
                </div>
                <div>
                  <i class="fas fa-tv ci-listing-card_icontray_wrap__icon"></i>
                  {list.tv === 1 ? "Yes" : "No"}
                </div>
                <div>
                  <i class="fas fa-user-circle ci-listing-card_icontray_wrap__icon"></i>
                  {list.accomodates}
                </div>
                <div>
                  <i class="fas fa-dollar-sign ci-listing-card_icontray_wrap__icon price"></i>
                  {list.price === "click for price"
                    ? `${UseRandom(50, 100)}.00`
                    : list.price}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="graphics">
        <button
          className="view"
          onClick={() => (hidden ? setHidden(false) : setHidden(true))}
        >
          View Pricing Algorythm
        </button>
        {hidden ? (
          ""
        ) : (
          <div className="ds">
            <h3>New York</h3>
            <iframe
              width="900"
              height="800"
              frameborder="0"
              scrolling="no"
              src="//plotly.com/~popkdodge/36.embed"
            ></iframe>

            <h3>Los Angeles</h3>
            <iframe
              width="900"
              height="800"
              frameborder="0"
              scrolling="no"
              src="//plotly.com/~popkdodge/38.embed"
            ></iframe>

            <h3>Washington D.C.</h3>
            <iframe
              width="900"
              height="800"
              frameborder="0"
              scrolling="no"
              src="//plotly.com/~popkdodge/40.embed"
            ></iframe>

            <h3>Chicago</h3>
            <iframe
              width="900"
              height="800"
              frameborder="0"
              scrolling="no"
              src="//plotly.com/~popkdodge/42.embed"
            ></iframe>

            <h3>Boston</h3>
            <iframe
              width="900"
              height="800"
              frameborder="0"
              scrolling="no"
              src="//plotly.com/~popkdodge/44.embed"
            ></iframe>

            <h3>San Fransisco</h3>
            <iframe
              width="900"
              height="800"
              frameborder="0"
              scrolling="no"
              src="//plotly.com/~popkdodge/46.embed"
            ></iframe>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Listings;
