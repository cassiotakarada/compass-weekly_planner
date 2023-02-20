import React from 'react';

import styles from './Button.module.css'

const Button = ( props ) => {
const { title } = props;
  return (
    <div>
        <button className={styles.buttonRL}>{title}</button>
    </div>
  );
};

export default Button