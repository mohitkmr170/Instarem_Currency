import React from 'react';
import {View, Text, StatusBar, useColorScheme} from 'react-native';
import {styles} from './styles';
import {Header} from '../../components';

export const SourceCurrency = () => {
  return (
    <View style={styles.parentContainer}>
      <StatusBar
        barStyle={
          useColorScheme() === 'dark' ? 'light-content' : 'dark-content'
        }
      />
      <Header title="Source Currency" />
      <View style={{flex: 1}}>
        <Text>Source Currency</Text>
      </View>
    </View>
  );
};
