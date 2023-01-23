import React, { useState } from 'react';

import styles from 'Content.module.css';

const Content = () => {

    // const [activeButton, setActiveButton] = useState(null);
  
    // const handleClick = (id) => {
    //   setActiveButton(id);
    // }

  return (
    <div>
        <div className={styles.hourTime}>
            <div className={styles.colorTime}>
                <p className={styles.pTime}>Hour</p>
            </div>
            <div className={styles.dashContent}>
                <div className={styles.contentMonday}>
                    {/* <Content id={1} isActive={activeButton === 1} /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content