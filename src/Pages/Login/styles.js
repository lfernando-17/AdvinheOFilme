import { TextInput } from 'react-native-paper';
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

export const ContainerForm = styled.View`
    background-color: #FFF;
    width: 80%;
    border-radius: 10px;
    align-items: center;
`;

export const Input = styled(TextInput)`
    width: 90%;
    background-color: rgba(0,0,0,0);
`;

export const BtnOpacity = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const ContainerButton = styled.View`
    background-color: #51abdb;
    /* padding-left: 25px;
    padding-right: 25px;
    padding-top: 10px;
    padding-bottom: 10px; */
    width: 100px;
    height: 40px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;

export const TextBtn = styled.Text`
    color: #FFF;
    font-size: 18px;
`;

export const ContainerText = styled.View`
    margin-top: 20px;
`;

export const TextCadastro = styled.Text`
    color: #FFF;
`;