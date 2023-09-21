import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import NavigationAccount from './NavigationAccount'
import NavigationHome from './NavigationHome'
import NavigationTBD from './NavigationTBD'
import { Ionicons } from '@expo/vector-icons'; // Importa los iconos de Expo


const Tab = createBottomTabNavigator()

export default function NavigationCliente() {
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
                name='TBD'
                options={{
                    title: 'TBD',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="time-outline" size={size} color={color} />
                    ), // Icono para la pestaña "Favoritos"
                }}
                component={NavigationTBD}
            />
        </Tab.Navigator>
    )
}