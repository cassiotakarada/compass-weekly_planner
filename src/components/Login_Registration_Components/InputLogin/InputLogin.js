import { useState } from "react";

import styles from "./InputLogin.module.css"

const InputLogin = ( props ) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
        <div>
            <input
                {...inputProps}
                onBlur={handleFocus}
                onFocus={() =>
                inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
                className={styles.inputRL}
            />
          <span className={styles.spanRL}>{errorMessage}</span>
    </div>
  );
};

export default InputLogin;