import React from 'react';
import { Field } from 'redux-form'

import * as CONST from "../../constants";

// Dropdown list linked directly to store 
const Select = ({ name, values }) => {
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
            >
                {options()}
            </Field>
        </div>
    )
};

// Input linked directly to store 
const Input = ({ name, type, placeholder }) => {
    return (
        <div style = {wrapper}>
            <div style = {styleName}>{name}</div>
            <Field
                name={name}
                component='input'
                type={type}
                placeholder={placeholder}
                style = {input}
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

export { Select, Input, Button };

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