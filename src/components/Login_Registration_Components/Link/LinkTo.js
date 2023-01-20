import React from 'react';

import './LinkTo.module.css';

const LinkTo = ( props ) => {
  return (
      <p to="/Login">{props.title}<strong><u>{props.lastWorld}</u></strong>.</p>
  );
};

export default LinkTo;