import React, { useState } from "react";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
import "./AddListing.css";
import { Route, Link, useHistory } from "react-router-dom";

const AddListing = ({ userDetails, values, type, isEditing, setIsEditing}) => {
    const [newListing, setNewListing] = useState({ ...values});
    const [message, setMessage] = useState("")
    const { push } = useHistory();
    

    console.log("This is new Listing", newListing);

    const onSubmitHandler = e => {
        e.preventDefault();
        const req = {
            reviewscoresrating: 4,
            accomodates: parseInt(newListing.accomodates),
            bathrooms: parseInt(newListing.bathrooms),
            beds: parseInt(newListing.beds),
            bedrooms: parseInt(newListing.bedrooms),
            ...newListing
        }
        // PATCH https://kmcgeeka-airbnboptimal.herokuapp.com/listings/listing/{listingid}
        // POST  https://kmcgeeka-airbnboptimal.herokuapp.com/listings/listing/create
        axiosWithAuth()
        .post(`/listings/listing/create`, req)
        .then(res => {
            console.log(res);
            setNewListing({})
            setMessage("✅ Listing Added")
            setTimeout(() => {
                setIsEditing(false);
                window.location.reload(true);
                push("/dashboard");
            }, 1000);
        })
        .catch(err => {
            console.log(err);
            setMessage("❌ An error has occured")
        })

    }

    const onChangeHandler = e => {
        setNewListing({
            ...newListing,
            [e.target.name]: e.target.value
        })
    }

    const onCheckChangeHandler = e => {
        setNewListing({
            ...newListing,
            [e.target.name]: e.target.checked ? 1 : 0
        })
    }

    // https://kmcgeeka-airbnboptimal.herokuapp.com/listings/listing/create

    /*  
  "roomtype": "string",
  "accomodates": 0,
  "bathrooms": 0,
  "city": "string",
  "latitude": 0,
  "longitude": 0,
  "reviewscoresrating": 0,
  "bedrooms": 0,
  "beds": "string",
  "tv": 0,
  "streetaddress": "string",
  "zipcode": 0
  */

    return (
        <div className="add-listing">
        <form onSubmit={onSubmitHandler} >
            <div>
                <h2>Rent Out Your Room</h2>
                <h4 className="message">{message}</h4>
                <label className="TTS_ONLY" htmlFor="roomtype" />
                <input name="roomtype" type="text" placeholder="Room Type" value={newListing.roomtype} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="bathrooms" />
                <input name="bathrooms" type="number" placeholder="Number of Bathrooms" value={newListing.bathrooms} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="bedrooms" />
                <input name="bedrooms" type="number" placeholder="Number of Bedrooms" value={newListing.bedrooms} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="beds" />
                <input name="beds" type="number" placeholder="Number of Beds" value={newListing.beds} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="address" />
                <input name="streetaddress" type="text" placeholder="Addresss" value={newListing.streetaddress} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="accomodates" />
                <input name="accomodates" type="number" placeholder="Accomodates" value={newListing.accomodates} onChange={onChangeHandler} />

                <label className="TTS_ONLY" htmlFor="zipcode" />
                <input name="zipcode" type="number" placeholder="Zipcode" value={newListing.zipcode} onChange={onChangeHandler} />
                <label htmlFor="tv">TV:</label>
                <input name="tv" type="checkbox" onChange={onCheckChangeHandler} />
                <label className="TTS_ONLY" htmlFor="city" />
                <input  name="city" type="text" placeholder="City" onChange={onChangeHandler} value={newListing.city}>
                </input>
            </div>
            <button className="add_listing_form" type="submit">Submit</button>
        </form>
        </div>
    )
}

export default AddListing;