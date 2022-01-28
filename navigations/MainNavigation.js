import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/main/HomeScreen';

const MainNav = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <MainNav.Navigator headerMode="none">
            <MainNav.Screen name="Home" component={HomeScreen} />
        </MainNav.Navigator>
    )
}

export default MainNavigation
