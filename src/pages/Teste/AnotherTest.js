import React, { Component } from 'react';
import './SiblingComponent.css';

function ChangeButton({ id, onClick, isActive }) {
    return (
      <button onClick={() => onClick(id)} className={`default ${isActive ? 'active' : ''}`}>
        Change
      </button>
    );
  }
  
export default ChangeButton;