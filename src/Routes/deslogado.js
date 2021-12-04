import Cadastro from '../Pages/Cadastro';
import Login from '../Pages/Login';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Deslogado() {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Cadastro" 
                component={Cadastro}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}