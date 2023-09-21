import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonXL({ action, text }) {
    return (
        <TouchableOpacity style={styles.button1} onPress={action}>
            <Text style={styles.buttonText1}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button1: {
        width: 200,
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#088BED',
        borderWidth: 2,
        borderColor: '#088BED',
        marginTop: 30
    },
    buttonText1: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
})