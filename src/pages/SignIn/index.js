import React from 'react';

import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import imageBackground from '~/assets/images/signin-background.jpg';

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <S.ContainerBackground source={imageBackground}>
      <StatusBar barStyle="light-content" />
      <S.ContainerGradient>
        <S.SafeAreaContainer>
          <S.TitleContainer>
            <S.Title>Foodybite</S.Title>
          </S.TitleContainer>
          <S.FormContainer>
            <S.InputContainer>
              <S.InputIcon name="mail" />
              <S.Input placeholder="Email" />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputIcon name="lock" />
              <S.Input placeholder="Password" secureTextEntry />
            </S.InputContainer>
            <S.ForgotButtonContainer
              onPress={() => navigation.navigate('forgot-password')}
            >
              <S.ForgotButtonText>Forgot Password?</S.ForgotButtonText>
            </S.ForgotButtonContainer>
            <S.SignInButtonContainer
              onPress={() => navigation.navigate('set-location')}
            >
              <S.SignInButtonText>Login</S.SignInButtonText>
            </S.SignInButtonContainer>
          </S.FormContainer>
          <S.SignUpContainer>
            <S.SignUpButtonContainer
              onPress={() => navigation.navigate('sign-up')}
            >
              <S.SignUpButtonText>Create New Account</S.SignUpButtonText>
            </S.SignUpButtonContainer>
          </S.SignUpContainer>
        </S.SafeAreaContainer>
      </S.ContainerGradient>
    </S.ContainerBackground>
  );
}
