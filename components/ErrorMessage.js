import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ErrorMessage = ({error, visible}) => {
    if(!error || !visible){
        return null;
    }
    return (
        <View>
            <Text style={styles.errorText}>⚠️ {error}</Text>;
        </View>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    errorText:{
        color:'#fdca40',
        fontSize:20,
        fontWeight:600,
        marginBottom:10,
    }
});
