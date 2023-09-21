import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";
import React, { useCallback, useState } from "react";
import { Button } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ButtonXL from "../../components/ButtonXL";
import ButtonMd from "../../components/ButtonMd";
import { SvgXml } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import InputPerfil from "../../components/InputPerfil";
import CalificarCliente from "./CalificarCliente";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { apiGetTrabajador, apiUpdateTrabajador } from "../../api/ApiTrabajador";
import { useAuth } from "../../security/AuthContext";

export default function Account() {
    const authContext = useAuth()
    const [editable, setEditable] = useState(false);
    const [userDetails, setUserDetails] = useState(null)
    const [editedFirstname, setEditedFirstname] = useState('');
    const [editedLastname, setEditedLastname] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedPassword, setEditedPassword] = useState('');
    const [editedPhone, setEditedPhone] = useState('');

    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            fetchUserDetails()
        }, [])
    )

    const fetchUserDetails = async () => {
        try {
            const resp = await apiGetTrabajador(authContext.username, authContext.token)
            setUserDetails(resp.data)
        } catch (error) {
            console.log('Error', error)
        }
    }

    const editarPerfil = () => {
        setEditable(true);
        setEditedFirstname(userDetails.firstname);
        setEditedLastname(userDetails.lastname);
        setEditedPhone(userDetails.phone.toString());
        setEditedEmail(userDetails.email);
        setEditedPassword('');
    };

    const cancelarEdicion = () => {
        setEditable(false);
        fetchUserDetails()
    };

    const guardarCambios = async () => {
        try {
            const updatedUserData = {
                firstname: editedFirstname,
                lastname: editedLastname,
                phone: editedPhone,
                email: editedEmail,
                password: editedPassword,
            };

            const response = await apiUpdateTrabajador(authContext.id, updatedUserData, authContext.token)

            if (response.status === 200) {
                setUserDetails(response.data);
                setEditable(false);
            } else {
                console.error('Error updating user details');
            }
        } catch (error) {
            console.error('Error updating user details', error);
        }
    };

    const CalificarCliente = () => {
        navigation.navigate("CalificarCliente");
    };

    return (
        <KeyboardAwareScrollView
            style={styles.contenedorAccount}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={false}
        >
            <View style={styles.containerSvg}>
                <SvgXml xml={fondoSvg} />
                <Text style={styles.svgText}>Mi Perfil</Text>
            </View>
            <Image
                source={require("../../assets/account.jpeg")}
                style={styles.imagen}
            />
            <InputPerfil
                campo="Nombre"
                valor={editable ? editedFirstname : userDetails?.firstname || ''}
                editable={editable}
                onChangeText={setEditedFirstname}
            />
            <InputPerfil
                campo="Apellido"
                valor={editable ? editedLastname : userDetails?.lastname || ''}
                editable={editable}
                onChangeText={setEditedLastname}
            />
            <InputPerfil
                campo="Teléfono"
                valor={editable ? editedPhone : userDetails?.phone.toString() || ''}
                editable={editable}
                onChangeText={setEditedPhone}
            />
            <InputPerfil
                campo="Correo"
                valor={editable ? editedEmail : userDetails?.email || ''}
                editable={editable}
            />
            <InputPerfil
                campo="Contrasena"
                valor={editable ? editedPassword : '*'.repeat(userDetails?.password?.length || 0)}
                editable={editable}
                onChangeText={setEditedPassword}
            />
            <View style={styles.contenedorBotones}>
                {editable ? (
                    <>
                        <ButtonMd
                            action={cancelarEdicion}
                            text="Cancelar"
                            color="#a31d1d"
                        />
                        <ButtonMd action={guardarCambios} text="Guardar" />
                    </>
                ) : (
                    <ButtonMd action={editarPerfil} text="Editar Perfil" />
                )}
            </View>
            <ButtonMd
                style={styles.buttonCalif}
                action={CalificarCliente}
                text="Calificar Cliente"
            />
        </KeyboardAwareScrollView>
    );
}
const styles = StyleSheet.create({
    contenedorAccount: {
        flex: 1,
        // backgroundColor:'cornflowerblue',
    },
    containerSvg: {
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 20,
    },
    svgText: {
        position: "absolute",
        top: 70,
        fontSize: 40,
        color: "white",
        fontWeight: "bold",
        textShadowRadius: 3,
    },
    titulo: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
    },
    imagen: {
        borderRadius: 15,
        width: 200,
        height: 200,
        marginBottom: 30,
        alignSelf: "center",
    },
    contenedorBotones: {
        top: -20,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginBottom: -20,
    },
    botonPerfil: {
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#088BED",
        marginHorizontal: 15,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
    },
    textoBotonPerfil: {
        color: "#FFF",
        fontSize: 17,
        fontWeight: "bold",
    },
});

const fondoSvg = `<svg width="440" height="202" viewBox="0 0 440 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H440V202L291 191.044L152 175.295L118 171.422L89.5 167.999L59.5 163.89L48.5 162.178L46.9931 161.883C41.0112 160.713 35.1539 158.978 29.5 156.7V156.7L20.5 152.592L17.149 150.45C14.389 148.686 11.7998 146.668 9.415 144.423L6.81939 141.979C5.61046 140.841 4.53628 139.568 3.61796 138.184V138.184C1.25851 134.63 0 130.459 0 126.192V0Z" fill="#0793F2"/>
</svg>
`;
const fondoSvg2 = `
<svg width="389" height="110" viewBox="0 0 389 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-1 0H389V110L186.5 94.979L137.5 91.3971L88.5 87.8151L50.5 84.3487L28.5685 80.0603C25.8608 79.5308 23.2016 78.7781 20.6181 77.81L10.8345 74.1437C7.67366 72.9591 4.90365 70.9204 2.83307 68.2545C0.348623 65.0557 -1 61.1207 -1 57.0705V0Z" fill="#068FEF"/>
</svg>`;
