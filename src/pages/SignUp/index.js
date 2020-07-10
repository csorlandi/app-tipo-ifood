import React from 'react';

import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import imageBackground from '~/assets/images/signup-background.jpg';

export default function SignUp() {
  const navigation = useNavigation();

  return (
    <S.ContainerBackground source={imageBackground}>
      <StatusBar barStyle="light-content" />
      <S.ContainerGradient>
        <S.SafeAreaContainer>
          <S.FormContainer>
            <S.AvatarContainer>
              <S.AvatarUploadContainer>
                <S.AvatarUploadContainerGradient
                  blurType="light"
                  blurAmount={2}
                  reducedTransparencyFallbackColor="white"
                >
                  <S.AvatarUploadIcon name="user" />
                </S.AvatarUploadContainerGradient>
                <S.UploadIndicatorContainer>
                  <S.UploadIndicatorIcon name="arrow-up" />
                </S.UploadIndicatorContainer>
              </S.AvatarUploadContainer>
            </S.AvatarContainer>
            <S.InputContainer>
              <S.InputIcon name="user" />
              <S.Input placeholder="Name" />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputIcon name="mail" />
              <S.Input placeholder="Email" />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputIcon name="lock" />
              <S.Input placeholder="Password" secureTextEntry />
            </S.InputContainer>
            <S.InputContainer>
              <S.InputIcon name="lock" />
              <S.Input placeholder="Confirm Password" secureTextEntry />
            </S.InputContainer>
            <S.SignUpButtonContainer onPress={() => navigation.goBack()}>
              <S.SignUpButtonText>Register</S.SignUpButtonText>
            </S.SignUpButtonContainer>
          </S.FormContainer>
          <S.SignInContainer>
            <S.SignInButtonContainer onPress={() => navigation.goBack()}>
              <S.SignInButtonText>
                Already have an account?{' '}
                <S.SignInFeatured>Login</S.SignInFeatured>
              </S.SignInButtonText>
            </S.SignInButtonContainer>
          </S.SignInContainer>
        </S.SafeAreaContainer>
      </S.ContainerGradient>
    </S.ContainerBackground>
  );
}
