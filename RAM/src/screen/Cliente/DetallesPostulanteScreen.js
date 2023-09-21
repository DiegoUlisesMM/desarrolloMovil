import { View, Text, SafeAreaView, Button, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import DetallePostulante from '../../components/DetallePostulante';
import InputPostulante from '../../components/InputPostulante';
import { apiClient } from '../../api/ApiClient';
import { useAuth } from '../../security/AuthContext';
import { apiAceptarPostulacion } from '../../api/ApiPostulacion';

export default function DetallesPostulanteScreen({ params }) {

  const authContext = useAuth();

  const navigation = useNavigation()
  const [editable, setEditable] = useState(false)
  const [postulantes, setPostulantes] = useState(null);

  const route = useRoute();
  const { postulacionId } = route.params;

  const fetchDataPostulantes = async () => {
    try {
      const response = await apiClient.get(`api/v1/auth/postulacion/${postulacionId}`, {
        headers: {
          Authorization: authContext.token,
        },
      });

      if (response.status === 200) {
        setPostulantes(response.data)
      } else {
        console.log(response.status)
      }

    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchDataPostulantes();
    }, [])
  );

  useEffect(() => {
    //fetchDataPostulantes();
    console.log(postulantes)
  }, [postulantes])

  const goToPostulanteAceptada = () => {
    navigation.navigate('PostulanteAceptadaScreen')
  }

  const createTwoButtonAlert = () =>
    Alert.alert('Aceptar postulante', 'Presiona OK si estás seguro de aceptar', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK', onPress: async () => {
          await apiAceptarPostulacion(postulacionId)
          navigation.navigate('PostulanteAceptadaScreen', {
            postulante: postulantes
          })
        }
      },
    ]);

  return (
    <SafeAreaView style={styles.container}>
      <DetallePostulante />
      <InputPostulante campo="Nombre" valor={`${postulantes?.usuario.firstname} ${postulantes?.usuario.lastname}`} editable={editable} />
      <InputPostulante campo="Edad" valor={postulantes?.edad.toString()} editable={editable} />
      <InputPostulante campo="Descripción" valor={postulantes?.descripcion} editable={editable} />
      <InputPostulante campo="Ubicación" valor={postulantes?.location} editable={editable} />
      <TouchableOpacity style={styles.botonAceptar} title={'Aceptar'} onPress={createTwoButtonAlert} >
        <Text style={styles.textoBotonAceptar}>Aceptar</Text>
      </TouchableOpacity>
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  botonAceptar: {
    width: 250,
    height: 50,
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#088BED',
    maxWidth: '90%',
    alignSelf: 'center',
  },
  textoBotonAceptar: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    justifyContent: 'space-evenly',
    height: "100%"
  }
})
