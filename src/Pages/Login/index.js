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
import { useNavigation } from '@react-navigation/native';


let achou = false;

export default function Login() {
    const [showAlert, setShowAlert] = useState(false);
    const [tituloAlert, setTituloAlert] = useState('');
    const [msgAlert, setMsgAlert] = useState('');
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const { getAllPlayers, setActualPlayer, setAllPlayers } = React.useContext(DataContext);
    const { signIn } = React.useContext(AuthContext);


    const Logar = async (player) => {

        const AllPlayers = await getAllPlayers();

        AllPlayers.map((realPlayer) => {
            if(player.email == realPlayer.email && player.senha == realPlayer.password){
                setActualPlayer(realPlayer);
                achou = true;
            }else if(!achou){
                achou = false;
            }
        })

        setAllPlayers(AllPlayers.sort((a, b) => a.score < b.score ? 1: -1));
        
        if(!achou){
            setLoading(false);
            setTituloAlert('Error');
            setMsgAlert('Usuário ou senha inválido!');
            setShowAlert(true);
        }else{
            signIn();
        }

    }
    return (
        <Formik
            enableReinitialize={true}
            initialValues={{ 
            email: '',
            senha: '' 
            }}
            onSubmit={
                (values) => {
                    setLoading(true);
                    Logar(values);
                }
            }
            validationSchema={ yup.object().shape({
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
                <Titulo>Login</Titulo>
                <ContainerForm>
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
                                    <TextBtn>Entrar</TextBtn>
                                )
                            }
                        </BtnOpacity>
                    </ContainerButton>
                </ContainerForm>
                
                <ContainerText>
                    <BtnOpacity onPress={() => navigation.navigate('Cadastro')}>
                        <TextCadastro>Não possui conta? Cadastre-se aqui.</TextCadastro>
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