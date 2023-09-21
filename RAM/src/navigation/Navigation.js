import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../screen/Inicio';
import Registro from '../screen/Registro';
import RegistroEmpleado from '../screen/RegistroEmpleado';
import RegistroCliente from '../screen/RegistroCliente';
import LoginEmpleado from '../screen/LoginEmpleado';
import LoginCliente from '../screen/LoginCliente';
import NavigationEmpleado from './Empleado/NavigationEmpleado';
import NavigationCliente from './Cliente/NavigationCliente';

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <Stack.Navigator initialRouteName='Inicio'>
            <Stack.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Registro'
                component={Registro}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='RegistroEmpleado'
                component={RegistroEmpleado}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='RegistroCliente'
                component={RegistroCliente}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='LoginEmpleado'
                component={LoginEmpleado}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='LoginCliente'
                component={LoginCliente}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='NavigationEmpleado'
                component={NavigationEmpleado}
                options={{ title: 'Empleado', headerShown: false }}
            />
            <Stack.Screen
                name='NavigationCliente'
                component={NavigationCliente}
                options={{ title: 'Cliente', headerShown: false }}
            />
        </Stack.Navigator>

    )
}