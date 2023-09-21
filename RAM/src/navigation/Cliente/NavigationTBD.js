import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../../screen/Cliente/Account'
import TBD from '../../screen/Cliente/TBD'

export default function NavigationTBD() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='TBD'
                component={TBD}
                options={{ title: 'TBD', headerShown: false }}
            />
        </Stack.Navigator>
    )
}