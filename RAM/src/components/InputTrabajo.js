import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function InputTrabajo({ campo, placeholder, numero, onChangeText, editable }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.campo} >{campo}:</Text>
            <TextInput
                style={styles.input}
                multiline
                placeholder={placeholder}
                keyboardType={numero ? 'number-pad' : 'default'}
                onChangeText={onChangeText}
                editable={editable}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#088BED',
        padding: 5,
        borderRadius: 20,
        marginBottom: 20
    },
    campo: {
        marginLeft: 5,
        marginBottom: 3,
        color: 'white',
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 5
    }
})