import React, { useState } from 'react';
import { MetaMask, Coinbase, Trust } from './wallets';
import { WALLET_NAMES } from '../utils/wallets';

export const WalletContainer = ({ walletName }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <>
      {walletName === WALLET_NAMES.META_MASK && (
        <MetaMask setErrorMessage={setErrorMessage} />
      )}
      {walletName === WALLET_NAMES.COIN_BASE && (
        <Coinbase setErrorMessage={setErrorMessage} />
      )}
      {walletName === WALLET_NAMES.TRUST && (
        <Trust setErrorMessage={setErrorMessage} />
      )}

      <div>{errorMessage}</div>
    </>
  );
};
