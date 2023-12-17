import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SplashScreen, Signup, Detail} from './src/view';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tabs} from './src/component';
import {UserProvider} from './src/context/context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <UserProvider>
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
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              title: 'Detail',
              headerStyle: {
                backgroundColor: '#45B3E6',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default App;
