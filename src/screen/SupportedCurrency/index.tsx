import React, {useState} from 'react';
import {
  View,
  StatusBar,
  useColorScheme,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import {styles} from './styles';
import {Header} from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const SupportedCurrency = () => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.parentContainer}>
        <StatusBar
          barStyle={
            useColorScheme() === 'dark' ? 'light-content' : 'dark-content'
          }
        />
        <Header title="Supported Currency" />
        <View style={styles.mainContainer}>
          <View style={styles.searchBoxContainer}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size={18} />
            <TextInput
              placeholder="Search Currency"
              style={styles.searchTextInput}
              onChangeText={value => setSearchText(value)}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="off"
            />
          </View>
          <Text>{searchText}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
