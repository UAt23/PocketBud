import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../routes';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
