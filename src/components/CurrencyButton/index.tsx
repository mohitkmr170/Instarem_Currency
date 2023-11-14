import {faCaretDown, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {currency_data} from '../../utils/currencyData';

interface IProps {
  onPress: () => void;
  currency: {
    code: string;
    name: string;
  };
}

export const CurrencyButton = (props: IProps) => {
  return (
    <Pressable onPress={props?.onPress} style={styles.parentContainer}>
      <Text style={styles.flagCurrencyText}>
        {/* @ts-ignore */}
        {currency_data[`${props?.currency?.code}`]}
      </Text>
      <Text style={styles.currencyLabel}>{props?.currency?.code}</Text>
      <FontAwesomeIcon icon={faCaretDown} size={24} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%',
    marginVertical: 16,
  },
  currencyLabel: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '500',
  },
  flagCurrencyText: {fontSize: 40},
});
