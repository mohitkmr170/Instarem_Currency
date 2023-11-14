import React, {useEffect} from 'react';
import {View, StatusBar, useColorScheme} from 'react-native';
import {styles} from './styles';
import {CurrencyList, Header} from '../../components';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getCurrencyPairs} from '../../store/currencySlice';
import {AppDispatch, RootState} from '../../store/store';

const ALL_COUNTRY = 'AUD,HKD,MYR,SGD,USD,EUR,INR,GBP,CAD';

export const SourceCurrency = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sourceCurrencyData = useSelector(
    (state: RootState) => {
      const sourceCurrencyList: any = [];
      let data = state?.currency.currencyData?.data?.data;
      for (let i in data) {
        let tempObj = {
          code: data[i][0]?.source_currency_code,
          name: data[i][0]?.source_currency_name,
        };
        sourceCurrencyList.push(tempObj);
      }
      return sourceCurrencyList;
    },
    [shallowEqual],
  );

  useEffect(() => {
    dispatch(getCurrencyPairs(ALL_COUNTRY));
  }, [dispatch]);

  return (
    <View style={styles.parentContainer}>
      <StatusBar
        barStyle={
          useColorScheme() === 'dark' ? 'light-content' : 'dark-content'
        }
      />
      <Header title="Select Currency" />
      <View style={styles.mainContainer}>
        <CurrencyList currencyData={sourceCurrencyData} />
      </View>
    </View>
  );
};
