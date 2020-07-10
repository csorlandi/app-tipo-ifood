import React from 'react';

import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import imageBackground from '~/assets/images/set-location-background.jpg';

export default function SetLocation() {
  const navigation = useNavigation();

  return (
    <S.ContainerBackground source={imageBackground}>
      <StatusBar barStyle="light-content" />
      <S.ContainerGradient>
        <S.SafeAreaContainer>
          <S.ContentContainer>
            <S.SkipButtonContainer
              onPress={() => navigation.navigate('home-tabs')}
            >
              <S.SkipButtonBackground
                blurType="light"
                blurAmount={2}
                reducedTransparencyFallbackColor="white"
              >
                <S.SkipButtonText>Skip</S.SkipButtonText>
              </S.SkipButtonBackground>
            </S.SkipButtonContainer>
            <S.Title>Hi John,</S.Title>
            <S.Title>
              Welcome to <S.FeaturedTitle>Foodybite</S.FeaturedTitle>
            </S.Title>
            <S.Description>
              Please turn on your GPS to find out better restaurant suggestions
              near you.
            </S.Description>
          </S.ContentContainer>
          <S.SetLocationButtonContainer
            onPress={() => navigation.navigate('home-tabs')}
          >
            <S.SetLocationButtonText>Turn On GPS</S.SetLocationButtonText>
          </S.SetLocationButtonContainer>
        </S.SafeAreaContainer>
      </S.ContainerGradient>
    </S.ContainerBackground>
  );
}
