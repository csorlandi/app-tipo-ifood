import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import Splash from '~/pages/Splash';
import Home from '~/pages/Home';
import Categories from '~/pages/Categories';
import Filter from '~/pages/Filter';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import SetLocation from '~/pages/SetLocation';

import HeaderButton from '~/components/HeaderButton';
import TabBarIcon from '~/components/TabBarIcon';

Icon.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#5663FF',
        inactiveTintColor: 'rgba(110,127,170,0.5)',
      }}
      barStyle={{
        backgroundColor: '#fff',
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: props => <TabBarIcon iconName="home" {...props} />,
        }}
      />
      <Tab.Screen
        name="bookmarks"
        component={Home}
        options={{
          tabBarIcon: props => <TabBarIcon iconName="bookmark" {...props} />,
        }}
      />
      <Tab.Screen
        name="plus"
        component={Home}
        options={{
          tabBarIcon: props => <TabBarIcon iconName="add-circle" {...props} />,
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Home}
        options={{
          tabBarIcon: props => (
            <TabBarIcon iconName="notifications" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Home}
        options={{
          tabBarIcon: props => <TabBarIcon iconName="person" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-in"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="forgot-password"
        component={ForgotPassword}
        options={{
          headerLeft: props => (
            <HeaderButton
              iconName="chevron-left"
              iconSize={28}
              light
              {...props}
            />
          ),
          headerTransparent: true,
          headerTitleAlign: 'center',
          title: 'Forgot Password',
          headerTitleStyle: {
            color: '#fff',
            fontFamily: 'JosefinSans-SemiBold',
            fontSize: 24,
          },
          headerStyle: {
            elevation: 0,
            borderWidth: 0,
            shadowColor: 'transparent',
          },
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="set-location"
        component={SetLocation}
        options={{
          headerShown: false,
        }}
      />
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
            <HeaderButton iconName="chevron-left" iconSize={28} {...props} />
          ),
          headerRight: props => (
            <HeaderButton iconName="search" iconSize={24} {...props} />
          ),
          headerTitleAlign: 'center',
          title: 'Category',
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
        }}
      />
      <Stack.Screen
        name="filter"
        component={Filter}
        options={{
          headerLeft: props => (
            <HeaderButton iconName="chevron-left" iconSize={28} {...props} />
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
        }}
      />
    </Stack.Navigator>
  );
}
