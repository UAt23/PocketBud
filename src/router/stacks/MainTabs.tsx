import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AccountsStack from './AccountsStack';
import AddTransactionStack from './AddTransactionStack';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeRoutes"
        options={{headerShown: false, title: 'Home'}}
        component={HomeStack}
      />
      <Tab.Screen
        name="AddTransactionRoutes"
        options={{headerShown: false, title: 'Add'}}
        component={AddTransactionStack}
      />
      <Tab.Screen
        name="AccountsRoutes"
        options={{headerShown: false, title: 'Accounts'}}
        component={AccountsStack}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
