import React from 'react';

import * as S from './styles';

import backgroundImage from '~/assets/images/splash-background.png';

export default function Splash() {
  return (
    <S.Container source={backgroundImage}>
      <S.Title>Foodybite</S.Title>
    </S.Container>
  );
}
