import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const [loginInput, setLoginInput] = useState({
    username:"",
    password:"",
  });
  const [isValid, setIsValid] = useState(false);
  const[submitted, setSubmitted] = useState('');
  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage:
        "Username should be your First and Last name or the e-mail registered!",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage: "Invalid password!",
      required: true,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    const storedData = JSON.parse(localStorage.getItem('data'));
    const firstLastName = `${storedData.firstName}${storedData.lastName}`
    if (storedData && (storedData.email === loginInput.username || firstLastName.toLowerCase().replace(/\s/g, "") === loginInput.username.toLowerCase().replace(/\s/g, "")) && storedData.password === loginInput.password) {
        setIsValid(true);
        localStorage.setItem('isLoggedIn', true);
        navigate('/Dashboard');
    } else {
        setIsValid(false);
        localStorage.setItem('isLoggedIn', false);
  }
}

  const handleClick = () => {
    window.location.reload();
  }

  const onChange = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

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
                    value={loginInput[input.name]}
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
            <div>
                {submitted && !isValid && <p className={styles.invalid}>Invalid username or password</p>}
            </div>
            <div className={styles.footerLogin}>
            <Button 
              title="Log in" 
              className={styles.btnLogin}
              type="submit"
              onClick={handleClick}
              />
              <Link to="/"><LinkTo title="Don't have an account yet? Register  " lastWorld="here" className={styles.linkRegistration} /></Link>
          </div>
          </form>
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