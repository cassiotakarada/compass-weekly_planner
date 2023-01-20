import { useState } from "react";

import styles from "./InputRegistration.module.css";

const InputRegistration = ( props ) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={styles.form}>
        <div className={styles.formLabel}>
            <label>{label}</label>
        </div>
        <div className={styles.formInput}>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
          <span>{errorMessage}</span>
        </div>
    </div>
  );
};

export default InputRegistration;