import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { FontAwesome5 } from '@expo/vector-icons';
import InputOne from '../components/InputOne';
import ButtonXL from '../components/ButtonXL';
import ErrorModal from '../components/ErrorModal';
import { apiClient } from '../api/ApiClient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SuccessModal from '../components/SuccessModal';

export default function RegistroCliente(props) {
  const { navigation } = props;
  const goInicio = () => {
    navigation.navigate('LoginCliente');
  };
  const goInicioPrincipal = () => {
    navigation.navigate('Inicio');
  };

  // Estados para guardar los valores ingresados en los campos de texto
  const [nombre, setNombre] = useState('');
  const [lastnameCliente, setLastnameCliente] = useState('');
  const [telefonoCliente, setTelefonoCliente] = useState('');
  const [correoCliente, setCorreoCliente] = useState('');
  const [contrasenaCliente, setContrasenaCliente] = useState('');

  // Función para crear el usuario y enviar los datos ingresados en los campos
  const createUser = (userData) => {
    apiClient
      .post('/api/v1/auth/registerClient', userData)
      .then((response) => {
        console.log('Usuario creado exitosamente:', response.data);
      })
      .catch((error) => {
        console.error('Error al crear el usuario:', error);
      });
  };

  const [modalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
    goInicio();
  };
  const showModal = () => {
    setModalVisible(true);
  };

  const [showAlert, setShowAlert] = useState(false);

  const close = () => {
    setShowAlert(false);
  };

  const validarCampos = () => {
    if (
      !nombre.trim() ||
      !lastnameCliente.trim() ||
      !telefonoCliente.trim() ||
      !correoCliente.trim() ||
      !contrasenaCliente.trim()
    ) {
      setShowAlert(true);
      return false;
    }
    return true;
  };

  const createUserWithFields = () => {
    if (validarCampos()) {
      const userData = {
        firstname: nombre,
        lastname: lastnameCliente,
        phone: telefonoCliente,
        email: correoCliente,
        password: contrasenaCliente,
      };

      createUser(userData);
      showModal();
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.contenedorAccount}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
      extraScrollHeight={80}
    >
      <View style={styles.mainContainer}>
        <View style={styles.containerSvg}>
          <SvgXml xml={fondoSvg} />
          <Text style={styles.svgText}>Registro cliente</Text>
        </View>
        <View style={styles.containerForm}>
          <Image
            source={require('../assets/casa-logo.png')}
            style={styles.imagen}
          />
          <InputOne
            icon='user'
            placeholder='Nombre completo'
            marginBottom={19}
            value={nombre}
            onChangeText={(text) => setNombre(text)}
          />
          <InputOne
            icon='id-card'
            placeholder='Apellido'
            marginBottom={19}
            value={lastnameCliente}
            onChangeText={(text) => setLastnameCliente(text)}
          />
          <InputOne
            icon='mobile-alt'
            placeholder='Teléfono'
            marginBottom={19}
            value={telefonoCliente}
            onChangeText={(text) => setTelefonoCliente(text)}
          />
          <InputOne
            icon='at'
            placeholder='Correo'
            marginBottom={19}
            value={correoCliente}
            onChangeText={(text) => setCorreoCliente(text)}
          />
          <InputOne
            icon='eye'
            placeholder='Contraseña'
            marginBottom={19}
            value={contrasenaCliente}
            onChangeText={(text) => setContrasenaCliente(text)}
          />
          <ButtonXL action={createUserWithFields} text='Registrar' />
          <View style={styles.userActions}>
            <Text style={styles.noAccountText}>Ya tienes una cuenta?</Text>
            <TouchableOpacity
              onPress={goInicioPrincipal}
              style={styles.createAccountButton}
            >
              <Text style={styles.createAccountButtonText}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
        <SuccessModal
          isVisible={modalVisible}
          message='¡Listo!, usuario registrado exitosamente, ya puedes iniciar sesión'
          onClose={closeModal}
        />
      </View>

      <ErrorModal
        isVisible={showAlert}
        message='Por favor, completa todos los campos.'
        onClose={close}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  contenedorAccount: {
    flex: 1,
    // backgroundColor:'cornflowerblue',
  },
  mainContainer: {
    height: '100%',
  },
  containerForm: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 19,
    width: '90%',
  },
  containerSvg: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  svgText: {
    position: 'absolute',
    top: 90,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textShadowRadius: 3,
  },
  inputText: {
    height: 47,
    backgroundColor: '#9EAEC9',
    borderRadius: 20,
    paddingLeft: 45,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    position: 'absolute',
    top: 13,
    left: 15,
    zIndex: 1,
    color: 'white',
  },
  button1: {
    width: 200,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#088BED',
    borderWidth: 2,
    borderColor: '#088BED',
    marginTop: 10,
  },
  buttonText1: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  imagen: {
    width: '60%',
    height: 120,
    marginBottom: 15,
  },
  userActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  noAccountText: {
    fontSize: 16,
    color: '#555',
    marginRight: -15,
  },
  createAccountButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  createAccountButtonText: {
    color: '#797979',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const fondoSvg = `<svg width="391" height="202" viewBox="0 0 391 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H391V202L291 191.044L152 175.295L118 171.422L89.5 167.999L59.5 163.89L48.5 162.178L46.9931 161.883C41.0112 160.713 35.1539 158.978 29.5 156.7V156.7L20.5 152.592L17.149 150.45C14.389 148.686 11.7998 146.668 9.415 144.423L6.81939 141.979C5.61046 140.841 4.53628 139.568 3.61796 138.184V138.184C1.25851 134.63 0 130.459 0 126.192V0Z" fill="#0793F2"/>
</svg>
`;
