import * as React from 'react';
import {Directory, Profile} from '../../view';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Directory"
        component={Directory}
        options={{
          title: 'Directory',
          headerStyle: {
            backgroundColor: '#45B3E6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#45B3E6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
