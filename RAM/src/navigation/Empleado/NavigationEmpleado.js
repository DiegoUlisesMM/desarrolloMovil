import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NavigationAccount from './NavigationAccount'
import NavigationHome from './NavigationHome'
import NavigationPendientes from './NavigationPendientes'
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Expo

const Tab = createBottomTabNavigator()

export default function NavigationEmpleado() {
    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen
                name='Perfil'
                options={{
                    title: 'Perfil',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    ), // Icono para la pestaña "Account"
                }}
                component={NavigationAccount}
            />
            <Tab.Screen
                name='Home'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ), // Icono para la pestaña "Home"
                }}
                component={NavigationHome}
            />
            <Tab.Screen
                component={NavigationPendientes}
                name='Pendientes'
                options={{
                    title: 'Pendientes',
                    headerShown: false,
                    headerShown: false, // Oculta la barra superior en esta pantalla
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="time-outline" size={size} color={color} />
                    ), // Icono para la pestaña "Favoritos"
                }} />
        </Tab.Navigator>
    )
}