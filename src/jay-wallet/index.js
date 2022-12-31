import React, { useCallback } from 'react';
import './styles.scss';
import {
  Footer,
  Header,
  Landing,
  ChooseWallet,
  WalletContainer,
} from './components';
import { SCREENS } from './utils/constants';
import { useStateMachine } from './utils/stateMachine';

export const JWallet = ({ onCloseHandler }) => {
  const { wallet, screenState, moveBackward, moveForward } = useStateMachine();

  const renderComponent = useCallback(
    (state) => {
      switch (state) {
        case SCREENS.LANDING:
          return <Landing />;
        case SCREENS.CHOOSE_WALLET:
          return <ChooseWallet onClickHandler={moveForward} />;
        case SCREENS.WALLET:
          return <WalletContainer walletName={wallet} />;
        default:
          return <Landing />;
      }
    },
    [moveForward, wallet]
  );

  return (
    <div className='connect-modal-bg' tabIndex='0'>
      <div className='connect-modal'>
        <Header
          headerText='Jay Wallet'
          showBack={screenState !== SCREENS.LANDING}
          moveBackward={moveBackward}
          onCloseHandler={onCloseHandler}
        />
        <div className='connect-modal-content'>
          {renderComponent(screenState)}
        </div>
        <Footer
          onClickHandler={() => moveForward()}
          buttonText={screenState === SCREENS.LANDING ? 'Continue' : null}
        />
      </div>
    </div>
  );
};
