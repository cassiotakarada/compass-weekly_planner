import React from 'react';

import './Button.modules.css'

const Button = ( props ) => {
  return (
    <div className="containerBtn">
        <button className="btn">{props.title}</button>
    </div>
  )
}

export default Button