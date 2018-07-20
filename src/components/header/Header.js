import React from 'react';

import Button from '../parts/Button'

import { TEXT } from "../../constants";
import { APPLY, YELLOW } from "../../constants";

const header = (props) => {
    return (
        <div style = {headerStyle}>
            <div style = {{...logoInstrument}}>
                {props.companyName ? props.companyName.toUpperCase() : null}
            </div>
            <input
                style={inputCompany}
                onChange={props.onCompanyChange}
                placeholder='Change instrument'
            />
            <select 
                value={props.selectedValue}
                onChange={props.onChangeInterval}
                style = {{ ...select}}>
                <option value='1min'>1min</option>
                <option value='5min'>5min</option>
                <option value='15min'>15min</option>
                <option value='30min'>30min</option>
                <option value='60min'>60min</option>
                <option value='day'>day</option>
                <option value='week'>week</option>
                <option value='month'>month</option>
            </select>
            <Button 
                onClick = {(e) => props.onClickChange(e)}
                name = 'change'
                style={{...button}}
            />
        </div>
    );
};

const headerStyle = {
    width: '100%',
    backgroundColor: 'none',
    overflow: 'auto',
    height: '40px',
    position: 'fixed',
    zIndex: 3,
    display: 'flex', 
    justifyContent: 'stretch',
    borderBottom: '2px solid #827d44de',
}

const logoInstrument ={
    height: '40px',
    maxWidth: 100,
    backgroundColor: 'grey',
    verticalAlign: 'middle',
    lineHeight: '40px',
    padding: '0 10px',
    fontSize: '25px',
    flexGrow: 0.7,
}

const inputCompany = {
    ...TEXT,
    border: 'none',
    paddingLeft: '10px',
    backgroundColor: YELLOW,
    flexGrow: 3,
}
const select = {
    maxWidth: 100,
    ...TEXT,
    border: 'none',
    height: '40px',
    flexGrow: 0.5,
    backgroundColor: 'lightgrey',
}
const button = {
    maxWidth: 150,
    width: '30%', 
    backgroundColor: APPLY,

}

export default header