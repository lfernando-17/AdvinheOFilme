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