import React from 'react';
import { reduxForm } from 'redux-form'

import Button from '../parts/Button'
import { Symbol, Interval } from '../parts/FieldParts'

import { TEXT } from "../../constants";
import { APPLY, YELLOW } from "../../constants";
import { initialState } from '../../constants'

const header = (props) => {

    return (
        <div style = {headerStyle}>
            <div style = {{...logoInstrument}}>
                {props.companyName ? props.companyName.toUpperCase() : null}
            </div>
            <Symbol
                value={props.val.symbol}
                name='symbol'
                style={inputCompany}
                placeholder='Change instrument'
                style = {inputCompany}
            />
            <Interval
                values = {['1min','5min','10min','15min','30min','60min', 'day', 'week', 'month']}
                name = 'interval'
                style = {select}
            />
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
    height: '40px',
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

let headerForm = reduxForm({
    form: 'header',
    initialState: initialState.form.header.val
})(header)

export default headerForm