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
import InputOne from '../components/InputOne';
import ButtonXL from '../components/ButtonXL';
import { apiClient } from '../api/ApiClient';
import ButtonMd from '../components/ButtonMd';
import ErrorModal from '../components/ErrorModal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SuccessModal from '../components/SuccessModal';

export default function RegistroEmpleado(props) {
  const { navigation } = props;
  const goInicio = () => {
    navigation.navigate('LoginEmpleado');
  };
  const goInicioPrincipal = () => {
    navigation.navigate('Inicio');
  };

  const [modalVisible, setModalVisible] = useState(false);

  const postularse = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    goInicio();
  };

  // Estados para guardar los valores ingresados en los campos de texto
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [lastName, setLastName] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Función para crear el usuario y enviar los datos ingresados en los campos
  const createUser = (userData) => {
    apiClient
      .post('/api/v1/auth/registerClearer', userData)
      .then((response) => {
        console.log('Usuario creado exitosamente:', response.data);
      })
      .catch((error) => {
        console.error('Error al crear el usuario:', error);
      });
  };

  const [showAlert, setShowAlert] = useState(false);

  const close = () => {
    setShowAlert(false);
  };

  const validarCampos = () => {
    if (
      !nombreCompleto.trim() ||
      !lastName.trim() ||
      !telefono.trim() ||
      !correo.trim() ||
      !contrasena.trim()
    ) {
      setShowAlert(true);
      return false;
    }
    return true;
  };

  const createUserWithFields = () => {
    if (validarCampos()) {
      const userData = {
        firstname: nombreCompleto,
        lastname: lastName,
        phone: telefono,
        email: correo,
        password: contrasena,
      };

      createUser(userData);
      postularse();
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
          <Text style={styles.svgText}>Registro empleado</Text>
        </View>
        <View style={styles.containerForm}>
          <Image
            source={require('../assets/logo3.png')}
            style={styles.imagen}
          />
          <InputOne
            icon='user'
            placeholder='Nombre(s)'
            marginBottom={19}
            value={nombreCompleto}
            onChangeText={(text) => setNombreCompleto(text)}
          />
          <InputOne
            icon='id-card'
            placeholder='Apellido(s)'
            marginBottom={19}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <InputOne
            icon='mobile-alt'
            placeholder='Teléfono'
            marginBottom={19}
            value={telefono}
            onChangeText={(text) => setTelefono(text)}
            keyboardType='numeric'
          />
          <InputOne
            icon='at'
            placeholder='Correo'
            marginBottom={19}
            value={correo}
            onChangeText={(text) => setCorreo(text)}
            keyboardType='email-address'
          />
          <InputOne
            icon='eye'
            placeholder='Contraseña'
            marginBottom={19}
            value={contrasena}
            onChangeText={(text) => setContrasena(text)}
            secure={true}
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
          message='¡Listo!, usuario registrado exitosamente ya puedes iniciar sesión'
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
    top: 10,
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
    width: '50%',
    height: 110,
    marginBottom: 25,
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
  modal: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#9EAEC9',
    width: 300,
    borderRadius: 20,
    alignItems: 'center',
    padding: 10,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#0d3b8d',
  },
  modalText: {
    fontSize: 15,
  },
});

const fondoSvg = `<svg width="391" height="202" viewBox="0 0 391 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H391V202L291 191.044L152 175.295L118 171.422L89.5 167.999L59.5 163.89L48.5 162.178L46.9931 161.883C41.0112 160.713 35.1539 158.978 29.5 156.7V156.7L20.5 152.592L17.149 150.45C14.389 148.686 11.7998 146.668 9.415 144.423L6.81939 141.979C5.61046 140.841 4.53628 139.568 3.61796 138.184V138.184C1.25851 134.63 0 130.459 0 126.192V0Z" fill="#0793F2"/>
</svg>
`;
