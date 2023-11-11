import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ScreenName from './ScreenName';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenName.PROFILE_SCREEN}>
      <Stack.Screen
        name={ScreenName.PROFILE_SCREEN}
        component={ProfileScreen}
      />
      <Stack.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
