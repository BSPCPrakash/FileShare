import {SafeAreaView, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CustomButton = ({placeholder, onPress}) => {
  return (
    <SafeAreaView>
      <Pressable onPress={onPress} style={styles.root}>
        <Text style={styles.input}>{placeholder}</Text>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#cc7852',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  input: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default CustomButton;
