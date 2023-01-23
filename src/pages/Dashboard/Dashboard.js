import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ButtonAdd from "../../components/Dashboard_Components/Button_Dash/ButtonAdd";
import ButtonDeleteAll from "../../components/Dashboard_Components/Button_Dash/ButtonDeleteAll";
import InputDash from "../../components/Dashboard_Components/Input_Dash/Input_Dash";
import Navbar from "../../components/Dashboard_Components/Navbar/Navbar";
import SelectDash from "../../components/Dashboard_Components/Select_Dash/SelectDash";
import WeekTabsDash from "../../components/Dashboard_Components/WeekTabs_Dash/WeekTabs_Dash";

import BigLogo from "../../components/Dashboard_Components/Images_Components/bigLogo";

import styles from './Dashboard.module.css'

const Dashboard = () => {
    const [task, setTask] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [hour, setHour] = useState('');
    const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
  
    const handleTaskChange = (event) => {
      setTask(event.target.value);
    };
  
    const handleWeekDayChange = (event) => {
      setWeekDay(event.target.value);
    };
  
    const handleHourChange = (event) => {
      setHour(event.target.value);
    };
  
    const handleAddTask = () => {
      const newTask = { task, weekDay, hour };
      setTasks([...tasks, newTask]);
      localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));

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
                            defaultValue={task} 
                            onChange={handleTaskChange} 
                            className={styles.taskInput}
                            required
                            />
                            <SelectDash 
                            placeholder="Monday" 
                            name="weekday" 
                            defaultValue={weekDay} 
                            onChange={handleWeekDayChange}
                            id="weekday" 
                            className={styles.weekDay} 
                            required
                            />
                            <InputDash 
                            placeholder="00h 00m" 
                            name="time" 
                            type="time"
                            defaultValue={hour}
                            onChange={handleHourChange}
                            className={styles.time}
                            required
                            />
                            <button onClick={handleAddTask} className={styles.btnGreen}>+ Add to calendar</button>
                            <button onClick={handleAddTask} className={styles.btnRed}>- Delete All</button>
                        </div>
                        <div className={styles.btnDash}>
                            
                        </div>
                    </div>
                    <div>
                        <WeekTabsDash />
                        <div>
                            {tasks.map((task, index) => (
                            <div key={index}>
                                <p>{task.task}</p>
                                <p>{task.weekDay}</p>
                                <p>{task.hour}</p>
                            </div>
                            ))}
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