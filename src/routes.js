import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import Splash from '~/pages/Splash';
import Home from '~/pages/Home';
import Categories from '~/pages/Categories';
import Filter from '~/pages/Filter';

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
      <Stack.Screen
        name="categories"
        component={Categories}
        options={{
          headerLeft: props => (
            <Icon name="chevron-left" size={28} {...props} />
          ),
          headerRight: props => <Icon name="search" size={24} {...props} />,
          headerTitleAlign: 'center',
          headerTitle: 'Category',
          headerTitleStyle: {
            color: '#222455',
            fontFamily: 'JosefinSans-SemiBold',
            fontSize: 24,
          },
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            borderWidth: 0,
            shadowColor: 'transparent',
          },
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: 16,
            paddingRight: 16,
          },
          headerRightContainerStyle: {
            paddingLeft: 16,
            paddingRight: 16,
          },
        }}
      />
      <Stack.Screen
        name="filter"
        component={Filter}
        options={{
          headerLeft: props => (
            <Icon name="chevron-left" size={32} {...props} />
          ),
          headerTitleAlign: 'center',
          headerTitle: 'Filter',
          headerTitleStyle: {
            color: '#222455',
            fontFamily: 'JosefinSans-SemiBold',
            fontSize: 24,
          },
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
            borderWidth: 0,
            shadowColor: 'transparent',
          },
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            paddingLeft: 16,
            paddingRight: 16,
          },
        }}
      />
      <Stack.Screen name="splash" component={Splash} />
    </Stack.Navigator>
  );
}
