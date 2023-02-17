import React, { useState } from 'react';

import styles from './WeekTabs_Dash.module.css'

import ButtonDelete from '../Button_Dash/ButtonDelete';
import ButtonWeek from './ButtonWeek';
import Content from './FunctionContent';

import logo from '../../../assets/dash.png';

const WeekTabsDash = () => {


    return (
        <div className={styles.tabs}>
            <div className={styles.containerWeekDays}>
                <ButtonWeek /> 
            </div>
            
        </div>
    )
    }

export default WeekTabsDash;