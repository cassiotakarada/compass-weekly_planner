import { useState } from "react";
import "./Input.modules.css";

const Input = ( props ) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="form">
        <div className="formLabel">
            <label>{label}</label>
        </div>
        <div className="formInput">
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

export default Input;