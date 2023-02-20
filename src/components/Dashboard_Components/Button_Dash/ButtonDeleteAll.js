import React from 'react';
import { useDispatch } from 'react-redux';

import axios from "axios";

import { setWeekDay } from '../WeekTabs_Dash/redux/DayOfWeekSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ButtonDeleteAll.module.css'


const ButtonDeleteAll = ( { onClick } ) => {

  return (
    <div className={styles.buttonsDltAll}>
        <button className={styles.dltAll} onClick={onClick}>- Delete All</button>
    </div>
  )
}

export default ButtonDeleteAll;