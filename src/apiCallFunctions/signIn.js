import axios from 'axios';
import { ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {signIn} from '../redux/actions/actions';
import  AsyncStorage  from '@react-native-community/async-storage';

const onSignIn = async (username, password, setIsLoggedIn) => {
  const data = {
    username: username,
    password: password,
  };
  await axios
    .post('http://172.20.10.3:5000/login', data)
    .then(res => {
      const serverResponse = res.data["message"];
      console.log(res.data["message"]);

      if(serverResponse=='Correct'){
        AsyncStorage.setItem("Username",username,()=>{
          setIsLoggedIn(true);
        });
        
      }
      else{
         setIsLoggedIn(false);
      }
    })
    .catch(error => {
      console.log(error);
      ToastAndroid.showWithGravity(
        'Server Error',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    });
  
};
export default onSignIn;
