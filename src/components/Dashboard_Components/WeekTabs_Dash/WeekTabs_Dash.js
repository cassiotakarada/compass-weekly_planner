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
            <div className={styles.dashHourContent}>
                <div className={styles.hourTasks}>
                    <div className={styles.time}>
                        <p className={styles.pTime}>Time</p>
                    </div>
                <div className={styles.hourTime}>
                    <div className={styles.colorTime}>
                        <p className={styles.pTime}>10:00</p>
                    </div>
                    <div className={styles.colorTime}>
                        <p className={styles.pTime}>10:30</p>
                    </div>
                    <div className={styles.colorTime}>
                        <p className={styles.pTime}>13:00</p>
                    </div>
                    <div className={styles.colorTime}>
                        <p className={styles.pTime}>14:00</p>
                    </div>
                    <div className={styles.colorTime}>
                        <p className={styles.pTime}>15:15</p>
                    </div>
                    <div className={styles.colorTime}>
                        <p className={styles.pTime}>16:10</p>
                    </div>
                    <div className={styles.colorTime}>
                        <p className={styles.pTime}>16:30</p>
                    </div>
                </div>
                </div>
            <div>
                <div className={styles.firstHour}>
                    <div className={styles.dashContentTemp}>
                        <div className={styles.contentMonday}>
                            <div className={styles.para}>
                                <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
                            </div>
                            <div>
                                <ButtonDelete />
                            </div>
                        </div>
                    </div>
                    <div className={styles.dashContentTemp}>
                        <div className={styles.contentMonday}>
                        <div className={styles.para}>
                                <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
                            </div>
                            <div>
                                <ButtonDelete />
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={styles.secondHour}>
                        <div className={styles.dashContent}>
                            <div className={styles.contentMonday}>
                            <div className={styles.para}>
                                <p>Only coffee can help.</p>
                            </div>
                            <div>
                                <ButtonDelete />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.thirdHour}>
                        <div className={styles.dashContentTemp2}>
                            <div className={styles.contentMonday}>
                            <div className={styles.para}>
                                <p>Hooray! Daily Time.</p>
                            </div>
                            <div>
                                <ButtonDelete />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.thirdHour}>
                        <div className={styles.dashContentTemp3}>
                            <div className={styles.contentMonday}>
                            <div className={styles.para}>
                                <p> ► Done is better than perfect.</p>
                            </div>
                            <div>
                                <ButtonDelete />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.thirdHour}>
                        <div className={styles.dashContentTemp3}>
                            <div className={styles.contentMonday}>
                            <div className={styles.para}>
                                <p>Coffee Break.</p>
                            </div>
                            <div>
                                <ButtonDelete />
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.firstHour}>
                    <div className={styles.dashContentTemp4}>
                        <div className={styles.contentMonday}>
                            <div className={styles.para}>
                                <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
                            </div>
                            <div>
                                <ButtonDelete />
                            </div>
                        </div>
                    </div>
                    <div className={styles.dashContentTemp4}>
                        <div className={styles.contentMonday}>
                            <div className={styles.para}>
                                <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
                            </div>
                            <div>
                                <ButtonDelete />
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={styles.thirdHour}>
                        <div className={styles.dashContentTemp3}>
                            <div className={styles.contentMonday}>
                                <div className={styles.para}><p>Finish working.</p>
                                </div>
                                <div>
                                <ButtonDelete />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={logo} alt="compass.logo" className={styles.dash1} />
            <img src={logo} alt="compass.logo" className={styles.dash2} />
        </div>
    )
    }

export default WeekTabsDash;