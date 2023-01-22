import React from 'react';

import styles from "./Header.module.css";

const Header = ( props ) => {
  return (
    <div>
        <h1 className={styles.h1HeaderRL}>Welcome,</h1>
        <p className={styles.paragraph}>{props.paragraph}</p>
    </div>
  );
};

export default Header;