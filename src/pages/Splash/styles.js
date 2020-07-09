import styled from 'styled-components';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TitleButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75,
})``;

export const Title = styled.Text`
  font-size: 54px;
  font-family: 'JosefinSans-Bold';
  color: #303050;
`;
