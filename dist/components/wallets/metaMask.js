import React from 'react';
import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
export const MetaMask = ({
  setErrorMessage
}) => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const getBalance = useCallback(address => {
    window.ethereum.request({
      method: 'eth_getBalance',
      params: [address.toString(), 'latest']
    }).then(bal => setBalance(ethers.utils.formatEther(bal)));
  }, []);
  const accountChangedHandler = useCallback(newAccount => {
    setAccount(newAccount);
    getBalance(newAccount);
  }, [getBalance]);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({
        method: 'eth_requestAccounts'
      }).then(result => {
        accountChangedHandler(result[0]);
      });
    } else {
      setErrorMessage('install metamask to continue');
    }
  }, [accountChangedHandler, setErrorMessage]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "MetaMask Wallet"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Account:"), /*#__PURE__*/React.createElement("span", {
    className: "wallet-info"
  }, account)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Balance:"), /*#__PURE__*/React.createElement("span", {
    className: "wallet-info"
  }, balance, " ETH")));
};