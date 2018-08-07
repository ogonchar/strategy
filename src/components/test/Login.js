import React from 'react'
import { reduxForm } from 'redux-form'
import { ValidableInput } from "../parts/ValidableInput"
import Transition from 'react-addons-css-transition-group'

import './login.css'

import { GREEN, PURPLE } from "../../constants";

//Validation functions
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const userNameValidator = value => maxLength(4)(value)

const emailValidator = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const passwordValidator = value => value &&
/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(value) && 
maxLength(20)(value)? 'Invalid password' : undefined

//validation

 
const Login = ({isAuthed, loginRequest}) => {
    return (
      
      <div className='panel' key = {999}>
        {!isAuthed ? 
          (<div style = {{textAlign: 'center'}}>
            <div style = {header}>Login</div>
            <ValidableInput 
              name= {'userName'}
              type='text' 
              style={input} 
              placeholder='Username'
              validate = { userNameValidator }
            />
            <ValidableInput 
              name= {'password'}
              type='password' 
              style={input} 
              placeholder='Password'
              validate = { passwordValidator }
            />
            <button 
              style = {button}
              action = 'submit'
              onClick={() => loginRequest()} 
            >Login
            </button>
          </div>)
        : <button 
            style = {button}
            action = 'submit'
            onClick={(valuesForLogin) => loginRequest(valuesForLogin)} 
            >Logout
        </button>}
        {!isAuthed &&
          <div style = {{textAlign: 'center'}}>
            <div style = {header}>Registration</div>
            <ValidableInput 
              name= {'userNameSignup'}
              type='text' 
              style={input} 
              placeholder='Username'
              validate = { userNameValidator }
            />
            <ValidableInput 
              name= {'passwordSignup'}
              type='password' 
              style={input} 
              placeholder='Password'
              validate = { passwordValidator }
            />
            <ValidableInput 
              name= {'emailSignup'}
              type='email' 
              style={input} 
              placeholder='email'
              validate = { emailValidator }
            />
            <button 
              style = {button}
              action = 'submit'
              onClick={(valuesForLogin) => loginRequest(valuesForLogin)} 
            >
              Signup
            </button>
          </div>
        }
      </div>
    )
  }



const header = {
  border: 'none',
  borderRadius: '4px',
  height: '40px', 
  textAlign: 'center',
  backgroundColor: PURPLE,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}

const input = {
  height: '5%',
  border: 'none',
  borderRadius: '4px',
  padding: '5px',
  marginTop: '6px',
}

const button = {
  height: '25px',
  border: 'none',
  borderRadius: '4px',
  padding: '5px',
  marginTop: '6px',
  width: '100%',
  marginBottom: '20px',
}

const loginForm = reduxForm({
  form: 'login'
})(Login)

export default loginForm