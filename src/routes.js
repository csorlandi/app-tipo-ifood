import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Splash from '~/pages/Splash';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="splash" component={Splash} />
    </Stack.Navigator>
  );
}
