import React from 'react';
import {View} from 'react-native';
import {CurrencyButton} from '../../components';
import {styles} from './styles';

export const Home = (props: any): JSX.Element => {
  return (
    <View style={styles.parentContainer}>
      <CurrencyButton
        currency="Src C"
        onPress={() => props?.navigation?.navigate('SourceCurrency')}
      />
      <CurrencyButton
        currency="Sup C"
        onPress={() => props?.navigation?.navigate('SupportedCurrency')}
      />
    </View>
  );
};
