import React, { useState } from 'react'

// import './SiblingsComponent.css';

// import ChangeButton from './AnotherTest';

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
  
  function SiblingComponent() {
    const [activeButton, setActiveButton] = useState(null);
  
    const handleClick = (id) => {
      setActiveButton(id);
    }
  
    return (
      <div>
        <ChangeButton defaultClass="monday" title="Monday" id={1} onClick={handleClick} isActive={activeButton === 1} />
        <ChangeButton title="Tuesday" id={2} onClick={handleClick} isActive={activeButton === 2} />
        <ChangeButton title="Wednesday" id={3} onClick={handleClick} isActive={activeButton === 3} />
        <Content id={1} isActive={activeButton === 1} />
        <Content id={2} isActive={activeButton === 2} />
        <Content id={3} isActive={activeButton === 3} />
      </div>
    );
  }

export default SiblingComponent;