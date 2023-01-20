import React from 'react';

import './Button.module.css'

const Button = ( props ) => {
  return (
    <div>
        <button>{props.title}</button>
    </div>
  );
};

export default Button