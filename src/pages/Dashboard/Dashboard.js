import React, { Fragment, useState } from "react";

import ButtonAdd from "../../components/Dashboard_Components/Button_Dash/ButtonAdd";
import ButtonDeleteAll from "../../components/Dashboard_Components/Button_Dash/ButtonDeleteAll";
import InputDash from "../../components/Dashboard_Components/Input_Dash/Input_Dash";
import Navbar from "../../components/Dashboard_Components/Navbar/Navbar";
import SelectDash from "../../components/Dashboard_Components/Select_Dash/SelectDash";
import WeekTabsDash from "../../components/Dashboard_Components/WeekTabs_Dash/WeekTabs_Dash";

import BigLogo from "../../components/Dashboard_Components/Images_Components/bigLogo";

import styles from './Dashboard.module.css'
// import ButtonDelete from "../../components/Dashboard_Components/Button_Dash/ButtonDelete";

const Dashboard = () => {
    const [task, setTask] = useState(null);
    const [weekDay, setWeekDay] = useState(null);
    const [hour, setHour] = useState(null);
      
    const handleTaskChange = (event) => {
      setTask(event.target.value);
    };
  
    const handleWeekDayChange = (event) => {
      setWeekDay(event.target.value);
    };
  
    const handleHourChange = (event) => {
      setHour(event.target.value);
    };
    
return (
    <>
        <div className={styles.all}>
            <div className={styles.content}>
                <Navbar />
                <div className={styles.body}>
                    <div className={styles.inputBtn}>
                        <div className={styles.inputSelect}>
                            <InputDash 
                            placeholder="Task or issue" 
                            name="insertTask" type="text" 
                            value={task} 
                            onChange={handleTaskChange} 
                            className={styles.taskInput}
                            required
                            />
                            <SelectDash 
                            placeholder="Monday" 
                            name="weekday" 
                            value={weekDay} 
                            onChange={handleWeekDayChange}
                            id="weekday" 
                            className={styles.weekDay} 
                            required
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
                            <ButtonAdd />
                            <ButtonDeleteAll />
                        </div>
                        <div className={styles.btnDash}>
                            
                        </div>
                    </div>
                    <div>
                        <WeekTabsDash />
                        <div>
        
                        </div>
                    </div>
                    <BigLogo />
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard