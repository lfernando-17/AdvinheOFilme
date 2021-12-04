//Grupo : 
//Luiz Fernando Amarino Gomes Leal // Matricula : 0050016658
//Pedro Coutinho Duarte // Matricula : 0050016979
// Rodrigo Luiz Vergara // Matricula : 0050016531
import { Container, Imagem, Linha, Text, TextButton, TextSub } from "./styles";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { AuthContext } from '../../Services/data';
import React from "react";

const CustomDrawer = props => {
    const { signOut } = React.useContext(AuthContext);

    return(
        <Container>
            <DrawerContentScrollView showsVerticalScrollIndicator={false}>
                <DrawerItemList  {...props} />
                <Linha />
                <TextSub>Dispositivo</TextSub>
                <TextButton onPress={() => signOut()}>
                    <Text style={{marginBottom: 1}}>Desconectar</Text>
                </TextButton>
            </DrawerContentScrollView>
        </Container>
    )
}

export default CustomDrawer;