import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function HeaderButton({ iconName, focused, color, size }) {
  return (
    <S.ButtonIcon
      name={`${iconName}${!focused ? '-outline' : ''}`}
      size={size}
      color={color}
    />
  );
}

HeaderButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  focused: PropTypes.bool.isRequired,
};
