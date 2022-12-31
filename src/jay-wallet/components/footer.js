import React from 'react';

export const Footer = ({ buttonText, onClickHandler }) => (
  <footer>
    {buttonText && <button onClick={onClickHandler}>{buttonText}</button>}
  </footer>
);
