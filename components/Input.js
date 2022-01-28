import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Input = ({
    leftIcon,
    iconColor ='#000',
    rigthIcon,
    inputStyle,
    containerStyle,
    placeholderTextColor = '#444',
    handlePasswordVisibility,
    ...rest
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {leftIcon ? (
            <MaterialCommunityIcons 
                name={leftIcon}
                size={25}
                color={iconColor}
                style={styles.leftIcon}
            />) : null}
            <TextInput placeholderTextColor={placeholderTextColor} style={[styles.input, inputStyle]} />
            {rigthIcon ? (
                <TouchableOpacity onPress={handlePasswordVisibility}>
                    <MaterialCommunityIcons
                        name={rigthIcon}
                        size={25}
                        color={iconColor}
                        style={styles.rigthIcon}
                    />
                </TouchableOpacity>
            ) : null}
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container:{
        borderRadius:5,
        flexDirection:'row',
        padding:12,
    },
    leftIcon:{
        marginRight:10,
    },
    input:{
        flex:1,
        width:'100%',
        fontSize: 18,
    },
    rigthIcon:{
        alignSelf:'center',
        marginLeft: 10,
    },
})
