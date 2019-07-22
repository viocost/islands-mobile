import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import  LoginScreen  from "./screens/Login";
import { Abc } from "./screens/Login.js"
require('node-libs-react-native/globals')

console.log("Login is: " + LoginScreen)

const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(createSwitchNavigator(
    {
	Auth: AuthStack
    },
    {
	initialRouteName: 'Auth'
    }
))
