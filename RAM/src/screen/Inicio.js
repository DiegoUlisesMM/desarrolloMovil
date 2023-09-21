import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";

export default function Inicio(props) {
    const { navigation } = props;
    const goNavigationRegistrer = () => {
        navigation.navigate("Registro");
    };

    const goNavigationLoginEmpleado = () => {
        navigation.navigate("LoginEmpleado");
    };

    const goNavigationLoginCliente = () => {
        navigation.navigate("LoginCliente");
    };

    return (
        <View styles={styles.mainContainer}>
            <View style={styles.containerSvg}>
                <SvgXml xml={fondoSvg} style={styles.fondoLogin} />
            </View>
            <View style={styles.containerForm}>
                <Image
                    source={require("../assets/clean.gif")}
                    style={styles.imagen}
                />
                <Text style={styles.titulo}>Bienvenid@</Text>
                <TouchableOpacity
                    onPress={goNavigationLoginCliente}
                    style={styles.button1}
                >
                    <Text style={styles.buttonText1}>Cliente</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={goNavigationLoginEmpleado}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Limpiador</Text>
                </TouchableOpacity>
                <View style={styles.userActions}>
                    <Text style={styles.noAccountText}>No tienes cuenta?</Text>
                    <TouchableOpacity
                        onPress={goNavigationRegistrer}
                        style={styles.createAccountButton}
                    >
                        <Text style={styles.createAccountButtonText}>
                            Crear
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const fondoSvg = `<svg width="440" height="202" viewBox="0 0 440 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H440V202L291 191.044L152 175.295L118 171.422L89.5 167.999L59.5 163.89L48.5 162.178L46.9931 161.883C41.0112 160.713 35.1539 158.978 29.5 156.7V156.7L20.5 152.592L17.149 150.45C14.389 148.686 11.7998 146.668 9.415 144.423L6.81939 141.979C5.61046 140.841 4.53628 139.568 3.61796 138.184V138.184C1.25851 134.63 0 130.459 0 126.192V0Z" fill="#0793F2"/>
</svg>
`;

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
    },
    containerForm: {
        alignItems: "center",
        justifyContent: "center",
    },
    containerSvg: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    imagen: {
        width: 280,
        height: 280,
        marginTop: -30,
        marginBottom: -20,
        alignSelf: "center",
    },
    titulo: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#088BED",
        textShadowColor: "rgba(0, 0, 0, 0.2)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
        marginBottom: 25,
        marginTop: 5,
    },
    button1: {
        width: 200,
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#088BED",
        borderWidth: 2,
        borderColor: "#088BED",
        margin: 8,
    },
    buttonText1: {
        color: "#FFF",
        fontSize: 25,
        fontWeight: "bold",
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#81CDEA",
        borderWidth: 2,
        borderColor: "#81CDEA",
        margin: 8,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 25,
        fontWeight: "bold",
    },
    userActions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    noAccountText: {
        fontSize: 16,
        color: "#555",
        marginRight: -15,
    },
    createAccountButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    createAccountButtonText: {
        color: "#797979",
        fontSize: 16,
        fontWeight: "bold",
    },
});
