import React from 'react';

import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useHeaderHeight } from '@react-navigation/stack';

import * as S from './styles';

import imageBackground from '~/assets/images/signin-background.jpg';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();

  return (
    <S.ContainerBackground source={imageBackground}>
      <StatusBar barStyle="light-content" />
      <S.ContainerGradient>
        <S.FormContainer headerHeight={headerHeight}>
          <S.Description>
            Enter your email and will send you instructions on how to reset it
          </S.Description>
          <S.InputContainer>
            <S.InputIcon name="mail" />
            <S.Input placeholder="Email" />
          </S.InputContainer>
        </S.FormContainer>
        <S.SendButtonContainer onPress={() => navigation.goBack()}>
          <S.SendButtonText>Send</S.SendButtonText>
        </S.SendButtonContainer>
        <S.SafeAreaContainer />
      </S.ContainerGradient>
    </S.ContainerBackground>
  );
}
