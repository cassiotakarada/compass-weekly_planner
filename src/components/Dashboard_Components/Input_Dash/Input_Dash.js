import React from "react";

import styles from "./Input_Dash.module.css"

const InputDash = ( props ) => {

  const { onChange, id, ...inputProps } = props;

  return (
        <div>
            <input
                {...inputProps}
                className={styles.inputDash}
                onChange={onChange}
                value={props.value}
            />
    </div>
  );
};

export default InputDash;