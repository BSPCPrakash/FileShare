import {SafeAreaView, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import EncryptedStorage from 'react-native-encrypted-storage';
import {AuthContext} from '../../AuthProvider';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import onSignIn from '../apiCallFunctions/signIn';



export const LoginScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
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
        value={password}
        setValue={setPassword}
        placeholder={'Password'}
        secureTextEntry={true}
      />
      <CustomButton
        placeholder={'Signin'}
        onPress={()=>{
          
          onSignIn(username,password,setIsLoggedIn);
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
