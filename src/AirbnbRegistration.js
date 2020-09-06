import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
let initialState = {
  "username": "",
  "password": "",
  "primaryemail":""
};
const AirbnbRegistration = () => {
  const [values, setValues] = useState(initialState);
  console.log(values);
  const { push } = useHistory();
  const changeHandler = (ev) => {
    ev.persist();
    setValues({
      ...values,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://kmcgeeka-airbnboptimal.herokuapp.com/createnewuser", values)
      .then((res) => {
        console.log(res);
        push('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="user-form">
      <form>
        <label htmlFor="username">
          User Name
          <input
            id="username"
            onChange={changeHandler}
            type="text"
            name="username"
            placeholder="username"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            onChange={changeHandler}
            type="password"
            name="password"
            placeholder="password"
          />
        </label>
        <label htmlFor="primaryemail">
          Primary Email
          <input
            id="primaryemail"
            onChange={changeHandler}
            type="text"
            name="primaryemail"
            placeholder="primaryemail"
          />
        </label>
        <button onClick={handleSubmit} type="submit">
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
};
export default AirbnbRegistration;