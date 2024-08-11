import {useState, useEffect} from 'react';
import {useNavigationState} from '@react-navigation/native';

const getActiveRouteName = (state: any) => {
  const route = state && state.routes[state.index];
  if (route) {
    if (route?.state) {
      return getActiveRouteName(route.state);
    }

    return route?.name;
  }
};

const useActiveRouteName = () => {
  const [activeRouteName, setActiveRouteName] = useState('');

  const navState = useNavigationState(state => state);

  useEffect(() => {
    const activeRouteName = getActiveRouteName(navState);
    setActiveRouteName(activeRouteName);
  }, [navState]);

  return activeRouteName;
};

export default useActiveRouteName;
