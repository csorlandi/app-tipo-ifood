import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import Splash from '~/pages/Splash';
import Home from '~/pages/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#5663FF',
        inactiveTintColor: '#6E7FAA',
      }}
      barStyle={{
        backgroundColor: '#fff',
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="bookmarks"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="plus"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="plus-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="bell" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home-tabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="splash" component={Splash} />
    </Stack.Navigator>
  );
}
