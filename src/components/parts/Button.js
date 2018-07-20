import React from 'react'

import {TEXT } from "../../constants";

export default (props) => {
    switch (props.type) {
    
    default: return (
      <div 
        onClick = {props.onClick} 
        style = {{...div, ...props.style}}
      >
        {props.name}
      </div>
    )
  }
}
const div = {
  ...TEXT,
  height: '40px',
  textAlign: 'center',
  cursor: 'pointer',
  verticalAlign: 'middle',
  lineHeight: '40px', 
}
