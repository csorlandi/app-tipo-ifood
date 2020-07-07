import styled from 'styled-components';

import { Dimensions } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'JosefinSans-SemiBold';
  color: #3e3f68;
  text-align: center;
  margin-top: 48px;
  margin-bottom: 24px;
`;

export const CategoriesList = styled.View`
  flex-direction: row;
  align-self: stretch;
  margin: 0 24px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CategoryContainer = styled(LinearGradient).attrs(({ active }) => ({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  colors: [
    active ? 'rgba(255, 140, 72, 0.65)' : '#fff',
    active ? 'rgba(255, 86, 114, 0.65)' : '#fff',
  ],
}))`
  width: ${(width - 80) / 3}px;
  padding: 12px 0;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border-width: ${({ active }) => (active ? 0 : 1)}px;
  border-color: 'rgba(112, 112, 112, 0.4)';
  margin-bottom: 16px;
`;

export const CategoryTitle = styled.Text`
  font-family: 'JosefinSans-SemiBold';
  color: ${({ active }) => (active ? '#fff' : 'rgba(62, 63, 104,0.5)')};
  font-size: 18px;
`;

export const RatingContainer = styled.View`
  align-self: center;
  padding: 8px 8px;
  background-color: 'rgba(238, 247, 255, 0.51)';
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const RatingIcon = styled(Icon)`
  font-size: 32px;
  color: ${({ active }) => (active ? '#FFCC00' : '#E0E5EE')};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  background-color: #5663ff;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  margin-top: auto;
`;

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 24px 0;
  border-right-width: ${({ first }) => (first ? 1 : 0)}px;
  border-color: #9aa1f8;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-family: 'JosefinSans-SemiBold';
  font-size: 18px;
`;
