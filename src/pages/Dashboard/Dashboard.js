import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

import { setWeekDay } from '../../components/Dashboard_Components/WeekTabs_Dash/redux/DayOfWeekSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ButtonAdd from "../../components/Dashboard_Components/Button_Dash/ButtonAdd";
import ButtonDeleteAll from "../../components/Dashboard_Components/Button_Dash/ButtonDeleteAll";
import Cards from "../../components/Dashboard_Components/Cards/Cards";
import InputDash from "../../components/Dashboard_Components/Input_Dash/Input_Dash";
import Navbar from "../../components/Dashboard_Components/Navbar/Navbar";
import SelectDash from "../../components/Dashboard_Components/Select_Dash/SelectDash";
import WeekTabsDash from "../../components/Dashboard_Components/WeekTabs_Dash/WeekTabs_Dash";

import BigLogo from "../../components/Dashboard_Components/Images_Components/bigLogo";

import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [selectDay, setSelectDay] = useState("monday");
    const [valueInput, setValueInput] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const [events, setEvents] = useState({
        description:"",
        dayOfWeek:"",
        });

    
    
    const token = localStorage.getItem('token')
    const tokenValidation = JSON.parse(token)

    const onSubmitForm = (event) => {
        event.preventDefault();
        cardPost()
        setValueInput("")
    }

    const cardPost = async () => {
        try {
            const response = await  axios.post('https://latam-challenge-2.deta.dev/api/v1/events', 
            events,
            {
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenValidation}`,
                },
            }  
        )
        }
    
        catch (error) {
            console.log(error.response.data);
            return toast.error('Something went wrong', {
                className: "error-toast",
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
                })
        }
    } 

    const dayOfTheWeek = useSelector((state) => state.weekDay)

    const deleteAll = async () => {
        try {
            const response = await axios.delete(`https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek=${dayOfTheWeek}`, 
            {
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenValidation}`,
                },
            },
            window.location.reload()
        )
        console.log(response.data)
        }
        catch (error) {}
    } 

    const handleChange = (
        event,
        setInput,
        keyName,
      ) => {
        setInput((prevState) => ({
          ...prevState,
          [keyName]: event.target.value,
        }));
      };
    
return (
    <>
        <div className={styles.all}>
            <div className={styles.content}>
                <Navbar />
                <div className={styles.body}>
                    <div className={styles.inputBtn}>
                        <div className={styles.inputSelect}>
                            <form onSubmit={onSubmitForm} className={styles.formDash}>
                                <InputDash 
                                placeholder="Task or issue" 
                                name="task" type="text"
                                onChange={(e) => {handleChange(e, setEvents,"description"); setValueInput(e.target.value)}}
                                className={styles.taskInput}
                                value ={valueInput}
                                />
                                <SelectDash 
                                placeholder="Monday" 
                                name="weekday" 
                                onChange={(e) => handleChange(e, setEvents,"dayOfWeek")}    
                                id="weekday" 
                                className={styles.weekDay}
                                />
                                {/* <InputDash 
                                placeholder="00h 00m" 
                                name="time" 
                                type="time"
                                value={hour}
                                onChange={handleHourChange}
                                className={styles.time}
                                required
                                /> */}
                                <ButtonAdd
                                    type="submit"
                                />
                            </form>
                            <ButtonDeleteAll onClick={deleteAll} />
                        </div>
                    </div>
                    <div>
                        <WeekTabsDash 
                            setSelectDay={dayOfTheWeek}
                            setSelectedColor={setSelectedColor}
                        />
                         <Cards 
                            day={dayOfTheWeek}
                            setSelectedColor={setSelectedColor}
                         />
                    </div>
                    <BigLogo />
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard