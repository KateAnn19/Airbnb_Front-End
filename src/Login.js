import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import * as yup from "yup";
import formSchema from "./FormSchemaLogin";
import formSchemaRegis from "./FormSchema";
import { isCompositeComponent } from "react-dom/test-utils";

//login
const initialFormValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};
//login

//register
const initialFormRegisValues = {
  "username": '',
  "primaryemail": '',
  "password": '',
}

const initialFormRegisErrors = {
  "username": '',
  "password": '',
  "primaryemail": '',
}
//register

//login and register
const initialDisabled = true;

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  //register
  const [formRegisValues, setFormRegisValues] = useState(initialFormRegisValues);
  const [formRegisErrors, setFormRegisErrors] = useState(initialFormRegisErrors);
  
  
  //register
  const [user, setUser] = useState("");
  const { push } = useHistory();

  //login form
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const changeHandler = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        console.log(valid);
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((e) => {
        setFormErrors({
          ...formErrors,
          [name]: e.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(formValues.username);
    console.log(formValues.password);
    e.preventDefault();
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://kmcgeeka-airbnboptimal.herokuapp.com/login",
        `grant_type=password&username=${formValues.username}&password=${formValues.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        //console.log(res);
        //console.log("Login -> res.data", res.data.payload);
        localStorage.setItem("token", res.data.access_token);
        push("/dashboard");
      })
      .catch((error) => {
        setIsError(!isError);
        setMessage("Username or password is incorrect. Please try again.");
      });
  };

  const onChange = (evt) => {
    evt.persist();
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
    const { name, value } = evt.target;
    changeHandler(name, value);
  };
  //login form

  //create account form 
  const handleRegisSubmit = evt => {
    console.log(evt)
    evt.preventDefault();
    const newUser = {
      username: formRegisValues.username.trim(),
      primaryemail: formRegisValues.primaryemail.trim(),
      password: formRegisValues.password.trim(),
    }
    console.log(newUser);
   axios.post('https://kmcgeeka-airbnboptimal.herokuapp.com/createnewuser', newUser)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.access_token);
      push("/dashboard");
    })
    .catch(err => {
      console.log(err);
    })
  }

  const changeHandlerRegis = (name, value) => {
    yup 
      .reach(formSchemaRegis, name)
      .validate(value)
      .then((valid) => {
        console.log(valid)
        setFormRegisErrors({
          ...formRegisErrors,
          [name]: '',
        });
      })
      .catch((e) => {
        setFormRegisErrors({
          ...formRegisErrors, 
          [name]: e.errors[0],
        });
      });
    setFormRegisValues({
      ...formRegisValues,
      [name]: value,
    });
  };
  const onChangeRegis = evt => {
    setFormRegisValues({...formRegisValues, [evt.target.name]: evt.target.value})
    const { name, value } = evt.target
    changeHandlerRegis(name,value)
  }
  //create account form

  function slideFunc() {
    setToggle(!toggle);
  }

  return (
    <>
      <div className="logo-nav-container">
        <div className="logo">
          <i className="fas fa-search-dollar"></i>
          <h1>landbnb</h1>
        </div>
        <nav className="nav-container">
          <Link to="/">Home</Link>
          <Link to="/market">Overview</Link>
          <Link to="/safety">Safety</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Get Started</Link>
          {/* <Link href="https://front-end-1-two.vercel.app/login">Get Started</Link> */}
        </nav>
      </div>

      <div className="sign-in-images">
        <img
          className="sign-in-banner"
          alt="rental"
          src="https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=824&q=80"
        ></img>
        <img
          className="sign-in-banner"
          alt="rental"
          src="https://images.unsplash.com/photo-1581321825690-944511645947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
        ></img>
        <img
          className="sign-in-banner"
          alt="rental"
          src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80"
        ></img>
        <img
          className="sign-in-banner"
          alt="rental"
          src="https://images.unsplash.com/photo-1595909806869-f57f39342eaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
        ></img>
        <img
          className="sign-in-banner"
          alt="rental"
          src="https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
        ></img>
      </div>
      <div className="container">
        <div className="signup-container">
          <h2>Don't Have An Account?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus veniam voluptas accusantium distinctio.
          </p>
          <button onClick={slideFunc} id="signup">
            Create Account
          </button>
        </div>
        <div className="signin-container">
          <h2>Already Have An Account?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus veniam voluptas accusantium distinctio.
          </p>
          <button onClick={slideFunc} id="login">
            Login
          </button>
        </div>
        <div
          className={
            toggle ? "overlay slide-right" : "overlay slide-right slide-left"
          }
          id="slide"
        >
          <div className="form-container signup-form">
            <form action="" id="signup">
              <h3>Create Account</h3>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Username...."
                  id="username"
                  name="username"
                  maxLength="20"
                  value={formRegisValues.username}
                  onChange={onChangeRegis}
                />
              </div>
              <div className="input-container">
                <input
                  id="primaryemail"
                  name="primaryemail"
                  type="text"
                  placeholder="Email..."
                  maxLength="30"
                  value={formRegisValues.primaryemail}
                  onChange={onChangeRegis}
                />

                <div className="input-container">
                  <input
                    placeholder="Password...."
                    id="password"
                    name="password"
                    type="password"
                    maxLength="20"
                    value={formRegisValues.password}
                    onChange={onChangeRegis}
                  />
                </div>
              </div>
              <button type="submit" className="form-button" onClick={handleRegisSubmit}>
                Create Account
              </button>
            </form>
            <div>
              {formRegisErrors.username}
              {formRegisErrors.password}
              {formRegisErrors.primaryemail}
            </div>
          </div>

          <div
            className="form-container signin-form"
            style={{ zIndex: toggle ? "2" : "-1", opacity: toggle ? "1" : "0" }}
          >
            <form action="" id="signin">
              <h3>Login</h3>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#Name" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#Name" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  id="username"
                  name="username"
                  maxLength="20"
                  value={formValues.username}
                  onChange={onChange}
                  placeholder="Username...."
                />
              </div>
              <div className="input-container">
                <input
                  placeholder="Password...."
                  id="password"
                  name="password"
                  type="password"
                  maxLength="20"
                  value={formValues.password}
                  onChange={onChange}
                />
              </div>
              <div className="forgot__password-container">
                <a href="#">Forgot password? </a>
              </div>
              <button
                onClick={handleSubmit}
                disabled={disabled}
                type="submit"
                className="form-button"
              >
                Login
              </button>
            </form>
            <div>
              {" "}
              {formErrors.username}
              <br></br>
              {formErrors.password}{" "}
            </div>
            {
              /* if error, show it */
              isError ? (
                <h3 className="error">{message}</h3>
              ) : // if success message, show it
              !isError && message ? (
                <h6 className="error">{message}</h6>
              ) : null
            }
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

//old form example
// let initialState = {
//   username: "",
//   password: "",
// };

// const [values, setValues] = useState(initialState);

// const changeHandler = (ev) => {
//   ev.persist();
//   setValues({
//     ...values,
//     [ev.target.name]: ev.target.value,
//   });
// };

//   axiosWithAuth()
//     .get("/users/myinfo")
//     // , {
//     //   //headers: {'Accept': 'application/schema+json'}
//     //   headers:{
//     //     Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
//     //     //'Content-Type': 'application/x-www-form-urlencoded'
//     //     "Content-Type": "application/json"
//     //   }
//     //   // headers: {
//     //   //   //"Content-Type": "application/json"
//     //   //   'Content-Type': 'application/x-www-form-urlencoded',
//     //   // },
//     // })
//     .then((res) => {

//       console.log(res);
//       push('/profile')
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// eslint-disable-next-line no-lone-blocks
/* <div className="user-form">
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
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
    </div> */
