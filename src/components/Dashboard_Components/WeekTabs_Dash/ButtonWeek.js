import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setWeekDay } from '../WeekTabs_Dash/redux/DayOfWeekSlice';

import styles from './ButtonWeek.module.css';
import './ButtonWeek.css'

function ChangeButton({ id, onClick, isActive, title, defaultClass }) {
    return (
      <button onClick={() => onClick(id)} className={`${defaultClass} ${isActive ? 'active' : ''}`}>
        {title}
      </button>
    );
  }


function ButtonWeek( props ) {
    const [activeButton, setActiveButton] = useState(null);

    const dispatch = useDispatch(); 
  
    const handleClick = (id, color) => {
      setActiveButton(id);
    }

    const handleButtonClick = (color) => {
      props.setSelectedColor(color)
    }
  
    return (
        <div className={styles.tabs}>
            <div className={styles.containerWeekDays}>
                <ChangeButton 
                  defaultClass={styles.monday} 
                  title="Monday" id={1} 
                  onClick={() => {
                    dispatch(setWeekDay("monday"))
                    handleClick(1)
                  }} 
                  isActive={activeButton === 1} 
                />
                <ChangeButton 
                  defaultClass={styles.tuesday} 
                  title="Tuesday" id={2} 
                  onClick={() => {
                    dispatch(setWeekDay("tuesday"))
                    handleClick(2)
                  }} 
                  isActive={activeButton === 2} 
                />
                <ChangeButton 
                  defaultClass={styles.wednesday} 
                  title="Wednesday" id={3} 
                  onClick={() => {
                    dispatch(setWeekDay("wednesday"))
                    handleClick(3)
                  }} 
                  isActive={activeButton === 3} 
                />
                <ChangeButton 
                  defaultClass={styles.thursday} 
                  title="Thursday" id={4} 
                  onClick={() => {
                    dispatch(setWeekDay("thursday"))
                    handleClick(4)
                  }} 
                  isActive={activeButton === 4} 
                />
                <ChangeButton 
                  defaultClass={styles.friday} 
                  title="Friday" id={5} 
                  onClick={() => {
                    dispatch(setWeekDay("friday"))
                    handleClick(5)
                  }} 
                  isActive={activeButton === 5} 
                />
                <ChangeButton 
                  defaultClass={styles.saturday} 
                  title="Saturday" id={6} 
                  onClick={() => {
                    dispatch(setWeekDay("saturday"))
                    handleClick(6)
                  }} 
                  isActive={activeButton === 6} 
                />
                <ChangeButton 
                  defaultClass={styles.sunday} 
                  title="Sunday" id={7} 
                  onClick={() => {
                    dispatch(setWeekDay("sunday"))
                    handleClick(7)
                  }} 
                  isActive={activeButton === 7} 
                />
            </div>
      </div>
    );
  }

export default ButtonWeek;