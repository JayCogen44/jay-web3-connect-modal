import React from 'react';
import { wallets } from '../utils/wallets';
export const ChooseWallet = ({
  onClickHandler
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, "Choose Wallet to Connect"), wallets.map((wallet, i) => /*#__PURE__*/React.createElement("div", {
    key: `${wallet.id}-${i}`,
    className: "wallet-list-item",
    onClick: () => onClickHandler(wallet.name)
  }, /*#__PURE__*/React.createElement("img", {
    src: wallet.img,
    alt: `${wallet.name}-logo`,
    width: "40",
    height: "40"
  }), /*#__PURE__*/React.createElement("h4", null, wallet.name))));
};