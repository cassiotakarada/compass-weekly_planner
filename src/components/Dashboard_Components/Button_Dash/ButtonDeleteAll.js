import React from 'react';

import styles from './ButtonDeleteAll.module.css'

const ButtonDeleteAll = ( props ) => {
  return (
    <div className={styles.buttonsDltAll}>
        <button className={styles.dltAll}>- Delete All</button>
    </div>
  )
}

export default ButtonDeleteAll;