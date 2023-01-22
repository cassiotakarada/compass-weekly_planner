import React from 'react';
import styled from 'styled-components';

import styles from './Button.module.css'

const Button = ( props ) => {
  return (
    <div>
        <button className={styles.buttonRL}>{props.title}</button>
    </div>
  );
};

export default Button