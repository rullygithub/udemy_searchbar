import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <TextInput
        placeholder="Search something ..."
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Icon style={styles.icon} name="search" size={20} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#E7CBCB',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
});
