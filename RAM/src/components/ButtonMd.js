import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function ButtonMd({ action, text, color, icon, marginBottom, marginTop }) {
    /* 
    action: acción a realizar
    text: Texto del botón
    color: color del botón hex o rgba
    icon: icono de FontAwesome5
    */
    return (
        <TouchableOpacity onPress={action}
            style={[styles.button1,
            {
                backgroundColor: color ? color : '#088BED',
                borderColor: color ? color : '#088BED',
                marginBottom: marginBottom ? marginBottom : 0,
                marginTop: marginTop ? marginTop : 30,
            }]}>
            {icon && <View style={styles.iconContainer}>
                <FontAwesome5 name={icon} size={24} color="#64B5F6" style={styles.icon} />
            </View>}
            <Text
                multiline
                style={styles.buttonText1}
            >{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button1: {
        padding: 5,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#088BED',
        maxWidth: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    buttonText1: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        flexWrap: 'wrap'
    },
    iconContainer: {
        marginHorizontal: 5
    },
    icon: {
        color: 'white',
    },
})