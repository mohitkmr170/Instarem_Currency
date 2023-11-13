import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons/faCaretDown';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';

export const Home = (props: any): JSX.Element => {
  return (
    <View style={styles.parentContainer}>
      <Text>Home</Text>
      <Pressable onPress={() => props?.navigation?.navigate('SourceCurrency')}>
        <FontAwesomeIcon icon={faCaretDown} />
        <FontAwesomeIcon icon={faChevronLeft} />
        <Text>SourceCurrency</Text>
      </Pressable>
      <Pressable
        onPress={() => props?.navigation?.navigate('SupportedCurrency')}>
        <Text>SupportedCurrency</Text>
      </Pressable>
    </View>
  );
};
