import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from "../../components/Login_Registration_Components/Button/Button";
import Header from "../../components/Login_Registration_Components/Header/Header";
import InputLogin from "../../components/Login_Registration_Components/InputLogin/InputLogin";
import LinkTo from "../../components/Login_Registration_Components/Link/LinkTo";

import styles from "./Login.module.css"

import logo from '../../assets/compass.uol_logo.svg';
import BckImage from "../../components/Login_Registration_Components/Image_Components/BckImage";
import usernameImg from '../../assets/username.svg'
import passwordImg from '../../assets/password.svg'
import UsernameImage from "../../components/Login_Registration_Components/Image_Components/UsernameImage";
import PasswordImage from "../../components/Login_Registration_Components/Image_Components/PasswordImagem";

const Login = () => {

  const [loginInput, setLoginInput] = useState({
    email:"",
    password:"",
  });
  const[isValid, setIsValid] = useState(false);
  const[submitted, setSubmitted] = useState('');
  const[classEmail, setClassEmail] = useState('classDefaultEmail');
  const[classPassword, setClassPassword] = useState('classDefaultPassword');

  const navigate = useNavigate();

  const handleClick = () => {
    window.location.reload();
  }

  const onChangeEmail = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });

    // setEmail(value)
    setClassEmail('classDefaultEmail classTransitionEmail')
  };

  const onChangePassword = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });

    // setPassword(value)
    setClassPassword('classDefaultPassword classTransitionPassword')
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginInput.email)) {
      toast.error('Incorrect e-mail and/or password.', {
        className: "error-toast",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
      return;
    }
  
    const passwordRegex = /^[A-Za-z0-9]{8,20}$/
    if (!passwordRegex.test(loginInput.password)) {
      toast.error('Incorrect e-mail and/or password.', {
        className: "error-toast",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
      return;
    }

    axios.post('https://latam-challenge-2.deta.dev/api/v1/users/sign-in', loginInput)

      .then(response => {
        navigate ('/Dashboard')
        
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('userId', JSON.stringify(response.data.user._id))
        localStorage.setItem('cityWeather', JSON.stringify(response.data.user.city))
        localStorage.setItem('countryWeather', JSON.stringify(response.data.user.country))
        localStorage.setItem('token', JSON.stringify(response.data.token))

        const storedToken = JSON.parse(localStorage.getItem('token'));

          if (storedToken !== null) {
              setIsValid(true);
              localStorage.setItem('isLoggedIn', true);
              navigate('/Dashboard');
              window.location.reload();
          } else {
              setIsValid(false);
              localStorage.setItem('isLoggedIn', false);
        }
    })

    .catch(error => {
      console.error(error.response.data);
      return toast.error('User is not registered', {
        className: "error-toast",
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        })
    });

    setSubmitted(true);
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
                  <div className={styles.loginImg}>
                    <InputLogin 
                      onChange={onChangeEmail}
                      className={styles.inputs}
                      name= "email"
                      type= "text"
                      placeholder= "username"
                    />
                    <img src={usernameImg} alt="lockImage" className={classEmail} />
                  </div>
                  <div className={styles.loginImg}>
                    <InputLogin 
                      onChange={onChangePassword}
                      className={styles.inputs}
                      name= "password"
                      type= "password"
                      placeholder= "password"
                    />
                    <img src={passwordImg} alt="lockImage" className={classPassword} />
                  </div>              
                </div>
            </div>
            <div className={styles.footerLogin}>
              <Button 
                title="Log in" 
                className={styles.btnLogin}
                type="submit"
                onClick={handleClick}
              />
              <Link to="/Registration"><LinkTo title="Don't have an account yet? Register  " lastWorld="here" className={styles.linkRegistration} /></Link>
            </div>
          </form>
        </div>
      </div>
      <BckImage />
      <div className={styles.logoCompass}>
        <a href="https://compass.uol/pt/home/?utm_source=google-ads&utm_medium=ppc&utm_campaign=compasso-uol-institucional&utm_term=compass%20uol&gclid=Cj0KCQiAt66eBhCnARIsAKf3ZNGKHQykhpgscHt5KhxoA9TUJr4f2e4jaIamKuuvu4PtV7EVGbhQMvgaAs8fEALw_wcB"><img src={logo} alt="compass.logo" /></a>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login;