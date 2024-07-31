import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddTransaction from '../../components/AddTransaction/AddTransaction';

const Stack = createStackNavigator();

const AccountsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddTransaction"
        options={{headerShown: false}}
        component={AddTransaction}
      />
    </Stack.Navigator>
  );
};

export default AccountsStack;
