import React, { useState } from 'react';

import styles from './WeekTabs_Dash.module.css'

import ButtonDelete from '../Button_Dash/ButtonDelete';
import ButtonWeek from './ButtonWeek';
import Content from './FunctionContent';

const WeekTabsDash = () => {
    const [activeButton, setActiveButton] = useState(null);
  
    const handleClick = (id) => {
      setActiveButton(id);
    }

    const[index, setIndex]=useState(0);

    return (
        <div className={styles.tabs}>
            <div className={styles.containerWeekDays}>
                <ButtonWeek /> 
            </div>
            <div className={styles.dashHourContent}>
                <div className={styles.hourTasks}>
                    <div className={styles.time}>
                        <p className={styles.pTime}>Time</p>
                    </div>
                    <div className={styles.hourTime}>
                        <div className={styles.colorTime}>
                            <p className={styles.pTime}>Hour</p>
                        </div>
                    </div>
                </div>
                <div className={styles.dashContent}>
                    <div className={styles.contentMonday}>
                        <Content id={1} isActive={activeButton === 1} />
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default WeekTabsDash;