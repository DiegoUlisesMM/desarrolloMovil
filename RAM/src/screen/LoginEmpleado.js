import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { FontAwesome5 } from "@expo/vector-icons";
import InputOne from "../components/InputOne";
import ButtonXL from "../components/ButtonXL";
import { useAuth } from "../security/AuthContext";

export default function LoginEmpleado(props) {
    const { navigation } = props;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const authContext = useAuth();

    function handleUsernameChange(text) {
        setUsername(text);
    }

    function handlePasswordChange(text) {
        setPassword(text);
    }

    const goRegistro = () => {
        navigation.navigate("Registro");
    };
    async function goLogin() {
        if (await authContext.loginClearer(username, password)) {
            //setShowErrorMessage(false);
            navigation.navigate("NavigationEmpleado");
        } else {
            //setShowErrorMessage(true);
            console.log(showErrorMessage);
        }
    }
    return (
        <KeyboardAwareScrollView
            style={styles.mainContainer}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={false}
        >
            <View style={styles.containerSvg}>
                <SvgXml xml={fondoSvg} />
                <Text style={styles.svgText}>Inicio sesión</Text>
            </View>
            <View style={styles.containerForm}>
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.imagen}
                />
                <Text style={styles.titulo}>RENT A MAID</Text>
                <InputOne
                    icon="at"
                    placeholder="Correo"
                    onChangeText={handleUsernameChange}
                />
                <InputOne
                    icon="eye"
                    placeholder="Contraseña"
                    secure={true}
                    onChangeText={handlePasswordChange}
                />
                <Text style={styles.accountText}>Olvidaste tu contraseña</Text>
                <ButtonXL text="Iniciar sesión" action={goLogin} />
                <View style={styles.userActions}>
                    <Text style={styles.noAccountText}>
                        No tienes una cuenta?
                    </Text>
                    <TouchableOpacity
                        style={styles.createAccountButton}
                        onPress={goRegistro}
                    >
                        <Text style={styles.createAccountButtonText}>
                            Crear
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        flex: 1,
    },
    containerForm: {
        alignItems: "flex-start",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    containerSvg: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    svgText: {
        position: "absolute",
        top: 90,
        fontSize: 40,
        color: "white",
        fontWeight: "bold",
        textShadowRadius: 3,
    },
    containerForm: {
        alignItems: "flex-start",
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        top: 20,
    },
    imagen: {
        width: 220,
        height: 170,
        marginBottom: 15,
    },
    inputContainer: {
        position: "relative",
        marginBottom: 32,
        width: "90%",
    },
    inputText: {
        height: 47,
        backgroundColor: "#9EAEC9",
        borderRadius: 20,
        paddingLeft: 45,
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
    },
    icon: {
        position: "absolute",
        top: 13,
        left: 15,
        zIndex: 1,
        color: "white",
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#088BED",
        textShadowColor: "rgba(0, 0, 0, 0.2)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
        marginBottom: 30,
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
        marginTop: 30,
    },
    buttonText1: {
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
    accountText: {
        fontSize: 16,
        color: "#797979",
        top: -15,
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

const fondoSvg = `<svg width="440" height="202" viewBox="0 0 440 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H440V202L291 191.044L152 175.295L118 171.422L89.5 167.999L59.5 163.89L48.5 162.178L46.9931 161.883C41.0112 160.713 35.1539 158.978 29.5 156.7V156.7L20.5 152.592L17.149 150.45C14.389 148.686 11.7998 146.668 9.415 144.423L6.81939 141.979C5.61046 140.841 4.53628 139.568 3.61796 138.184V138.184C1.25851 134.63 0 130.459 0 126.192V0Z" fill="#0793F2"/>
</svg>
`;
