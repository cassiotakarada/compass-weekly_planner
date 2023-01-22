import React, { Fragment, useState } from "react";
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
  return (
    <>
        <div className={styles.all}>
            <div className={styles.content}>
                <Navbar />
                <div className={styles.body}>
                    <div className={styles.inputBtn}>
                        <div className={styles.inputSelect}>
                            <InputDash placeholder="Task or issue" name="insert task" type="text" className={styles.taskInput} />
                            <SelectDash placeholder="Monday" name="week day" 
                            id="weekday" 
                            className={styles.weekDay} />
                            <InputDash placeholder="00h 00m" name="time" type="time" className={styles.time} />
                        </div>
                        <div className={styles.btnDash}>
                            <ButtonAdd />
                            <ButtonDeleteAll />
                        </div>
                    </div>
                    <div>
                        <WeekTabsDash />
                    </div>
                    <BigLogo />
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard