import {SafeAreaView, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import EncryptedStorage from 'react-native-encrypted-storage';
import {AuthContext} from '../../AuthProvider';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';



export const LoginScreen = ({navigation}) => {
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  const {setUser,setIsLoggedIn} = React.useContext(AuthContext);
  
  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        value={username}
        setValue={setUsername}
        placeholder={'Username'}
        secureTextEntry={false}
      />
      <CustomInput
        value={value}
        setValue={setValue}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <CustomButton
        placeholder={'Signin'}
        onPress={() => {
          console.log('Last step for Logging In');
          setUser(username);
          setIsLoggedIn(true);
        }}
      />
      <CustomButton
        placeholder={'SignUp'}
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 10,
    marginBottom: 5,
  },
});
