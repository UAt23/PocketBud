import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Accounts} from '../routes';

const Stack = createStackNavigator();

const AccountsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accounts"
        options={{headerShown: false}}
        component={Accounts}
      />
    </Stack.Navigator>
  );
};

export default AccountsStack;
