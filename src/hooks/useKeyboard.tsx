import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export default function useKeyboard() {
  const [isKeyboardOpen, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return {isKeyboardOpen, setKeyboardStatus};
}
