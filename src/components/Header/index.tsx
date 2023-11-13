import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  title: string;
}

export const Header = (props: IProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.parentContainer}>
      <Pressable
        style={styles.leftContainer}
        onPress={() => navigation?.goBack()}>
        <FontAwesomeIcon icon={faChevronLeft} size={24} />
        <Text style={styles.titleText}>{props?.title}</Text>
      </Pressable>
      <View style={styles.dummyContainer} />
      <View style={styles.dummyContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    marginHorizontal: 4,
  },
  leftContainer: {flexDirection: 'row', alignItems: 'center'},
  titleText: {fontSize: 22, lineHeight: 28, fontWeight: '500'},
  dummyContainer: {height: 20, width: 20},
});
