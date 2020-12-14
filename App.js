import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      <AuthStack.Screen name="SignInScreen" component={SignInScreen} options={{ title: "Sign In" }} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: "Sign Up" }} />
    </AuthStack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  );
}
