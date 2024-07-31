import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainTabs, Profile} from './routes';

const Drawer = createDrawerNavigator();

function Router() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerType: 'back',
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerBackgroundContainerStyle: {
              backgroundColor: '#fff',
            },
          }}>
          <Drawer.Screen name="PocketBud" options={{}} component={MainTabs} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Router;
