import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Trabajo({
    habitaciones,
    banos,
    extras,
    descripcion,
    total,
    action,
    photo
}) {
    return (
        <TouchableOpacity style={styles.container} onPress={action}>
            <Image
                source={photo ? { uri: photo } : require("../assets/casas.jpg")}
                style={styles.imagen}
            />
            <View style={styles.containerInfo}>
                <View style={styles.justificacion}>
                    <Text style={styles.textInfo}>Habitaciones:</Text>
                    <Text style={styles.textInfoValue}>{habitaciones}</Text>
                </View>
                <View style={styles.justificacion}>
                    <Text style={styles.textInfo}>Baños:</Text>
                    <Text style={styles.textInfoValue}>{banos}</Text>
                </View>
                <View style={styles.justificacion}>
                    <Text style={styles.textInfo}>Extras:</Text>
                    <Text style={styles.textInfoValue}>{extras}</Text>
                </View>
            </View>
            <Text style={styles.descripcionTitulo}>Descripción:</Text>
            <Text style={styles.descripcionTexto}>{descripcion}</Text>
            <Text style={styles.descripcionTitulo}>
                Presupuesto del cliente:
            </Text>
            <Text style={styles.descripcionTexto}>${total}.00 MXN</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9DB9FF",
        width: "95%",
        borderRadius: 20,
        marginLeft: 10,
        marginBottom: 10,
        padding: 10,
    },
    containerInfo: {
        paddingBottom: 1,
        marginTop: 5,
    },
    textInfo: {
        fontSize: 15,
        color: "#000",
        fontWeight: "bold",
        marginRight: 5,
    },
    textInfoValue: {
        fontSize: 14,
        color: "#000",
        flexShrink: 1,
        //width of extras text
        maxWidth: "90%",
    },
    imagen: {
        width: "100%",
        height: 250,
        borderRadius: 20,
        marginRight: 10,
        resizeMode: "cover",
    },
    justificacion: {
        flexDirection: "row",
        marginBottom: 5,
    },
    descripcionTitulo: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 5,
    },
    descripcionTexto: {
        fontSize: 14,
        marginBottom: 10,
    },
});
