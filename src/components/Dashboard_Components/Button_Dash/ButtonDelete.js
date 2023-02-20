import React from "react";

import styles from './ButtonDelete.module.css'

const ButtonDelete = ( props ) => {


  return (
    <div className={styles.buttons}>
        <button onClick={props.onClick} className={styles.dlt}>Delete</button>
    </div>
  )
}

export default ButtonDelete;