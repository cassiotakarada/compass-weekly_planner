import React, { useState } from 'react'

import styles from './ButtonWeek.module.css';
import './ButtonWeek.css'

function ChangeButton({ id, onClick, isActive, title, defaultClass }) {
    return (
      <button onClick={() => onClick(id)} className={`${defaultClass} ${isActive ? 'active' : ''}`}>
        {title}
      </button>
    );
  }

function Content({ id, isActive }) {
return (
    <div>
    {isActive && <p>Content for button {id}</p>}
    </div>
);
}

function ButtonWeek() {
    const [activeButton, setActiveButton] = useState(null);
  
    const handleClick = (id) => {
      setActiveButton(id);
    }
  
    return (
        <div className={styles.tabs}>
            <div className={styles.containerWeekDays}>
                <ChangeButton defaultClass={styles.monday} title="Monday" id={1} onClick={handleClick} isActive={activeButton === 1} />
                <ChangeButton defaultClass={styles.tuesday} title="Tuesday" id={2} onClick={handleClick} isActive={activeButton === 2} />
                <ChangeButton defaultClass={styles.wednesday} title="Wednesday" id={3} onClick={handleClick} isActive={activeButton === 3} />
                <ChangeButton defaultClass={styles.thursday} title="Thursday" id={4} onClick={handleClick} isActive={activeButton === 4} />
                <ChangeButton defaultClass={styles.friday} title="Friday" id={5} onClick={handleClick} isActive={activeButton === 5} />
                <ChangeButton defaultClass={styles.saturday} title="Saturday" id={6} onClick={handleClick} isActive={activeButton === 6} />
                <ChangeButton defaultClass={styles.sunday} title="Sunday" id={7} onClick={handleClick} isActive={activeButton === 7} />
            </div>
            <div className={styles.contentMonday}>
                <Content id={1} isActive={activeButton === 1} />
            </div>
      </div>
    );
  }

export default ButtonWeek;