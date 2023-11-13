import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {Home, SourceCurrency, SupportedCurrency} from '../screen';

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="SourceCurrency"
        component={SourceCurrency}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen
        name="SupportedCurrency"
        component={SupportedCurrency}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
}
