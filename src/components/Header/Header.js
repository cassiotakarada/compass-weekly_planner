import React from 'react';

import "./Header.modules.css";

const Header = ( props ) => {
  return (
    <div>
        <h1>Welcome,</h1>
        <p className="paragraph">{props.paragraph}</p>
    </div>
  )
}

export default Header;