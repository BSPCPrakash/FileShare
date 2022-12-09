import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { AuthContext } from '../../../AuthProvider';
const SettingsTab = () => {
  const {setIsLoggedIn} = React.useContext(AuthContext);
  return (
  <View style={styles.container}>
      <Pressable
        style={styles.root}
        onPress={() => {
          console.log('Hello logout button');
          
          setIsLoggedIn(false);
        }}>
        <Text style={styles.input}>SignOut</Text>
      </Pressable>
  </View>
  );
};

export default SettingsTab;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 10,
    marginBottom: 5,
  },
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
