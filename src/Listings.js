import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
import "./Listings.css";

const initialListing = {
  roomtype: "string",
  accomodates: 0,
  bathrooms: 0,
  city: "string",
  latitude: 0,
  longitude: 0,
  reviewscoresrating: 0,
  bedrooms: 0,
  beds: "string",
  tv: 0,
  streetaddress: "string",
  zipcode: 0,
};

const Listings = ({ setIsEditing, setUserDetails, userDetails, listings }) => {
  const [listing, setListings] = useState([]);
  const [hidden, setHidden] = useState(true);
  const { push } = useHistory();
  const [loading, setLoading] = useState(false);
  const [profiledetails, setProfileDetails] = useState(userDetails);
  const [edit, setEdit] = useState(false);
  const [listingToEdit, setListingToEdit] = useState(initialListing);
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);

 

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
        setListings(res.data.list);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();
    var req = {
      ...listingToEdit,
      "latitude": 0,
      "longitude": 0,
      "reviewscoresrating": 0
    };
    axiosWithAuth()
      .patch(`/listings/listing/${listingToEdit.listingid}`, req)
      .then((res) => {
        setMessage("✅ Listing Updated");
        window.location.reload(true);
        push("/dashboard");
        // setTimeout(() => {
        //   setIsEditing(false);
        //   window.location.reload(true);
        //   push("/dashboard");
        // }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setMessage("❌ An error has occured");
      });
  }

  var properties = listing.map((list) => {
    return (
      <div key={list.listingid} className="cards">
        <div className="info">
          <img
            src="https://images.unsplash.com/photo-1516281717304-181e285c6e58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
          <div className="utils-cont">
            <button className="utils" onClick={() => onDelete(list.listingid)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
          <div className="utils-cont">
            <button
              className="utils"
              onClick={() => {
                setListingToEdit(list);
                setEdit(!edit);
              }}
            >
              <i className="fa fa-pencil"></i>
            </button>
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
            {!edit && (
              <div className="price">
                <i className="fas fa-dollar-sign ci-listing-card_icontray_wrap__icon price"></i>
                {list.price === "click for price"
                  ? `${UseRandom(50, 100)}.00`
                  : list.price}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      {properties.length ? (
        properties
      ) : (
        <h2 className="loader">Future Listings....</h2>
      )}
      {edit && (
        <div className="cont">
          <form onSubmit={handleSubmit} className="editingform">
            <div>
              <label />
              <input
                name="roomtype"
                type="text"
                value={listingToEdit.roomtype}
                onChange={(e) => {
                  setListingToEdit({
                    ...listingToEdit,
                    roomtype: e.target.value,
                  });
                }}
              />
              <label className="" htmlFor="bathrooms" />
              <input
                name="bathrooms"
                type="number"
                value={listingToEdit.bathrooms}
                onChange={(e) => {
                  setListingToEdit({
                    ...listingToEdit,
                    bathrooms: e.target.value,
                  });
                }}
              />

              <label className="" htmlFor="bedrooms" />
              <input
                name="bedrooms"
                type="number"
                value={listingToEdit.bedrooms}
                onChange={(e) => {
                  setListingToEdit({
                    ...listingToEdit,
                    bedrooms: e.target.value,
                  });
                }}
              />

              <label className="" htmlFor="beds" />
              <input
                name="beds"
                type="number"
                value={listingToEdit.beds}
                onChange={(e) => {
                  setListingToEdit({ ...listingToEdit, beds: e.target.value });
                }}
              />

              <label className="" htmlFor="address" />
              <input
                name="streetaddress"
                type="text"
                value={listingToEdit.streetaddress}
                onChange={(e) => {
                  setListingToEdit({
                    ...listingToEdit,
                    streetaddress: e.target.value,
                  });
                }}
              />

              <label className="" htmlFor="accomodates" />
              <input
                name="accomodates"
                type="number"
                placeholder="Accomodates"
                value={listingToEdit.accomodates}
                onChange={(e) => {
                  setListingToEdit({
                    ...listingToEdit,
                    accomodates: e.target.value,
                  });
                }}
              />

              <label className="" htmlFor="zipcode" />
              <input
                name="zipcode"
                type="number"
                value={listingToEdit.zipcode}
                onChange={(e) => {
                  setListingToEdit({
                    ...listingToEdit,
                    zipcode: e.target.value,
                  });
                }}
              />
              {checked ? (
                <label className="tvlabel checked" htmlFor="tv"></label>
              ) : (
                <label className="tvlabel" htmlFor="tv">
                  TV:
                </label>
              )}
              <input
                name="tv"
                type="checkbox"
                onChange={(e) => {
                  setListingToEdit({ ...listingToEdit, tv: e.target.value });
                }}
              />
              <label className="" htmlFor="city" />
              <input
                name="city"
                type="text"
                value={listingToEdit.city}
                onChange={(e) => {
                  setListingToEdit({ ...listingToEdit, city: e.target.value });
                }}
              />
            </div>
            <button
              
              className="add_listing_form"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Listings;
