import React, { useState } from 'react';
import { MetaMask, Coinbase, Trust } from './wallets';
import { WALLET_NAMES } from '../utils/wallets';
export const WalletContainer = ({
  walletName
}) => {
  const [errorMessage, setErrorMessage] = useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, walletName === WALLET_NAMES.META_MASK && /*#__PURE__*/React.createElement(MetaMask, {
    setErrorMessage: setErrorMessage
  }), walletName === WALLET_NAMES.COIN_BASE && /*#__PURE__*/React.createElement(Coinbase, {
    setErrorMessage: setErrorMessage
  }), walletName === WALLET_NAMES.TRUST && /*#__PURE__*/React.createElement(Trust, {
    setErrorMessage: setErrorMessage
  }), /*#__PURE__*/React.createElement("div", null, errorMessage));
};