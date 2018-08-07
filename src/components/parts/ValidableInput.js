import React from 'react';
import { Field } from 'redux-form'

export const ValidableInput = ({ name, type, placeholder, validate, style }) => {
    return (
            <Field
                name={name}
                component={renderField}
                type={type}
                placeholder={placeholder}
                style = {{...style}}
                validate = {validate}
            />
    )
}

//validation
const renderField = ({ style, input, placeholder, type, 
    meta: { touched, error, warning } }) => (
    <div>
      <div>
        <input {...input} placeholder={placeholder} type={type} style = {style}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )