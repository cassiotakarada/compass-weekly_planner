import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Cards.module.css';

const Cards = ( props ) => {
    const [task, setTask] = useState([]);

    const token = localStorage.getItem('token');
    const tokenValidation = JSON.parse(token);

    const getApiTasks = async (day) => {
        
        const res = await axios.get(`https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek=${day}`,  
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokenValidation}`,
                },
            }
        )

        .then(res => {
            const initialTask = res.data.events;
            const mapTask = initialTask.map((task, index) => {
                return { ...task, description: task.description };
            });
        setTask(mapTask);
        })

        .catch(err => err.data)

        return res
    };

    const deleteDayTask = async (id) => {
        try {
        const response = await axios.delete(`https://latam-challenge-2.deta.dev/api/v1/events/${id}`,  
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tokenValidation}`,
            },
        });
    }
        catch(error) {}
        getApiTasks(props.day);
    };

    useEffect(() => {
        getApiTasks(props.day);
    }, [props.day, props.reload]);

    return ( 
        <div>
        <div className={styles.all}>
                    <div className={styles.time}>
                        <p className={styles.pTime}>Time</p>
                    </div>
            <div>
                {task.map((task) => {
                    return (
                        <div key={task.id} className={styles.card}>
                            <div className={styles.timeCard}>
                                <div className={styles.hour}>
                                    <p className={styles.pHour}>{task.createdAt.substring(11,16)}</p>
                                </div>
                            </div>
                            <div className={styles.descriptionCard}>
                                <div className={styles.ctnDescription}>
                                    <div className={styles.contentDescription}>
                                        <span className={styles.description}>{task.description}</span>
                                    </div>
                                    <div className={styles.btnDlt}>
                                        <button className={styles.dlt} onClick={() => deleteDayTask(task._id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
);
};

export default Cards;
