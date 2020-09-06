import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './FormSchemaLogin';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './App.css';

const initialFormValues = {
  "username": '',
  "password": '',
}

const initialFormErrors = {
  "username": '',
  "password": '',
}
const initialDisabled = true;

export default function Login() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const changeHandler = (name, value) => {
    yup 
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        console.log(valid)
        setFormErrors({
          ...formErrors,
          [name]: '',
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

  const onChange = evt => {
    setFormValues({...formValues, [evt.target.name]: evt.target.value})
    const { name, value } = evt.target
    changeHandler(name,value)
  }

  const onSubmit = evt => {
    const logUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    }
    console.log(logUser);
   axios.post('https://kmcgeeka-airbnboptimal.herokapp.com/users/myinfo', logUser)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      debugger;
    })
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then((valid) => {
        setDisabled(!valid)
      })
  }, [formValues])


  return (
    <div className='Login'>
        <Form>
            <div className='login-inputs'>
            <FormGroup>
                <Label htmlFor='username'>Username:
                <Input
                    id='username'
                    name='username'
                    type='text'
                    placeholder='Enter username'
                    maxLength='20'
                    value={formValues.username}
                    onChange={onChange}
                />
                </Label>
             </FormGroup>
             <FormGroup>
                <Label htmlFor='password'>Password:
                <Input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    maxLength='20'
                    value={formValues.password}
                    onChange={onChange}
                />
                </Label>
            </FormGroup>
            </div>
            <div className='form-group submit'>
                <Button color ='info' disabled={disabled} onClick={onSubmit}>Login</Button>
            </div> 
        </Form>
     <div>
       {formErrors.username}
       {formErrors.password}
     </div>
    </div>
  );
}

