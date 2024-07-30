import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AccountsStack from './AccountsStack';

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
        name="AccountsRoutes"
        options={{headerShown: false, title: 'Accounts'}}
        component={AccountsStack}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
