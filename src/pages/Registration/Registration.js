import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import BckImage from "../../components/Login_Registration_Components/Image_Components/BckImage";
import Button from "../../components/Login_Registration_Components/Button/Button";
import Header from "../../components/Login_Registration_Components/Header/Header";
import InputRegistration from "../../components/Login_Registration_Components/InputRegistration/InputRegistration";
import LinkTo from "../../components/Login_Registration_Components/Link/LinkTo";

import styles from "../Registration/Registration.module.css";

import logo from '../../assets/compass.uol_logo.svg';

const Registration = () => {
  const [hasLoaded, setHasLoaded] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    Country:"",
    City:"",
    email: "",
    password: "",
    confirmPassword: "",
    errorMessage: "",
    submitted: false,
  });

  const [error, setError] = useState(false)

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "Your first name",
      errorMessage:
        "First name should be 3-16 characters and shouldn't include any special character!",
      label: "first name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
        id: 2,
        name: "lastName",
        type: "text",
        placeholder: "Your last name",
        errorMessage:
          "Last name should be 3-16 characters and shouldn't include any special character!",
        label: "last name",
        pattern: "^[A-Za-z0-9 ]{3,16}$",
        required: true,
    },
    {
        id: 3,
        name: "birthday",
        type: "date",
        placeholder: "Birthday",
        label: "Birthday",
        required: true,
    },
    {
        id: 4,
        name: "Country",
        type: "text",
        placeholder: "Your Country",
        errorMessage:
          "Country shouldn't include any special character!",
        label: "Country",
        pattern: "^[A-Za-z0-9 ]{3,16}$",
        required: true,
    },
    {
        id: 5,
        name: "City",
        type: "text",
        placeholder: "Your City",
        errorMessage:
          "City shouldn't include any special character!",
        label: "City",
        pattern: "^[A-Za-z0-9 ]{3,16}$",
        required: true,
    },
    {
      id: 6,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 7,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter and 1 number!",
      label: "password",
      pattern: "^[A-Za-z0-9]{8,20}$",
      required: true,
    },
    {
      id: 8,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues((prevState) => {
      const newState = { ...prevState };
      newState[name] = value;

      // if (newState.input1 === '' && newState.input2 === '' && newState.input3 === '' && newState.input4 === '' && newState.input5 === '' && newState.input6 === '' && newState.input7 === '' && newState.input8 === '') {
      //   newState.errorMessage = 'All input fields are blank';
      // } else {  
      //   newState.errorMessage = '';
      // }

      return newState;
    });
    localStorage.setItem("formState", JSON.stringify(values));
  }

  const handleSubmit = (event) => {
     event.preventDefault();
    const form = event.currentTarget;
    if(!form.checkValidity() || values.errorMessage !== ""){
      setValues((prevState) => {
        const newState = {...prevState};
        if(values.errorMessage === ""){
          newState.errorMessage = "All input fields are required";
          setError(true);
        }
        return newState;
      });
    }else{
      localStorage.setItem("formState", JSON.stringify(values));
      setValues((prevState) => {
        const newState = {...prevState};
        newState.submitted = true;
        return newState;
      });
    }
    navigate('/Login');
  }

  useEffect(() => {
    if (!hasLoaded) {
      const storedData = JSON.parse(localStorage.getItem('data'));
      if (storedData) {
        setValues(storedData);
      }
      setHasLoaded(true);
    }
    else {
      localStorage.setItem('data', JSON.stringify(values));
    }
  }, [values]);

  return (
    <div className={styles.all}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Header paragraph="Please, register to continue" />
        </div>
        <div className={styles.formBtnContent}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputLabel}>
              {inputs.map((input) => (
              <InputRegistration
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={handleInputChange}
                  className={styles.inputs}
              />
              ))}
              {error && <div>Mensagem de Erro</div>}
            </div>
            <div>
              {values.errorMessage && <p>{values.errorMessage}</p>}
            </div>
            <div className={styles.footer}>
            <Button 
              type="submit" 
              title="Register Now"
            />
            <Link to="/Login"><LinkTo title="Already have an account? Log in " lastWorld="here" /></Link>
            </div>
          </form>
        </div>
      </div>
      <BckImage />
      <div className={styles.logoCompass}>
        <img src={logo} alt="compass.logo" />
      </div>
    </div>
  )
}

export default Registration;