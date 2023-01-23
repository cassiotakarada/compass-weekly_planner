import React, { useState } from 'react'

  
  function Content({ id, isActive }) {
    return (
      <div>
        {isActive && <p>Content for button {id}</p>}
      </div>
    );
  }

  export default Content;