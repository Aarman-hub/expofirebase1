import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';

import { StyleSheet, Text, View, Button as RNButton } from 'react-native'

import Input from '../../components/Input';
import Button from '../../components/Button';
import ErrorMessage from '../../components/ErrorMessage';

import Firebase from '../../config/firebase';

const auth = Firebase.auth();


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisibility, setPasswordVisibility] = useState(true)
    const [rightIcon, setRightIcon] = useState('eye')
    const [loginError, setLoginError] = useState('')

    const handlePasswordVisibility = () =>{
        if(rightIcon === 'eye'){
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        }else if(rightIcon ==='eye-off'){
            setRightIcon('eye');
            setPasswordVisibility(!setPasswordVisibility)
        }
    };

    const onLogin = async () =>{
        try {
            if(email !=='' && password !==''){
                await auth.signInWithEmailAndPassword(email, password);
            }
        }catch(error){
            setLoginError(error.message);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style='dark-content' />
            <Text style={styles.title}>Login</Text>
            <Input
                inputStyle={{fontSize: 14}}
                containerStyle={{backgroundColor:'#fff', marginBottom: 20}}
                leftIcon='email'
                placeholder='Enter Email'
                autoCapitalize='none'
                keyboardType='emailAddress'
                autoFocus={true}
                value={email}
                onChangeText={text=>setEmail(text)}
            />
            <Input
                inputStyle={{
                fontSize: 14
                }}
                containerStyle={{
                backgroundColor: '#fff',
                marginBottom: 20
                }}
                leftIcon='lock'
                placeholder='Enter password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={passwordVisibility}
                textContentType='password'
                rightIcon='eye'
                value={password}
                onChangeText={text => setPassword(text)}
                handlePasswordVisibility={handlePasswordVisibility}
            />
            <Button
                onPress={onLogin}
                backgroundColor='#f57c00'
                title='Login'
                titleColor='#fff'
                titleSize={25}
                containerStyle={{
                    marginBottom: 24
                }}
            />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e93b81',
        paddingTop: 50,
        paddingHorizontal:12,
    },
    title:{
        fontSize:24,
        fontWeight:'600',
        color:'#fff',
        alignSelf:'center',
        paddingBottom:24,
    },
})
