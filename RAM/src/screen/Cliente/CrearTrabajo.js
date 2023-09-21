import { View, Text, StyleSheet, TextInput, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SvgXml } from 'react-native-svg'
import InputTrabajo from '../../components/InputTrabajo'
import ButtonMd from '../../components/ButtonMd'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import { app, storage } from '../../api/firebaseConfig'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import { apiCrearVacante } from '../../api/ApiCrearVacante'
import { useAuth } from '../../security/AuthContext'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'


export default function CrearTrabajo() {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const [image, setImage] = useState(null);
    const [descripcion, setDescripcion] = useState('')
    const [numHabitaciones, setNumHabitaciones] = useState(0)
    const [numBanios, setNumBanios] = useState(0)
    const [extras, setExtras] = useState('')
    const [total, setTotal] = useState('')
    const authContext = useAuth();

    function handleDescripcionChange(text) {
        setDescripcion(text);
    }

    function handleNumHabitacionesChange(text) {
        setNumHabitaciones(text);
    }

    function handleNumBaniosChange(text) {
        setNumBanios(text);
    }

    function handleExtrasChange(text) {
        setExtras(text);
    }

    function handleTotalChange(text) {
        setTotal(text);
    }

    const getBlobFroUri = async (uri) => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                reject(new TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", uri, true);
            xhr.send(null);
        });

        return blob;
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    };

    const publicar = async () => {
        const storage = getStorage(app)
        const name = uuidv4();
        const storageRef = ref(storage, name);
        const imageBlob = await getBlobFroUri(image)
        let photo
        await uploadBytes(storageRef, imageBlob).then((snapshot) => {
            return getDownloadURL(snapshot.ref)
        }).then(downloadURL => {
            console.log(downloadURL)
            photo = downloadURL
        })
        const cliente = {
            "id": authContext.id,
            "role": "CLIENT"
        }
        const resp = await apiCrearVacante(descripcion, numHabitaciones, numBanios, extras, total, cliente, photo)
        if (resp.status == 200) {
            setModalVisible(true)
        }
    }

    const closeModal = () => {
        setModalVisible(false)
        navigation.navigate('TrabajosPublicados')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.containerSvg}>
                    <SvgXml
                        xml={fondoSvg2}
                    />
                    <Text style={styles.svgText}>Nuevo trabajo</Text>
                </View>
                <InputTrabajo
                    campo="Descripción"
                    placeholder="Brinda a los trabajadores una descripción general del trabajo..."
                    onChangeText={handleDescripcionChange}
                />
                <InputTrabajo
                    campo="Número de habitaciones"
                    placeholder=""
                    numero={true}
                    onChangeText={handleNumHabitacionesChange}
                />
                <InputTrabajo
                    campo="Número de baños"
                    placeholder=""
                    numero={true}
                    onChangeText={handleNumBaniosChange}
                />
                <InputTrabajo
                    campo="Extras"
                    placeholder=""
                    onChangeText={handleExtrasChange}
                />
                <InputTrabajo
                    campo="Pago"
                    placeholder=""
                    numero={true}
                    onChangeText={handleTotalChange}
                />
                <ButtonMd text="Seleccionar foto" icon="camera" action={pickImage} />
                <ButtonMd text="Publicar" icon="paper-plane" action={publicar} />
                <Modal
                    transparent
                    visible={modalVisible}
                >
                    <View style={styles.modal} >
                        <View style={styles.modalView} >
                            <Text style={styles.modalTitle} >Publicación exitosa</Text>
                            <Text style={styles.modalText} >Tu publicación ahora es visible para los trabajadores, revisa los detalles de la publicación para ver las postulaciones.</Text>
                            <ButtonMd text="Cerrar" action={closeModal} />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSvg: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 30
    },
    svgText: {
        position: 'absolute',
        top: 25,
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        textShadowRadius: 3
    },
    modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: '#d9d9d9',
        width: 300,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#0d3b8d'
    },
    modalText: {
        fontSize: 15
    }
})

const fondoSvg2 = `
<svg width="389" height="110" viewBox="0 0 389 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-1 0H389V110L186.5 94.979L137.5 91.3971L88.5 87.8151L50.5 84.3487L28.5685 80.0603C25.8608 79.5308 23.2016 78.7781 20.6181 77.81L10.8345 74.1437C7.67366 72.9591 4.90365 70.9204 2.83307 68.2545C0.348623 65.0557 -1 61.1207 -1 57.0705V0Z" fill="#068FEF"/>
</svg>`