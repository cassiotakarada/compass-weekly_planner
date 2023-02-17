import { useState } from 'react';

import UsernameImage from "../../components/Login_Registration_Components/Image_Components/UsernameImage";
import PasswordImage from "../../components/Login_Registration_Components/Image_Components/PasswordImagem";

function MyComponent() {
  const [input1Focused, setInput1Focused] = useState(false);
  const [input2Focused, setInput2Focused] = useState(false);

  function handleFocus1() {
    setInput1Focused(true);
  }
  
  function handleBlur1() {
    setInput1Focused(false);
  }

  function handleFocus2() {
    setInput2Focused(true);
  }
  
  function handleBlur2() {
    setInput2Focused(false);
  }
  
  return (
    <div className="inputs">
        <input onFocus={handleFocus1} onBlur={handleBlur1} />
        <UsernameImage className={input1Focused ? 'move-left' : ''} />
        <input onFocus={handleFocus2} onBlur={handleBlur2} />
        <PasswordImage className={input2Focused ? 'move-left' : ''} />
    </div>
  );
}

export default MyComponent;