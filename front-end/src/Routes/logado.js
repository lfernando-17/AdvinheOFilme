//Grupo : 
//Luiz Fernando Amarino Gomes Leal // Matricula : 0050016658
//Pedro Coutinho Duarte // Matricula : 0050016979
// Rodrigo Luiz Vergara // Matricula : 0050016531
import Atualizar from '../Pages/Atualizar';
import CustomDrawer from '../Components/CustomDrawer';
import Home from '../Pages/Home';
import Ranking from '../Pages/Ranking';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Logado() {

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen 
                name="Home" 
                component={Home} 
                options={{
                drawerLabel: 'Home',
                }}
            />
            <Drawer.Screen 
                name="Ranking" 
                component={Ranking}
                options={{
                drawerLabel: 'Ranking',
                headerTitle: '',
                headerTransparent: true,
                headerTintColor: '#fff',
                //   headerShown: false,
                }}
            />
            <Drawer.Screen 
                name="Atualizar" 
                component={Atualizar}
                options={{
                drawerLabel: 'Atualizar',
                headerTitle: '',
                headerTransparent: true,
                headerTintColor: '#fff',
                //   headerShown: false,
                }}
            />
        </Drawer.Navigator>
    )
}