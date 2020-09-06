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

let initialState = {
  "username": "",
  "password": ""
};
const Login = () => {
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
          axios.post('https://cors-anywhere.herokuapp.com/https://kmcgeeka-airbnboptimal.herokuapp.com/login',
           `grant_type=password&username=${values.username}&password=${values.password}`, {
          headers: {
              // btoa is converting our client id/client secret into base64
              Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
              'Content-Type': 'application/x-www-form-urlencoded'
          }
          })
          .then(res => {
              console.log(res)
              console.log("Login -> res.data", res.data.payload)
              localStorage.setItem('token', res.data.access_token);
              push('/userprofile');
          })
    }
    
    
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
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
      </form>
      <p>
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
};
export default Login;



