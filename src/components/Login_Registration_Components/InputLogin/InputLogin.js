import { useState } from "react";

import styles from "./InputLogin.module.css"

const InputLogin = ( props ) => {
  const [focused, setFocused] = useState(false);
  const { name, type, placeholder, label, errorMessage, pattern, onChange, id, value, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
        <div>
            <input
                {...inputProps}
                name={name}
                type={type}
                placeholder={placeholder}
                label={label}
                pattern={pattern}
                onChange={onChange}
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