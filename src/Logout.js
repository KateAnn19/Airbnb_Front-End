import React, { useContext, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";

const Logout = () => {
  const { push } = useHistory();

    window.localStorage.removeItem("token");
    window.setTimeout(() => {
        push('/login');
      }, 1000)


  return (<h1>Thanks for Visiting Landbnb</h1>);
};

export default Logout;
