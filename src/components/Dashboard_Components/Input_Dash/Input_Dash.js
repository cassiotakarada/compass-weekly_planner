import React from "react";

import styles from "./Input_Dash.module.css"

const InputDash = ( props ) => {

  return (
        <div>
            <input
                placeholder={props.placeholder}
                type={props.type}
                name={props.name}
                className={styles.inputDash}
            />
    </div>
  );
};

export default InputDash;