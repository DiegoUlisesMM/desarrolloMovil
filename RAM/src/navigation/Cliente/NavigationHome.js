import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screen/Cliente/Home'
import TrabajosPublicados from '../../screen/Cliente/TrabajosPublicados'
import CrearTrabajo from '../../screen/Cliente/CrearTrabajo'
import ListaPostulantes from '../../screen/Cliente/ListaPostulantes'
import PostulanteAceptadaScreen from '../../screen/Cliente/PostulanteAceptadaScreen'
import DetallesPostulanteScreen from '../../screen/Cliente/DetallesPostulanteScreen'

export default function NavigationHome() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='TrabajosPublicados'
                component={TrabajosPublicados}
                options={{ title: 'Home', headerShown: false }}
            />
            <Stack.Screen
                name='CrearTrabajo'
                component={CrearTrabajo}
                options={{ title: 'Crear trabajo', headerShown: false }}
            />
            <Stack.Screen
                name='ListaPostulantes'
                component={ListaPostulantes}
                options={{ title: 'Lista Postulantes', headerShown: false }}
            />
            <Stack.Screen
                name='PostulanteAceptadaScreen'
                component={PostulanteAceptadaScreen}
                options={{ title: 'Lista Postulantes', headerShown: false }}
            />
            <Stack.Screen
                name='DetallesPostulanteScreen'
                component={DetallesPostulanteScreen}
                options={{ title: 'DetallesPostulanteScreen', headerShown: false }}
            />
        </Stack.Navigator>
    )
}