import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export default function InputOne(props) {

    // Icon es el nombre del icono, placeholder el texto que muestra cuando no hay input, secure es para constrasenas, marginBottom es 32 por defecto

    const { icon, placeholder, secure, marginBottom, onChangeText } = props

    return (
        <View style={[styles.inputContainer, { marginBottom: marginBottom ? marginBottom : 32 }]}>
            <View style={styles.iconContainer}>
                <FontAwesome5 name={icon} size={24} color="#64B5F6" style={styles.icon} />
            </View>
            <TextInput placeholder={placeholder} style={styles.inputText} placeholderTextColor="white" secureTextEntry={secure} onChangeText={onChangeText} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#9EAEC9',
        height: 47,
        borderRadius: 20,
        alignItems: 'center'
    },
    inputText: {
        flex: 85,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    iconContainer: {
        flex: 15,
        alignItems: 'center'
    },
    icon: {
        color: 'white',
    },
})