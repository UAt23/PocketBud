import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainTabs, Profile} from '../routes';
import useActiveRouteName from '../../hooks/useActiveRouteName';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  const activeRouteName = useActiveRouteName();
  const shouldHideHeader = activeRouteName === 'categorySelection';

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'back',
        headerTitleAlign: 'center',
        headerShown: false,
      }}>
      <Drawer.Screen name="PocketBud" options={{}} component={MainTabs} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
