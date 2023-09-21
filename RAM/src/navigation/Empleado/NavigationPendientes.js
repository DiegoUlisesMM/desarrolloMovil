import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Pendientes from '../../screen/Empleado/Pendientes';

export default function NavigationPendientes() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Pendientes'
                component={Pendientes}
                options={{ title: 'Pendientes', headerShown: false }}
            />
        </Stack.Navigator>
    )
}