import React, {useContext, useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator} from 'react-native';
import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from './UserAuthentication';

const auth = Firebase.auth()

const AppNavigation = () => {
    const [user, setUser] = useContext(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribeAuth = auth.onAuthStateChanged( async authenticatedUser =>{
            try {
                await (authenticatedUser ? setUser(authenticatedUser) :setUser(null))
            } catch (error) {
                console.log(error);
            }
        })
    }, []);
    
    if(isLoading){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    return (
        <NavigationContainer>
            { user ? <MainNavigation /> : <AuthNavigation /> }
        </NavigationContainer>
    )
}

export default AppNavigation
