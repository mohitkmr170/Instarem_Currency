import React, {useEffect, useState} from 'react';
import {View, StatusBar, useColorScheme, TextInput, Text} from 'react-native';
import {styles} from './styles';
import {CurrencyList, Header} from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {AppDispatch, RootState} from '../../store/store';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getCurrencyPairs} from '../../store/currencySlice';

export const SupportedCurrency = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [destinationSubCurrencyData, setDestinationSubCurrencyData] = useState(
    [],
  );
  const dispatch = useDispatch<AppDispatch>();
  const selectedSourceCurrency = useSelector(
    (state: RootState) => state?.currency.currencyPair?.source,
  );
  let destinationCurrencyData = useSelector(
    (state: RootState) => {
      const sourceCurrencyList: any = [];
      let data =
        state?.currency.currencyData?.data?.data[selectedSourceCurrency?.code];
      for (let i in data) {
        let tempObj = {
          code: data[i]?.destination_currency_code,
          name: data[i]?.destination_currency_name,
        };
        sourceCurrencyList.push(tempObj);
      }
      return sourceCurrencyList;
    },
    [shallowEqual],
  );

  useEffect(() => {
    dispatch(getCurrencyPairs(`${selectedSourceCurrency?.code}`));
  }, [dispatch]);

  const handleSearch = (value: any) => {
    setSearchText(value);
    let tempDestinationSubCurrencyData = destinationCurrencyData.filter(
      (item: any) => item.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setDestinationSubCurrencyData(tempDestinationSubCurrencyData);
  };

  return (
    <View style={styles.parentContainer}>
      <StatusBar
        barStyle={
          useColorScheme() === 'dark' ? 'light-content' : 'dark-content'
        }
      />
      <Header title="Select Currency" />
      <View style={styles.mainContainer}>
        {destinationCurrencyData.length > 9 && (
          <View style={styles.searchBoxContainer}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size={18} />
            <TextInput
              placeholder="Search Currency"
              style={styles.searchTextInput}
              onChangeText={value => handleSearch(value)}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="off"
            />
          </View>
        )}
        <Text>{searchText}</Text>
        <CurrencyList
          currencyData={
            searchText.length
              ? destinationSubCurrencyData
              : destinationCurrencyData
          }
        />
      </View>
    </View>
  );
};
