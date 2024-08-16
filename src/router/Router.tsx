import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNav from './stacks/DrawerNav';
import store from '../store/store';
import {Provider} from 'react-redux';

function Router() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <DrawerNav />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default Router;
