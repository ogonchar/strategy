import React from 'react'

import { BORDER, TEXT, MARGIN, HEIGHT } from "../../constants";

export default (props) => {
  
  const options = () => {
    const res = props.values.map((opt,i) => {
      return <option key={i} value={opt}>{opt}</option>
    })
    return res
  }
  return (
    <div style = {{...div, ...props.style}}>
      <div style = {{...name }}>
        {props.name}
      </div>
      <select 
        value={props.selectedValue}
        onChange={props.onChange}
        style = {{ ...select}}>
          {options()}
      </select>
    </div>
  )
}

const div = {
  ...MARGIN,
  width: '40%',
  
}

const name = {
  ...BORDER,
  ...TEXT,
  ...HEIGHT,
  borderRadius: '5px 0 0 5px',
  textAlign: 'center',
  width: '34%',
  float: 'left',
  verticalAlign: 'middle',
  lineHeight: HEIGHT.height
}
const select = {
  ...BORDER,
  ...TEXT,
  borderRadius: '0 5px 5px 0',
  height: '27px',
  width: '61%',
  backgroundColor: '#fff',
}
