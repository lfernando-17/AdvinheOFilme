//Grupo : 
//Luiz Fernando Amarino Gomes Leal // Matricula : 0050016658
//Pedro Coutinho Duarte // Matricula : 0050016979
// Rodrigo Luiz Vergara // Matricula : 0050016531
import * as yup from 'yup';

import { ActivityIndicator, HelperText } from 'react-native-paper';
import { AuthContext, DataContext } from '../../Services/data';
import {
    BtnOpacity,
    Container,
    ContainerButton,
    ContainerForm,
    ContainerText,
    Input,
    TextBtn,
    TextCadastro,
    Titulo
} from './styles';
import React, { useEffect, useState } from 'react';

import AwesomeAlert from 'react-native-awesome-alerts';
import { Formik } from 'formik';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import axios from 'axios';

export default function Atualizar() {
    const [showAlert, setShowAlert] = useState(false);
    const [tituloAlert, setTituloAlert] = useState('');
    const [msgAlert, setMsgAlert] = useState('');
    const [loading, setLoading] = useState(false);
    const [showAlertDelete, setShowAlertDelete] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);
    const { signOut } = React.useContext(AuthContext);

    const { actualPlayer, setActualPlayer, setAllPlayers, getAllPlayers } = React.useContext(DataContext);

    const CriarCadastro = async (player) => {
        const body = {
            "id": actualPlayer.id,
            "nome": player.nome,
            "email": player.email,
            "password": player.senha,
            "score": actualPlayer.score
          };

        try {
            const result = await axios.put('https://filmeapi20211127211335.azurewebsites.net/Players/', body);
            console.log(result);
            setLoading(false);
            setTituloAlert('Sucesso');
            setMsgAlert('Usuário ' + player.nome + ' atualizado com sucesso!');
            setShowAlert(true);
            setActualPlayer(body);
            const AllPlayers = await getAllPlayers();
            setAllPlayers(AllPlayers.sort((a, b) => a.score < b.score ? 1: -1));
        } catch (error) {
            console.log(error);
            setLoading(false);
            setTituloAlert('Error');
            setMsgAlert(error.message);
            setShowAlert(true);
        }
    }

    const DeleteCadastro = async () => {
        try {
            const result = await axios.delete('https://filmeapi20211127211335.azurewebsites.net/Players/?id='+actualPlayer.id);
            console.log(result);
            setLoading(false);
            signOut();
        } catch (error) {
            console.log(error);
            setLoading(false);
            setTituloAlert('Error');
            setMsgAlert(error.message);
            setShowAlert(true);
        }
    }

    useEffect(() => {
        if(deleteUser){
            DeleteCadastro();
        }
    }, [deleteUser])

    const handleDelete = () => {
        setTituloAlert('Atenção!');
        setMsgAlert('Possui certeza que deseja excluir a conta?');
        setShowAlertDelete(true);
    }

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{ 
            nome: actualPlayer.nome,
            email: actualPlayer.email,
            senha: actualPlayer.password 
            }}
            onSubmit={
                (values) => {
                    setLoading(true);
                    CriarCadastro(values);
                }
            }
            validationSchema={ yup.object().shape({
                nome: yup
                .string()
                .required('Por favor, informe o nome do usuário'),
                email: yup
                .string()
                .email('Por favor, insira um e-mail válido')
                .required('Por favor, informe uma senha'),
                senha: yup
                .string()
                //   .min(4, 'Senha deve possuir no mínimo 4 caracteres')
                .max(10, 'Senha não deve possuir mais que 10 caracteres')
                .required('Por favor, informe uma senha'),
            })}
        >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <Container>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    style={styles.background}
                />
                <Titulo>Atualizar Usuário</Titulo>
                <ContainerForm>
                    <Input
                        label="Nome"
                        value={values.nome}
                        onChangeText={handleChange('nome')}
                        onBlur={() => setFieldTouched('nome')}
                        right={<Input.Icon name="account" color="#bababa" />}
                        error={errors.nome && touched.nome}
                    />
                    {touched.nome && errors.nome &&
                        <HelperText type="error" visible={errors.nome} padding='none'>
                            {errors.nome}
                        </HelperText>
                    }

                    <Input
                        label="Email"
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={() => setFieldTouched('email')}
                        right={<Input.Icon name="email" color="#bababa" />}
                        error={errors.email && touched.email}
                    />
                    {touched.email && errors.email &&
                        <HelperText type="error" visible={errors.email} padding='none'>
                            {errors.email}
                        </HelperText>
                    }

                    <Input
                        label="Senha"
                        value={values.senha}
                        onChangeText={handleChange('senha')}
                        onBlur={() => setFieldTouched('senha')}
                        secureTextEntry
                        right={<Input.Icon name="eye" color="#bababa" />}
                        error={errors.senha && touched.senha}
                    />
                    {touched.senha && errors.senha &&
                        <HelperText type="error" visible={errors.senha} padding='none'>
                            {errors.senha}
                        </HelperText>
                    }

                    <ContainerButton>    
                        <BtnOpacity onPress={handleSubmit}>
                            {
                                loading ? (
                                    <ActivityIndicator color="#fff" size={20} style={{paddingLeft: 10, paddingRight: 10}} />
                                ) : (
                                    <TextBtn>Atualizar</TextBtn>
                                )
                            }
                        </BtnOpacity>
                    </ContainerButton>
                </ContainerForm>
                
                <ContainerText>
                    <BtnOpacity onPress={handleDelete}>
                        <TextCadastro>Excluir Conta!</TextCadastro>
                    </BtnOpacity>
                </ContainerText>

                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title={tituloAlert}
                    message={msgAlert}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="Entendi"
                    confirmButtonColor={tituloAlert == 'Sucesso' ? "#55dd67" :"#DD6B55"}
                    onConfirmPressed={() => {
                        setShowAlert(false);
                    }}
                />

                <AwesomeAlert
                    show={showAlertDelete}
                    showProgress={false}
                    title={tituloAlert}
                    message={msgAlert}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    confirmText="Entendi"
                    cancelText="Cancelar"
                    cancelButtonColor="#DD6B55"
                    confirmButtonColor="#55dd67"
                    onConfirmPressed={() => {
                        setShowAlertDelete(false);
                        setDeleteUser(true);
                    }}
                    onCancelPressed={() => {
                        setShowAlertDelete(false);
                    }}
                />
            </Container>
        )}
        </Formik>
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