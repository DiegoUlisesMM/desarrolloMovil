import { View, Text, StyleSheet, TextInput, ScrollView, Modal, Dimensions, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SvgXml } from 'react-native-svg'
import InputTrabajo from '../../components/InputTrabajo'
import ButtonMd from '../../components/ButtonMd'
import Extras from '../../components/Extras'
import { useNavigation } from '@react-navigation/native'
import { apiPostularse } from '../../api/ApiPostulacion'
import { useAuth } from '../../security/AuthContext'

export default function TrabajoDetalle({ route }) {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false)
    const { vacante } = route.params
    const [descripcion, setDescripcion] = useState('')
    const [edad, setEdad] = useState(null)
    const [location, setLocation] = useState('')
    const [exito, setExito] = useState(false)
    const authContext = useAuth();

    const postularse = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    const enviarPostulacion = async () => {
        const usuario = {
            "id": authContext.id,
            "role": "CLEARER"
        }
        const vac = {
            "id": vacante.id
        }
        const resp = await apiPostularse(edad, descripcion, location, vac, usuario)
        if (resp.status == 200) {
            setModalVisible(false)
            Alert.alert('Postulación exitosa', 'Te has postulado a la vacante. En caso de ser seleccionado recibiras un SMS. ¡Mantente alerta!', [
                {
                    text: 'Entendido',
                    onPress: () => navigation.navigate('Trabajos')
                }
            ])
        }
    }

    function handleDescripcionChange(text) {
        setDescripcion(text);
    }

    function handleEdadChange(text) {
        setEdad(text);
    }

    function handleUbicacionChange(text) {
        setLocation(text);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.containerSvg}>
                    <SvgXml
                        xml={fondoSvg2}
                        width={Dimensions.get('window').width}
                        preserveAspectRatio='xMinYMin slice'
                    />
                    <Text style={styles.svgText}>Trabajo</Text>
                </View>
                <Image
                    source={{ uri: vacante.photo }}
                    resizeMode='contain'
                    height={150}
                    style={styles.image}
                />
                <InputTrabajo
                    campo="Descripción"
                    placeholder={vacante.descripcion}
                    editable={false}
                />
                <InputTrabajo
                    campo="Número de habitaciones"
                    placeholder={vacante.numHabitaciones.toString()}
                    editable={false}
                />
                <InputTrabajo
                    campo="Número de baños"
                    placeholder={vacante.numBanios.toString()}
                    editable={false}
                />
                <InputTrabajo
                    campo="Extras"
                    placeholder={vacante.extras}
                    editable={false}
                />
                <InputTrabajo
                    campo="Pago"
                    placeholder={vacante.total.toString()}
                    editable={false}
                />
                {vacante.trabajador == null ?
                    <ButtonMd text="Postularse" icon="user-plus" action={postularse} marginBottom={20} marginTop={10} /> :
                    <Text style={styles.filled}>Este trabajo ya no está disponible</Text>}
                <Modal
                    transparent
                    visible={modalVisible}
                    animationType='slide'
                >
                    <View style={styles.modal} >
                        <View style={styles.modalView} >
                            <Text style={styles.modalTitle} >Detalles de postulación</Text>
                            <InputTrabajo
                                campo="Descripción"
                                placeholder="Hazle saber al cliente cuales son tus habilidades y experiencias previas..."
                                onChangeText={handleDescripcionChange}
                            />
                            <InputTrabajo
                                campo="Ubicación"
                                placeholder="Tu zona de trabajo"
                                onChangeText={handleUbicacionChange}
                            />
                            <InputTrabajo
                                campo="Edad"
                                placeholder=""
                                numero={true}
                                onChangeText={handleEdadChange}
                            />
                            <ButtonMd text="Enviar postulación" action={enviarPostulacion} icon="paper-plane" />
                            <ButtonMd text="Cancelar" action={closeModal} color="#a31d1d" icon="arrow-left" />
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
        backgroundColor: '#eeeeee',
        width: "95%",
        height: '70%',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#0d3b8d',
        marginVertical: 30
    },
    modalText: {
        fontSize: 15
    },
    image: {
        marginBottom: 20,
    },
    filled: {
        color: '#a31d1d',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    }
})

const fondoSvg2 = `
<svg width="389" height="110" viewBox="0 0 389 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-1 0H389V110L186.5 94.979L137.5 91.3971L88.5 87.8151L50.5 84.3487L28.5685 80.0603C25.8608 79.5308 23.2016 78.7781 20.6181 77.81L10.8345 74.1437C7.67366 72.9591 4.90365 70.9204 2.83307 68.2545C0.348623 65.0557 -1 61.1207 -1 57.0705V0Z" fill="#068FEF"/>
</svg>`