import {Button, StyleSheet, Pressable, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReceivingTab from './Tabs/ReceivingTab';
import HomeTab from './Tabs/HomeTab';
import SettingsTab from './Tabs/SettingsTab';
const Tab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <NavigationContainer style={styles.container} independent={true}>
      
      <Tab.Navigator screenOptions={({}) => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home Tab" component={HomeTab} />
        <Tab.Screen name="Receiver Tab" component={ReceivingTab} />
        <Tab.Screen name="Settings Tab" component={SettingsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;

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
