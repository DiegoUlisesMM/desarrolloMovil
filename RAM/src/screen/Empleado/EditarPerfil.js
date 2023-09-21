import { View, Text, StyleSheet, TextInput,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'

export default function EditarPerfil() {
    const navigation = useNavigation()

    const goCancelar = ()=>{
      navigation.navigate('Account')
  }
  return (
    <View style={styles.mainContainer}>
     <View style={styles.containerForm}>
     <Text style={styles.titulo}>Editar Perfil</Text>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="user" size={20} color="#64B5F6" style={styles.icon} />
          <TextInput placeholder='  Nombre completo' style={styles.inputText}  placeholderTextColor="white"/>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="mobile-alt" size={24} color="#64B5F6" style={styles.icon} />
          <TextInput placeholder='  Teléfono' style={styles.inputText}  placeholderTextColor="white"/>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="at" size={24} color="#64B5F6" style={styles.icon} />
          <TextInput placeholder='  Correo' style={styles.inputText}  placeholderTextColor="white"/>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="eye" size={24} color="#64B5F6" style={styles.icon} />
          <TextInput placeholder='  Contraseña' style={styles.inputText}  placeholderTextColor="white"/>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome5 name="eye" size={24} color="#64B5F6" style={styles.icon} />
          <TextInput placeholder='  Confirma Contraseña' style={styles.inputText}  placeholderTextColor="white"/>
        </View>
        <View style={styles.containerButton}>
            <TouchableOpacity onPress={goCancelar}
            style={styles.button2}>
                <Text
                style={styles.buttonText2}
                >Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button1}>
                <Text
                style={styles.buttonText1}
                >Editar</Text>
            </TouchableOpacity>
        </View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  containerForm: {
    alignItems: 'flex-start',
    justifyContent:'center',
    alignItems:'center',
    margin:20
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 20,
    width: '90%', 
  },
  inputText: {
    height: 47,
    backgroundColor: '#9EAEC9',
    borderRadius: 20,
    paddingLeft: 45,
    fontSize: 15, 
    fontWeight: 'bold',
    color:'white',
  },
  icon: {
    position: 'absolute',
    top: 13,
    left: 15,
    zIndex: 1,
    color:'white'
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#088BED',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    marginBottom:30,
    marginTop:20
},
  button1: {
    width: 147,
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#088BED',
    borderWidth: 2,
    borderColor: '#088BED',
    margin:10
  },
  buttonText1: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  button2: {
    width: 147,
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#81CDEA',
    borderWidth: 2,
    borderColor: '#81CDEA',
    margin:10
  },
  buttonText2: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  imagen: {
    width: '60%',
    height: 120,
    marginBottom:15
  },
  containerButton: {
    flexDirection:'row',
    marginTop:20
  }
});


