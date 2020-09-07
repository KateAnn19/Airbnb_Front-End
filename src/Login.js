// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import * as yup from 'yup';
// import formSchema from './FormSchemaLogin';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// import './App.css';

// const initialFormValues = {
//   "username": '',
//   "password": '',
// }

// const initialFormErrors = {
//   "username": '',
//   "password": '',
// }
// const initialDisabled = true;

// export default function Login() {

//   const [formValues, setFormValues] = useState(initialFormValues);
//   const [formErrors, setFormErrors] = useState(initialFormErrors);
//   const [disabled, setDisabled] = useState(initialDisabled);

//   const changeHandler = (name, value) => {
//     yup 
//       .reach(formSchema, name)
//       .validate(value)
//       .then((valid) => {
//         console.log(valid)
//         setFormErrors({
//           ...formErrors,
//           [name]: '',
//         });
//       })
//       .catch((e) => {
//         setFormErrors({
//           ...formErrors, 
//           [name]: e.errors[0],
//         });
//       });
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const onChange = evt => {
//     setFormValues({...formValues, [evt.target.name]: evt.target.value})
//     const { name, value } = evt.target
//     changeHandler(name,value)
//   }

//   const onSubmit = evt => {
//     const logUser = {
//       username: formValues.username,
//       password: formValues.password,
//     }
//     console.log(logUser);
//     axios.get('https://kmcgeeka-airbnboptimal.herokapp.com/users/myinfo', logUser)
//     .then(res => {
//       console.log(res);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }

//   useEffect(() => {
//     formSchema.isValid(formValues)
//       .then((valid) => {
//         setDisabled(!valid)
//       })
//   }, [formValues])


//   return (
//     <div className='Login'>
//         <Form>
//             <div className='login-inputs'>
//             <FormGroup>
//                 <Label htmlFor='username'>Username:
//                 <Input
//                     id='username'
//                     name='username'
//                     type='text'
//                     placeholder='Enter username'
//                     maxLength='20'
//                     value={formValues.username}
//                     onChange={onChange}
//                 />
//                 </Label>
//              </FormGroup>
//              <FormGroup>
//                 <Label htmlFor='password'>Password:
//                 <Input
//                     id='password'
//                     name='password'
//                     type='password'
//                     placeholder='Enter password'
//                     maxLength='20'
//                     value={formValues.password}
//                     onChange={onChange}
//                 />
//                 </Label>
//             </FormGroup>
//             </div>
//             <div className='form-group submit'>
//                 <Button color ='info' disabled={disabled} onClick={onSubmit}>Login</Button>
//             </div> 
//         </Form>
//      <div>
//        {formErrors.username}
//        {formErrors.password}
//      </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "./utils/AxiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import './Login.css';

let initialState = {
  username: "",
  password: "",
};
const Login = () => {
  const [values, setValues] = useState(initialState);
  const [toggle, setToggle] = useState(false);
  console.log(values);
  const { push } = useHistory();
  const changeHandler = (ev) => {
    ev.persist();
    setValues({
      ...values,
      [ev.target.name]: ev.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://kmcgeeka-airbnboptimal.herokuapp.com/login",
        `grant_type=password&username=${values.username}&password=${values.password}`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log("Login -> res.data", res.data.payload);
        localStorage.setItem("token", res.data.access_token);
        push("/userprofile");
      });
  };

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
  let login = document.getElementById("login");
  let signup = document.getElementById("signup");
  let slide = document.getElementById("slide");
  let signinForm = document.querySelector(".signin-form");
  let signupForm = document.querySelector(".signup-form");
  
  // login.addEventListener("click", () => {
  //   slide.classList.add("slide-right");
  //   slide.classList.remove("slide-left");
  //   signinForm.style.zIndex = "2";
  //   signinForm.style.opacity = "1";
  // });
  
  // signup.addEventListener("click", () => {
  //   slide.classList.add("slide-left");
  //   slide.classList.add("slide-right");
  //   signinForm.style.zIndex = "-1";
  //   signinForm.style.opacity = "0";
  // });

  function slideFunc(){
    setToggle(!toggle);
    // slide.classList.add("slide-right");
    // slide.classList.remove("slide-left");
    // signinForm.style.zIndex = "2";
    // signinForm.style.opacity = "1";
  }


  return (
    <>
    <div class="logo-nav-container">
        <div class="logo">
          <i class="fas fa-search-dollar"></i>
          <h1>landbnb</h1>
        </div>
        <nav class="nav-container">
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
   <img className="sign-in-banner one" alt="rental" src="https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=824&q=80"></img>
   <img className="sign-in-banner two" alt="rental" src="https://images.unsplash.com/photo-1581321825690-944511645947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"></img>
   <img className="sign-in-banner three" alt="rental" src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80"></img>
   <img className="sign-in-banner four" alt="rental" src="https://images.unsplash.com/photo-1595909806869-f57f39342eaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"></img>
   <img className="sign-in-banner five" alt="rental" src="https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"></img>
   </div>
    <div class="container">
      <div class="signup-container">
        <h2>Don't Have a account</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus veniam voluptas accusantium distinctio.
        </p>
        <button onClick={slideFunc} id="signup">Create account</button>
      </div>
      <div class="signin-container">
        <h2>Already have an account?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus veniam voluptas accusantium distinctio.
        </p>
        <button onClick={slideFunc} id="login">Login</button>
      </div>
      <div class={toggle ? "overlay slide-right":"overlay slide-right slide-left"} id="slide">
        <div class="form-container signup-form">
          <form action="">
            <h3>Create account</h3>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"
                ><i class="fab fa-google-plus-g"></i
              ></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div class="input-container">
              <input type="text" placeholder="Email...." />
            </div>
            <div class="input-container">
              <input type="text" placeholder="Password...." />
            </div>
            <div class="input-container">
              <input type="text" placeholder="Username...." />
            </div>

            <button onClick={slideFunc} class="form-button">
              Create account
            </button>
          </form>
        </div>

       <div class="form-container signin-form" style={{zIndex: toggle ? "2": "-1", opacity: toggle ? "1" : "0"}}>
  
          <form action="" id="signup">
            <h3>Login</h3>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"
                ><i class="fab fa-google-plus-g"></i
              ></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <div class="input-container">
              <input type="text" placeholder="Email...." />
            </div>
            <div class="input-container">
              <input type="text" placeholder="password...." />
            </div>
            <div class="forgot__password-container">
              <a href="#">Forgot password? </a>
            </div>
            <button onClick={slideFunc} class="form-button">Login</button>
          </form>
        </div>
      </div>
    </div>
    {/* <div className="user-form">
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
      <p>Don't have an account?</p>
      <Link className="RegLink" to="/register">
        <button color="primary" size="lg">
          {" "}
          Register Here{" "}
        </button>
      </Link>
    </div> */}
    </>
  );
};
export default Login;






