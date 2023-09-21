import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native'
import { SvgXml } from 'react-native-svg';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import InputPostulante from './InputPostulante';

export default function ListaPostulantes() {
  const [editable, setEditable] = useState(false)
  const editarPerfil = () => {
    setEditable(true)
  }

  const navigation = useNavigation()

  const goToDetallePostulante = () => {
    navigation.navigate('DetallePostulanteScreen')
  }

  return (
    <View style={styles.mainContainer} >
      <View style={styles.containerSvg} >
        <SvgXml xml={fondoSvg2} width={Dimensions.get('window').width}
          preserveAspectRatio='xMinYMin slice' />
        <Text style={styles.svgText}>Detalles postulante</Text>
      </View>
      <Image
        source={require('../assets/account.jpeg')}
        style={styles.imagenPost}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  containerSvg: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  svgText: {
    position: 'absolute',
    top: 35,
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    textShadowRadius: 3
  },
  imagenPost: {
    //top: 140,
    borderRadius: 15,
    width: 200,
    height: 200,
    marginBottom: 30,
    alignSelf: 'center',
  },
})

const fondoSvg = `<svg width="391" height="202" viewBox="0 0 391 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H391V202L291 191.044L152 175.295L118 171.422L89.5 167.999L59.5 163.89L48.5 162.178L46.9931 161.883C41.0112 160.713 35.1539 158.978 29.5 156.7V156.7L20.5 152.592L17.149 150.45C14.389 148.686 11.7998 146.668 9.415 144.423L6.81939 141.979C5.61046 140.841 4.53628 139.568 3.61796 138.184V138.184C1.25851 134.63 0 130.459 0 126.192V0Z" fill="#0793F2"/>
</svg>
`

const fondoSvg2 = `
<svg width="389" height="150" viewBox="0 0 389 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-1 0H389V110L186.5 94.979L137.5 91.3971L88.5 87.8151L50.5 84.3487L28.5685 80.0603C25.8608 79.5308 23.2016 78.7781 20.6181 77.81L10.8345 74.1437C7.67366 72.9591 4.90365 70.9204 2.83307 68.2545C0.348623 65.0557 -1 61.1207 -1 57.0705V0Z" fill="#068FEF"/>
</svg>`