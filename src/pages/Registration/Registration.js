import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BckImage from "../../components/Login_Registration_Components/Image_Components/BckImage";
import Button from "../../components/Login_Registration_Components/Button/Button";
import Header from "../../components/Login_Registration_Components/Header/Header";
import InputRegistration from "../../components/Login_Registration_Components/InputRegistration/InputRegistration";
import LinkTo from "../../components/Login_Registration_Components/Link/LinkTo";

import styles from "../Registration/Registration.module.css";

import logo from '../../assets/compass.uol_logo.svg';

const Registration = () => {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    country:"",
    city:"",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => {
      const newState = { ...prevState };
      newState[name] = value;
      return newState;
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const birthDate = event.target.elements.birthDate.value;
    const country = event.target.elements.country.value;
    const city = event.target.elements.city.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements.confirmPassword.value;
  
    const firstNameRegex = /^[A-Za-z]{3,16}$/
    if (!firstNameRegex.test(firstName)) {
      toast.error('Please enter your first name.', {
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

    const lastNameRegex = /^[A-Za-z ]{3,30}$/
    if (!lastNameRegex.test(lastName)) {
      toast.error('Please enter your last name.', {
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

    if (!birthDate) {
      toast.error('Please enter a valid birthday in the format dd/mm/yyyy.', {
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

    const countryRegex = /^[A-Za-z ]{3,30}$/
    if (!countryRegex.test(country)) {
      toast.error('Please enter your country.', {
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

    const cityRegex = /^[A-Za-z ]{3,30}$/
    if (!cityRegex.test(city)) {
      toast.error('Please enter your city.', {
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

    if (password !== confirmPassword) {
      toast.error('Passwords do not match.', {
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
  
    axios.post('https://latam-challenge-2.deta.dev/api/v1/users/sign-up', {
      firstName,
      lastName,
      birthDate,
      country,
      city,
      email,
      password,
      confirmPassword
    })

    .then(response => {
      setTimeout(() => {
        navigate ('/')
      }, 2000)

      return toast.success('Success', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    })

    .catch(error => {
      console.error(error.response.data);
      return toast.error('Email already registered. Try another one or Log in', {
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

  return (
    <div className={styles.all}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Header paragraph="Please, register to continue" />
        </div>
        <div className={styles.formBtnContent}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputLabel}>
              <InputRegistration 
                onChange={handleInputChange}
                className={styles.inputs}
                name= "firstName"
                type= "text"
                placeholder= "Your first name"
                label= "first name"
              />
              <InputRegistration 
                onChange={handleInputChange}
                className={styles.inputs}
                name= "lastName"
                type= "text"
                placeholder= "Your last name"
                label= "last name"
              />
              <InputRegistration 
                onChange={handleInputChange}
                className={styles.inputs}
                name= "birthDate"
                type= "date"
                placeholder= "Birthday"
                label= "Birthday"
              />
              <InputRegistration 
                onChange={handleInputChange}
                className={styles.inputs}
                name= "country"
                type= "text"
                placeholder= "Your Country"
                label= "Country"
              />
              <InputRegistration 
                onChange={handleInputChange}
                className={styles.inputs}
                name= "city"
                type= "text"
                placeholder= "Your City"
                label= "City"
              />
              <InputRegistration 
                onChange={handleInputChange}
                className={styles.inputs}
                name= "email"
                type= "email"
                placeholder= "Email"
                label= "Email"
              />
              <InputRegistration 
                onChange={handleInputChange}
                className={styles.inputs}
                name= "password"
                type= "password"
                placeholder= "Password"
                label= "password"
              />
              <InputRegistration 
                onChange={handleInputChange}
                className={styles.inputs}
                name= "confirmPassword"
                type= "password"
                placeholder= "Confirm Password"
                label= "password"
              />                                                                                  
            </div>
            <div>
              {values.errorMessage && <p>{values.errorMessage}</p>}
            </div>
            <div className={styles.footer}>
            <Button 
              type="submit" 
              title="Register Now"
            />
            <Link to="/"><LinkTo title="Already have an account? Log in " lastWorld="here" /></Link>
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

export default Registration;