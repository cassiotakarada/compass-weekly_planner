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
    username:"",
    password:"",
  });
  const [isValid, setIsValid] = useState(false);
  const[submitted, setSubmitted] = useState('');
  const[emailImg, setEmailImage] = useState('classDefaultEmail');
  const[passwordImage, setPasswordImage] = useState('classDefaultPassword');
  const[classEmail, setClassEmail] = useState('');
  const[classPassword, setClassPassword] = useState('');

  const navigate = useNavigate();

  function handleChangeEmailImg (value) {
    setEmailImage(value)
    setClassEmail('classDefaultEmail classTransitionEmail')
  }

  function handleChangePasswordImg (value) {
    setPasswordImage(value)
    setClassPassword('classDefaultPassword classTransitionPassword')
  }

  const onClickLogin = async () => {
    axios.post('https://latam-challenge-2.deta.dev/api/v1/users/sign-in', loginInput)

    .then(response => {
      navigate ('/Dashboard')
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('token', JSON.stringify(response.data.token))
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
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    
    const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.', {
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
    if (!passwordRegex.test(password)) {
      toast.error('Please enter a password.', {
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

  //   setSubmitted(true);

  //   const storedData = JSON.parse(localStorage.getItem('formState'));

  //   const firstLastName = `${storedData.firstName}${storedData.lastName}`
  //   if (storedData && (storedData.email === loginInput.username || firstLastName.toLowerCase().replace(/\s/g, "") === loginInput.username.toLowerCase().replace(/\s/g, "")) && storedData.password === loginInput.password) {
  //       setIsValid(true);
  //       localStorage.setItem('isLoggedIn', true);
  //       navigate('/Dashboard');
  //       window.location.reload();
  //   } else {
  //       setIsValid(false);
  //       localStorage.setItem('isLoggedIn', false);
  // }
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
                  <div className={styles.loginImg}>
                    <InputLogin 
                      handleChange={handleChangeEmailImg}
                      onChange={onChange}
                      className={styles.inputs}
                      name= "username"
                      type= "text"
                      placeholder= "username"
                    />
                    <img src={usernameImg} alt="lockImage" className={emailImg} />
                  </div>
                  <div className={styles.loginImg}>
                    <InputLogin 
                      handleChange={handleChangePasswordImg}
                      onChange={onChange}
                      className={styles.inputs}
                      name= "password"
                      type= "password"
                      placeholder= "password"
                    />
                    <img src={passwordImg} alt="lockImage" className={passwordImage} />
                  </div>              
                </div>
            </div>
            <div className={styles.footerLogin}>
            <Button 
              title="Log in" 
              className={styles.btnLogin}
              type="submit"
              onClick={onClickLogin}
              />
              <Link to="/Registration"><LinkTo title="Don't have an account yet? Register  " lastWorld="here" className={styles.linkRegistration} /></Link>
          </div>
          </form>
        </div>
      </div>
      <BckImage />
      <did className={styles.logoCompass}>
        <a href="https://compass.uol/pt/home/?utm_source=google-ads&utm_medium=ppc&utm_campaign=compasso-uol-institucional&utm_term=compass%20uol&gclid=Cj0KCQiAt66eBhCnARIsAKf3ZNGKHQykhpgscHt5KhxoA9TUJr4f2e4jaIamKuuvu4PtV7EVGbhQMvgaAs8fEALw_wcB"><img src={logo} alt="compass.logo" /></a>
      </did>
      <ToastContainer />
    </div>
  )
}

export default Login;