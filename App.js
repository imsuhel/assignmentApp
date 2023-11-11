import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/utils/Routes';
import colors from './src/utils/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
