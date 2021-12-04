import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #dedfe0;
    flex: 1;
`;

export const Text = styled.Text`
    color: #5F5F5F;
    margin: 10px;
    font-size: 14px;
`;

export const TextSub = styled.Text`
    color: #909090;
    font-size: 16px;
    margin: 10px;
`;

export const Linha = styled.View`
    background-color: #A9A9A9;
    width: 100%;
    height: 1px;
`;

export const Imagem = styled.Image`
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const TextButton = styled.TouchableOpacity`
    margin: 20px;
    flex-direction: row;
    align-items: center;
`;