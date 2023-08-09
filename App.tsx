import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SplashScreen, Signup} from './src/view';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tabs} from './src/component';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen">
        <Stack.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: '#45B3E6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: 'Signup',
            headerStyle: {
              backgroundColor: '#45B3E6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
