import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddTransaction from '../../components/AddTransaction/AddTransaction';
import CategorySelection from './CategorySelection';
import {getHeader} from '../../utils/functions';

const Stack = createStackNavigator();

const AddTransactionStack = ({navigation}: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen
        name="addTransaction"
        options={{
          header: getHeader('PocketBud', () => navigation.toggleDrawer()),
        }}
        component={AddTransaction}
      />
      <Stack.Screen
        name="categorySelection"
        options={{
          header: getHeader(
            'Select Category',
            () => navigation.navigate('addTransaction'),
            'arrow-left',
          ),
        }}
        component={CategorySelection}
      />
    </Stack.Navigator>
  );
};

export default AddTransactionStack;
