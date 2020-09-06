import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import axios from "axios";


import { axiosWithAuth } from "./utils/AxiosWithAuth";


const UserProfile = props => {
    const [userDetails, setUserDetails] = useState({list: []})
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        axiosWithAuth()
        .get('/users/myinfo')
        .then(res => {
            console.log(res);
            setUserDetails(res.data);
        })
        .catch(err => {
                console.log(err);
        })
    }, [])

    return (
        <div className="dashboard">
            <h2>{userDetails.username}</h2>
            {/* <DashNav userDetails={userDetails} />
            <Router>
                <PrivateRoute path="/dashboard" exact>
                    <Listings />
                </PrivateRoute>
                <PrivateRoute path="/dashboard/addlisting">
                    <AddListing userDetails={userDetails} isEditing={isEditing} setIsEditing={setIsEditing}/>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/profile">
                    <Profile userDetails={userDetails} setUserDetails={setUserDetails} isEditing={isEditing} setIsEditing={setIsEditing} />
                </PrivateRoute>
            </Router> */}
        </div>
    )
}

export default UserProfile;