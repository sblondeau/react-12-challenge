import React from 'react';

function TabSelector(props) {

  const {activeId, handleChangeTab} = props;

  return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={handleChangeTab}
          className={activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={handleChangeTab}
          className={activeId === 'about' ? 'active' : ''}
        >
          About
        </button> 
        <button
          id="contact"
          onClick={handleChangeTab}
          className={activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  
}

export default TabSelector;
