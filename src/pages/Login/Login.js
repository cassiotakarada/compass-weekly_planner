import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Login_Registration_Components/Button/Button";
import Header from "../../components/Login_Registration_Components/Header/Header";
import InputLogin from "../../components/Login_Registration_Components/InputLogin/InputLogin";
import LinkTo from "../../components/Login_Registration_Components/Link/LinkTo";

import styles from "./Login.module.css"

import logo from '../../assets/compass.uol_logo.svg';
import BckImage from "../../components/Login_Registration_Components/Image_Components/BckImage";
import UsernameImage from "../../components/Login_Registration_Components/Image_Components/UsernameImage";
import PasswordImage from "../../components/Login_Registration_Components/Image_Components/PasswordImagem";

const Login = () => {

  const [values, setValues] = useState({
    firstName: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "First name should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      placeholder: "password",
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    localStorage.setItem("keyInfo", JSON.stringify(inputs))
  }

  return (
    <div className={styles.all}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Header paragraph="To continue browsing safely, log in to the network." />
        </div>
        <div className={styles.inputBtn}>
          <div className={styles.subtitle}>
            <h2 className={styles.h2Login}>Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputsImgs}>
              <div className={styles.inputs}>
              {inputs.map((input) => (
                <InputLogin
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                    className={styles.inputsLogin}
                />
                ))}
              </div>
              <div className={styles.imgs}>
                <div className={styles.usernameImage}>
                  <UsernameImage />
                </div>
                <div className={styles.passwordImage}>
                  <PasswordImage />
                </div>
              </div>
            </div>
          </form>
          <div className={styles.footerLogin}>
            <Button 
              type="submit"
              onClick={handleClick} 
              title="Log in" 
              className={styles.btnLogin}
              />
              <Link to="/"><LinkTo title="Don't have an account yet? Register  " lastWorld="here" className={styles.linkRegistration} /></Link>
          </div>
        </div>
      </div>
      <BckImage />
      <did className={styles.logoCompass}>
        <img src={logo} alt="compass.logo" />
      </did>
    </div>
  )
}

export default Login;