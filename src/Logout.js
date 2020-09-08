import React, { useContext, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";

const Logout = () => {
  const { push } = useHistory();

    window.localStorage.removeItem("token");
    window.setTimeout(() => {
        push('/login');
      }, 1000)


  return (<div className="logout"><h1>Thanks for Visiting Landbnb</h1></div>);
};

export default Logout;
