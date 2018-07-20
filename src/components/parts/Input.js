import React from 'react';

import { BORDER, TEXT, MARGIN, HEIGHT } from "../../constants";

const input = (props) => {
    return (
        <div style = {{...div, ...props.style}}>
        <div style = {{...name }}>
          {props.placeholder}
        </div>
            <input
                    style={{...styleInput, ...props.style}}
                    value = {props.value}
                    name = {props.name}
                    onChange={(e) => props.onChange(e, 'qty')}
                    placeholder={props.placeholder}
                    type = {props.type}
            />
              </div>
    );
};

const div = {
        ...MARGIN,
        width: '100%',
        display: 'inline-flex'
        
}
const name = {
...BORDER,
...TEXT,
...HEIGHT,
borderRadius: '5px 0 0 5px',
textAlign: 'center',
width: '60%',
overflow: 'hidden',
whiteSpace: 'nowrap',
verticalAlign: 'middle',
lineHeight: HEIGHT.height,
cursor: 'default'
}
const styleInput = {
    padding: '0',
    ...BORDER,
    ...TEXT,
    ...HEIGHT,
    borderRadius: '0 5px 5px 0',
    borderColor: 'white',
    width:'45%',
    display: 'inline-block',  
    backgroundColor: '#fff',
  }

export default input;