import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

const AuthNav = createNativeStackNavigator();


const AuthNavigation = () => {
    return (
        <AuthNav.Navigator headerMode='none'>
            <AuthNav.Screen name="Login" component={LoginScreen} /> 
            <AuthNav.Screen name="Register" component={RegisterScreen} /> 
        </AuthNav.Navigator>
    )
}

export default AuthNavigation
