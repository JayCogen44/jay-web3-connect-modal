import React from 'react';
export const Header = ({
  onCloseHandler,
  showBack,
  moveBackward
}) => /*#__PURE__*/React.createElement("header", null, showBack ? /*#__PURE__*/React.createElement("button", {
  className: "back",
  onClick: moveBackward
}) : /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
  className: "logo"
}, "J"), /*#__PURE__*/React.createElement("div", {
  className: "close",
  onClick: () => onCloseHandler()
}));