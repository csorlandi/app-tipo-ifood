import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import * as S from './styles';

Icon.loadFont();

const Splash = () => {
  return (
    <S.Container>
      <S.Title>Splash Screen</S.Title>
    </S.Container>
  );
};

export default Splash;
