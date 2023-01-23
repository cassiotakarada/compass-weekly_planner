import React, { useState } from 'react';

import styles from 'Content.module.css';

function Content({ id, isActive, taskDescription }) {
    return (
        <div>
        {isActive && <p>{ taskDescription } {id}</p>}
        </div>
    );
    
}

export default Content