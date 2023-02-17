import { useState } from "react";

import styles from "./InputRegistration.module.css";

const InputRegistration = ( props ) => {
  const [focused, setFocused] = useState(false);
  const { name, type, placeholder, label, errorMessage, pattern, onChange, id, value, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={styles.form}>
        <div className={styles.formLabel}>
            <label className={styles.labelR}>{label}</label>
        </div>
        <div className={styles.formInput}>
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
                className={styles.inputR}
            />
          <span className={styles.spanR}>{errorMessage}</span>
        </div>
    </div>
  );
};

export default InputRegistration;