import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../routes';
import {getHeader} from '../../utils/functions';

const Stack = createStackNavigator();

const HomeStack = ({navigation}: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerMode: 'float',
          header: getHeader('PocketBud', () => navigation.toggleDrawer()),
        }}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
