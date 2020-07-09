import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import backgroundImage from '~/assets/images/splash-background.png';

export default function Splash() {
  const navigation = useNavigation();

  return (
    <S.Container source={backgroundImage}>
      <S.TitleButton onPress={() => navigation.navigate('sign-in')}>
        <S.Title>Foodybite</S.Title>
      </S.TitleButton>
    </S.Container>
  );
}
