import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";

export default function Postulante({ action, nombre, edad, ubicacion }) {
  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      <View style={styles.containerInfo}>
        <Image source={require("../assets/client.png")} style={styles.imagen} />
        <View style={styles.containerInformacion}>
          <View style={styles.datosPersonales}>
            <Text style={styles.textInfo}> Nombre:</Text>
            <Text style={styles.textInfo2}>{nombre}</Text>
          </View>
          <View style={styles.datosPersonales}>
            <Text style={styles.textInfo}> Edad:</Text>
            <Text style={styles.textInfo2}>{edad}</Text>
          </View>
          <View style={styles.datosPersonales}>
            <Text style={styles.textInfo}> Ubicación:</Text>
            <Text style={styles.textInfo2}  >{ubicacion}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9DB9FF",
    width: "90%",
    borderRadius: 20,
    margin: 10,
    padding: 15,
  },
  imagen: {
    width: 112,
    height: 136,
    borderRadius: 15,
    marginRight: 10,
  },
  containerInformacion: {
    flexDirection: "column",
    justifyContent: "center",
  },
  textInfo: {
    fontSize: 15,
    color: "#000",
    fontWeight: "bold",
    marginRight: 5,
  },
  textInfo2: {
    fontSize: 14,
    color: "#000",
    flexShrink: 1,
    maxWidth: "80%",
    marginLeft: 5
  },
  containerInfo: {
    flexDirection: "row",
    paddingBottom: 10,
    alignItems: "center",
  },
  datosPersonales: {
    flexDirection: "column",
    marginBottom: 5,
  },
});
