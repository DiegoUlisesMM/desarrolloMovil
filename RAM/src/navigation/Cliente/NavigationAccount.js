import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../../screen/Cliente/Account'

export default function NavigationAccount() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Account'
                component={Account}
                options={{ title: 'Mi cuenta', headerShown: false }}
            />
        </Stack.Navigator>
    )
}