import React from 'react';
export const Footer = ({
  buttonText,
  onClickHandler
}) => /*#__PURE__*/React.createElement("footer", null, buttonText && /*#__PURE__*/React.createElement("button", {
  onClick: onClickHandler
}, buttonText));