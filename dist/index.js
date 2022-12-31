import React, { useCallback } from 'react';
import './styles.scss';
import { Footer, Header, Landing, ChooseWallet, WalletContainer } from './components';
import { SCREENS } from './utils/constants';
import { useStateMachine } from './utils/stateMachine';
export const JWallet = ({
  onCloseHandler
}) => {
  const {
    wallet,
    screenState,
    moveBackward,
    moveForward
  } = useStateMachine();
  const renderComponent = useCallback(state => {
    switch (state) {
      case SCREENS.LANDING:
        return /*#__PURE__*/React.createElement(Landing, null);
      case SCREENS.CHOOSE_WALLET:
        return /*#__PURE__*/React.createElement(ChooseWallet, {
          onClickHandler: moveForward
        });
      case SCREENS.WALLET:
        return /*#__PURE__*/React.createElement(WalletContainer, {
          walletName: wallet
        });
      default:
        return /*#__PURE__*/React.createElement(Landing, null);
    }
  }, [moveForward, wallet]);
  return /*#__PURE__*/React.createElement("div", {
    className: "connect-modal-bg",
    tabIndex: "0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "connect-modal"
  }, /*#__PURE__*/React.createElement(Header, {
    headerText: "Jay Wallet",
    showBack: screenState !== SCREENS.LANDING,
    moveBackward: moveBackward,
    onCloseHandler: onCloseHandler
  }), /*#__PURE__*/React.createElement("div", {
    className: "connect-modal-content"
  }, renderComponent(screenState)), /*#__PURE__*/React.createElement(Footer, {
    onClickHandler: () => moveForward(),
    buttonText: screenState === SCREENS.LANDING ? 'Continue' : null
  })));
};