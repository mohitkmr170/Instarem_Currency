import React from 'react';
import {View, Text, StatusBar, useColorScheme} from 'react-native';
import {styles} from './styles';

export const SupportedCurrency = () => {
  return (
    <View style={styles.parentContainer}>
      <StatusBar
        barStyle={
          useColorScheme() === 'dark' ? 'light-content' : 'dark-content'
        }
      />
      <Text>SupportedCurrency</Text>
    </View>
  );
};
