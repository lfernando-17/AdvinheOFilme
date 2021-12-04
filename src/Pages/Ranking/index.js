import {
    Container,
    ContainerCard,
    ContainerItem,
    ItemNome,
    ItemPosicao,
    ItemScore,
    PlayerList,
    Titulo
} from './styles';
import React, { useEffect, useState } from 'react';

import { DataContext } from '../../Services/data';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export default function Ranking() {
    const { allPlayers } = React.useContext(DataContext);
    // const [allPlayers, setAllPlayers] = useState([]);

    useEffect( async () => {
        console.log(allPlayers);
    }, [allPlayers])
    return (
        <Container>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            />

            <Titulo>Ranking</Titulo>
            <ContainerCard>
            <PlayerList
                data={allPlayers}
                renderItem={({item, index}) => <ItemList item={item} index={index} /> }
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
            />
            </ContainerCard>
        </Container>
    )
}

function ItemList({ item, index}){

    return (
        <ContainerItem>
            <ItemNome>{item.nome}</ItemNome>
            <ItemScore>{item.score} pontos</ItemScore>
            <ItemPosicao>{index + 1}º lugar</ItemPosicao>
        </ContainerItem>
    )
}

const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    },
    button: {
      padding: 15,
      alignItems: 'center',
      borderRadius: 5,
    },
    text: {
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff',
    },
  });