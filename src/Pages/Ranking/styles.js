import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #51abdb;
`;

export const Titulo = styled.Text`
    color: #FFF;
    font-size: 30px;
    margin-bottom: 20px;
`;

export const ContainerCard = styled.View`
    background-color: #FFF;
    width: 80%;
    border-radius: 10px;
    align-items: center;
`;

export const PlayerList = styled.FlatList`
   width: 100%;
`;

export const ContainerItem = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: start;
    margin: 5px;
`;

export const ItemNome = styled.Text`
   width: 50%;
`;

export const ItemScore = styled.Text`
    width: 25%;
`;

export const ItemPosicao = styled.Text`
   width: 25%;
`;