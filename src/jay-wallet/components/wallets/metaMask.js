import React from 'react';
import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';

export const MetaMask = ({ setErrorMessage }) => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  const getBalance = useCallback((address) => {
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [address.toString(), 'latest'],
      })
      .then((bal) => setBalance(ethers.utils.formatEther(bal)));
  }, []);

  const accountChangedHandler = useCallback(
    (newAccount) => {
      setAccount(newAccount);
      getBalance(newAccount);
    },
    [getBalance]
  );

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      setErrorMessage('install metamask to continue');
    }
  }, [accountChangedHandler, setErrorMessage]);

  return (
    <>
      <h2>MetaMask Wallet</h2>
      <div>
        <h5>Account:</h5>
        <span className='wallet-info'>{account}</span>
      </div>
      <div>
        <h5>Balance:</h5>
        <span className='wallet-info'>{balance} ETH</span>
      </div>
    </>
  );
};
