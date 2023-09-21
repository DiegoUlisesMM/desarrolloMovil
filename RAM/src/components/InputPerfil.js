import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function InputPerfil({ campo, valor, editable, onChangeText }) {
    
    return (
        <View style={styles.contenedorTextos}>
            <Text adjustsFontSizeToFit={true}
                numberOfLines={1} style={styles.campo}>{campo}:</Text>
            <TextInput style={styles.valor} defaultValue={valor} editable={editable} onChangeText={onChangeText}/>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedorTextos: {
        padding: 3,
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto',
        marginBottom: 15,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#088BED',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    },
    campo: {
        fontWeight: 'bold',
        color: '#fff',
        borderRadius: 8,
        textAlign: 'center',
        padding: 2,
        flex: 3
    },
    valor: {
        height: 'auto',
        fontSize: 15,
        backgroundColor: "#fff",
        borderRadius: 8,
        textAlign: 'center',
        padding: 2,
        marginRight: 5,
        flex: 8
    },
})