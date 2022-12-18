import {NavigationHelpersContext} from '@react-navigation/native';
import axios from 'axios';
import {ToastAndroid} from 'react-native';

const onSignUp = async (
  username,
  password,
  email,
  phonenumber,
  confirmPassword,
) => {
  console.log('Process of Sign Up');

  const data = {
    username: username,
    password: password,
    email: email,
    phonenumber: phonenumber,
  };
  await axios
    .post('http://192.168.29.247:5000/register', data)
    .then(res => {
      console.log(res);
      if (res.body['message'] == 'User Registered') {
        ToastAndroid.showWithGravity(
          'User Registered',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else if (res.body['message'] == 'User Already Registered') {
        ToastAndroid.showWithGravity(
          'User Already Exists With this username',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else {
        ToastAndroid.showWithGravity(
          'Server Error',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    })
    .catch(error => {
      console.log(error);
    });
};
export default onSignUp;
