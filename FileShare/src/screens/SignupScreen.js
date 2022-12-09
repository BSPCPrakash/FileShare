import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

import onSignUp from '../apiCallFunctions/signUp';

const SignupScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
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
      <CustomInput
        value={confirmPassword}
        setValue={setConfirmPassword}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
      />
      <CustomInput
        value={email}
        setValue={setEmail}
        placeholder={'Email'}
        secureTextEntry={false}
      />
      <CustomInput
        value={phonenumber}
        setValue={setPhoneNumber}
        placeholder={'Phone Number'}
        secureTextEntry={false}
      />
      <CustomButton
        placeholder={'Register'}
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 10,
    marginBottom: 5,
  },
});

export default SignupScreen;
