import React, { useEffect, useState } from 'react';

import styles from './Clock.module.css'

const Clock = () => {
    const[clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12:false}));
        }, 1000);
    }, []);

    return (
        <div>
            <h1 className={styles.clockComponent}>{clockState}</h1>
        </div>
    )
}

export default Clock;