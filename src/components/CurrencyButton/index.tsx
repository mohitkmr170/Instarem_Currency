import {faCaretDown, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface IProps {
  onPress: () => void;
  currency: string;
}

export const CurrencyButton = (props: IProps) => {
  return (
    <Pressable onPress={props?.onPress} style={styles.parentContainer}>
      <FontAwesomeIcon icon={faCircleCheck} size={40} />
      <Text style={styles.currencyLabel}>{props?.currency}</Text>
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
});
