import React, { useState } from 'react'

import styles from './Teste.module.css'
    
function ChangeButton({ id, onChange, isActive }) {
    const handleClick = () => {
      onChange(id);
    }
  
    return (
      <button onClick={handleClick} className={isActive ? 'active' : ''}>
        Change
      </button>
    );
  }

export default ChangeButton;