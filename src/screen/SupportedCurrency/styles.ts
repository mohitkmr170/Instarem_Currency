import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  parentContainer: {flex: 1},
  mainContainer: {
    flex: 1,
    margin: 4,
    marginHorizontal: 8,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderBottomColor: 'cyan',
    borderBottomWidth: 0.7,
    padding: 12,
    alignItems: 'center',
  },
  searchTextInput: {marginLeft: 8, fontSize: 18, lineHeight: 22},
});
