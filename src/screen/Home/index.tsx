import React from 'react';
import {View} from 'react-native';
import {CurrencyButton} from '../../components';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

export const Home = (props: any): JSX.Element => {
  const selectedCurrency = useSelector(
    (state: RootState) => state?.currency.currencyPair,
  );

  return (
    <View style={styles.parentContainer}>
      <CurrencyButton
        currency={selectedCurrency?.source}
        onPress={() => props?.navigation?.navigate('SourceCurrency')}
      />
      <CurrencyButton
        currency={selectedCurrency?.destination}
        onPress={() => props?.navigation?.navigate('SupportedCurrency')}
      />
    </View>
  );
};
