import React from 'react';
import { wallets } from '../utils/wallets';

export const ChooseWallet = ({ onClickHandler }) => {
  return (
    <>
      <h3>Choose Wallet to Connect</h3>
      {wallets.map((wallet, i) => (
        <div
          key={`${wallet.id}-${i}`}
          className='wallet-list-item'
          onClick={() => onClickHandler(wallet.name)}
        >
          <img
            src={wallet.img}
            alt={`${wallet.name}-logo`}
            width='40'
            height='40'
          />
          <h4>{wallet.name}</h4>
        </div>
      ))}
    </>
  );
};
