import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TrabajosPublicados from '../../screen/Empleado/TrabajosPublicados';
import TrabajoDetalle from '../../screen/Empleado/TrabajoDetalle';

export default function NavigationHome() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Trabajos'
                component={TrabajosPublicados}
                options={{ title: 'Mi cuenta', headerShown: false }}
            />
            <Stack.Screen
                name='Detalle'
                component={TrabajoDetalle}
                options={{ title: 'Detalle de trabajo', headerShown: false }}
            />
        </Stack.Navigator>
    )
}