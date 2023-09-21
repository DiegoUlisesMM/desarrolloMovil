import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'expo-checkbox'

export default function Extras() {
    const [patio, setPatio] = useState(false)
    const [jardin, setJardin] = useState(false)
    return (
        <View style={styles.inputContainer} >
            <Text style={styles.texto} >Extras: </Text>
            <View style={styles.checkboxContainer}>
                <View style={styles.horizontal} >
                    <CheckBox value={patio} onValueChange={setPatio} />
                    <Text style={styles.textCheck} > Patio</Text>
                </View>
                <View style={styles.horizontal} >
                    <CheckBox value={jardin} onValueChange={setJardin} />
                    <Text style={styles.textCheck} > Jardin</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#088BED',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        marginBottom: 20,
        padding: 5
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 3
    },
    checkboxContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10
    },
    horizontal: {
        flexDirection: 'row'
    },
    textCheck: {
        fontWeight: 'bold'
    }
})