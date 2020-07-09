import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Feather';

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 0 8px;
  margin: 0 8px;
`;

export const ButtonIcon = styled(Icon)`
  color: ${({ light }) => (light ? '#fff' : '#222455')};
`;
