import React from 'react';
import { Field } from 'redux-form'

import * as CONST from "../../constants";


// Dropdown list linked directly to store 
const Select = ({ name, values, validate }) => {
    const options = () => {
        const res = values.map((opt, i) => {
            return <option key={i} value={opt}>{opt}</option>
        })
        return res
    }
    return (
        <div style = {wrapper}>
            <div style = {styleName}>{name}</div>
            <Field 
                name={name} 
                component='select'
                style = {dropSelect}
                validate = {validate}
            >
                {options()}
            </Field>
        </div>
    )
};

// Input linked directly to store 
const Input = ({ name, type, placeholder, validate }) => {
    return (
        <div style = {wrapper}>
            <div style = {styleName}>{name}</div>
            <Field
                name={name}
                component='input'
                type={type}
                placeholder={placeholder}
                style = {input}
                validate = {validate}
            />
        </div>
    )
}



const Button = ({ onClick, style, name }) => {
    return (
        <div
            onClick={onClick}
            style={{ ...buttonDiv, ...style }}
        >
            {name}
        </div>
    )
}


const Symbol = ({style, name, placeholder, type, validate }) => {
    return (
        <div style = {style}>
            <Field
                name={name}
                component='input'
                type={type}
                placeholder={placeholder}
                style = {{ ...style, ...symbolStyle}}
                validate = {validate}
            />
        </div>
    );
};

const Interval = ({ name, values, style, validate }) => {
    const options = () => {
        const res = values.map((opt, i) => {
            return <option key={i} value={opt}>{opt}</option>
        })
        return res
    }
    return (
        <div style = {wrapper}>
            <Field 
                name={name} 
                component='select'
                style = {{...dropSelect, ...style}}
                validate = {validate}
            >
                {options()}
            </Field>
        </div>
    )
};

export { Select, Input, Button, Symbol, Interval };

const common = {...CONST.HEIGHT, ...CONST.TEXT, 
    ...CONST.BACK, ...CONST.BORDER}


const wrapper = {
    display: 'flex',
    alignItems: 'center',
}

const buttonDiv = {
    ...common,
    cursor: 'pointer',
}

const styleName = {
    ...common,
    minWidth: 90,
}
const dropSelect = {
    ...common,
    minWidth: 102,
    height: (CONST.HEIGHT.height + 2)
  }
const input = {
    ...common,
    backgroundColor: '#f3f3f3ab',
    width: 100,
    minWidth: 100,
}
const symbolStyle = {

}