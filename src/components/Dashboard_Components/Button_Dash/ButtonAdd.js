import React from 'react';

import styles from './ButtonAdd.module.css'

const ButtonAdd = ( props ) => {
  return (
    <div className={styles.buttons}>
        <button className={styles.add}>+ Add to calendar</button>
    </div>
  )
}

export default ButtonAdd;