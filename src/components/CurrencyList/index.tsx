import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {currency_data} from '../../utils/currencyData';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store/store';
import {
  setDestinationCurrencyCode,
  setSourceCurrencyCode,
} from '../../store/currencySlice';

const ITEM_HEIGHT = 60;

interface IProps {
  currencyData: Array<object>;
}

export const CurrencyList = (props: IProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const renderCurrencyItem = useCallback(({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.itemParentContainer}
        onPress={() => {
          if (route?.name === 'SourceCurrency') {
            dispatch(setSourceCurrencyCode(item));
          } else {
            dispatch(setDestinationCurrencyCode(item));
          }
          navigation?.goBack();
        }}>
        <Text style={styles.itemLeftIcon}>
          {/* @ts-ignore */}
          {currency_data[`${item?.code}`] || 'NA'}
        </Text>
        <Text style={styles.itemCenterText}>{item?.code}</Text>
        <Text style={styles.itemRightText}>{item?.name}</Text>
      </TouchableOpacity>
    );
  }, []);

  const renderCurrencyLoader = useCallback(() => {
    if (loading) {
      return <ActivityIndicator />;
    }
    return null;
  }, [loading]);

  const getItemLayout = useCallback(
    (item: object | null | undefined, index: number) => {
      const dataItems = item ?? [];
      return {
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * Object.keys(dataItems).length,
        index,
      };
    },
    [],
  );

  console.log('asdbasdasd', props?.currencyData);

  return (
    <FlatList
      data={props?.currencyData}
      renderItem={renderCurrencyItem}
      ListEmptyComponent={renderCurrencyLoader}
      keyExtractor={(item: any) => item?.code?.toString()}
      getItemLayout={getItemLayout}
      initialNumToRender={20}
      updateCellsBatchingPeriod={1000}
      maxToRenderPerBatch={5}
      onEndReachedThreshold={0.5}
      onEndReached={() => {}}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemParentContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
  },
  itemLeftIcon: {
    fontSize: 36,
  },
  itemCenterText: {
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 8,
    fontWeight: '500',
    width: '16%',
  },
  itemRightText: {fontSize: 16, lineHeight: 22, marginLeft: 8, opacity: 0.8},
});
