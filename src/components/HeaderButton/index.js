import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function HeaderButton({ iconName, iconSize, onPress }) {
  return (
    <S.ButtonContainer onPress={onPress}>
      <S.ButtonIcon name={iconName} size={iconSize} />
    </S.ButtonContainer>
  );
}

HeaderButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

HeaderButton.defaultProps = {
  onPress: () => {},
};
