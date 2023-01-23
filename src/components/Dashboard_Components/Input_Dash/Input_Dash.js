import React from "react";

import styles from "./Input_Dash.module.css"

const InputDash = ( props ) => {

  const { onChange, id, ...inputProps } = props;

  return (
        <div>
            <input
                {...inputProps}
                className={styles.inputDash}
            />
    </div>
  );
};

export default InputDash;