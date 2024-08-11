import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddTransaction from '../../components/AddTransaction/AddTransaction';
import CategorySelection from './CategorySelection';
import {getHeader} from '../../utils/functions';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const AccountsStack = ({navigation}: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen
        name="addTransaction"
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          headerMode: 'float',
          header: getHeader('PocketBud', () => navigation.toggleDrawer()),
        }}
        component={AddTransaction}
      />
      <Stack.Screen
        name="categorySelection"
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          headerMode: 'float',
          header: getHeader(
            'Select Category',
            () => navigation.goBack(),
            'arrowleft',
          ),
        }}
        component={CategorySelection}
      />
    </Stack.Navigator>
  );
};

export default AccountsStack;
