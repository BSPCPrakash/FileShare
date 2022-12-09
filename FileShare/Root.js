import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import {useContext} from 'react';
import {AuthContext} from './AuthProvider';
const Stack = createNativeStackNavigator();

const Root = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
        isLoggedIn ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignupScreen} />
          </>
        )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
