import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function HeaderButton({ iconName, iconSize, onPress, light }) {
  return (
    <S.ButtonContainer onPress={onPress}>
      <S.ButtonIcon name={iconName} size={iconSize} light={light} />
    </S.ButtonContainer>
  );
}

HeaderButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  light: PropTypes.bool,
};

HeaderButton.defaultProps = {
  onPress: () => {},
  light: false,
};
