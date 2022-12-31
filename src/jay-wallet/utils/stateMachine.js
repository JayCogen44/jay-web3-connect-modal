import { useState, useCallback } from 'react';
import { SCREENS } from './constants';

const screenStates = [SCREENS.LANDING, SCREENS.CHOOSE_WALLET, SCREENS.WALLET];

export const useStateMachine = () => {
  const [screenState, setScreenState] = useState(screenStates[0]);
  const [wallet, setWallet] = useState('');

  const moveForward = useCallback(
    (wallet = null) => {
      if (wallet) {
        setWallet(wallet);
        setScreenState(SCREENS.WALLET);
      } else {
        const next = screenStates[screenStates.indexOf(screenState) + 1];
        if (next) {
          setScreenState(next);
        }
      }
    },
    [screenState]
  );

  const moveBackward = useCallback(() => {
    const prev = screenStates[screenStates.indexOf(screenState) - 1];
    setScreenState(prev);
  }, [screenState]);

  return { wallet, screenState, moveBackward, moveForward };
};
