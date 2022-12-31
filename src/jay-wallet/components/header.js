import React from 'react';

export const Header = ({ onCloseHandler, showBack, moveBackward }) => (
  <header>
    {showBack ? (
      <button className='back' onClick={moveBackward} />
    ) : (
      <div></div>
    )}
    <div className='logo'>J</div>
    <div className='close' onClick={() => onCloseHandler()}></div>
  </header>
);
