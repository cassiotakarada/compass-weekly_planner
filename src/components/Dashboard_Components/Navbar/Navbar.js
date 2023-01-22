import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Clock from '../Clock/Clock';
import CurrentDate from '../Date/Date';
import Weather from '../Weather/Weather';

import styles from './Navbar.module.css';

import logo from '../../../assets/compass_logo_black.svg';
import logout from '../../../assets/logout_arrow.svg';

const Navbar = () => {
  return (
    <>
        <nav>
            <div className={styles.contentNavbar}>
                <div className={styles.first}>
                <h3 className={styles.h3Dash}>Weekly Planner</h3>
                <p className={styles.paragraphDash}>Use this planner to organize your daily issues.</p>
                </div>
                <div className={styles.second}>
                    <div className={styles.Clock}>
                        <Clock />
                    </div>
                    <div className={styles.CurrentDate}>
                        <CurrentDate />
                    </div>
                </div>
                <div className={styles.third}>
                    <Weather />
                </div>
                <div className={styles.imgs}>
                    <div className={styles.logoBlackCompass}>
                        <a href="https://compass.uol/pt/home/?utm_source=google-ads&utm_medium=ppc&utm_campaign=compasso-uol-institucional&utm_term=compass%20uol&gclid=Cj0KCQiAt66eBhCnARIsAKf3ZNGKHQykhpgscHt5KhxoA9TUJr4f2e4jaIamKuuvu4PtV7EVGbhQMvgaAs8fEALw_wcB"><img src={logo} alt="compass.logo" /></a>
                    </div>
                    <div className={styles.logoLogoutArrow}>
                        <img src={logout} alt="compass.logo" />
                        <p className={styles.logout}>Logout</p>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar