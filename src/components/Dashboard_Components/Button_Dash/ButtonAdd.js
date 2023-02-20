import React from 'react';

import styles from './ButtonAdd.module.css'

const ButtonAdd = ( props ) => {

  const { onClick } = props;

  return (
    <div className={styles.buttons}>
        <button onClick={onClick} className={styles.add}>+ Add to calendar</button>
        {/* {currentTime && <p>Current hour is: {currentTime}</p>} */}
    </div>
  )
}

export default ButtonAdd;