import styled from 'styled-components';

import { Dimensions, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const { width } = Dimensions.get('window');

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const ContainerScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  directionalLockEnabled: true,
})``;

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

export const CategoryContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const CategoryGradient = styled(LinearGradient).attrs(({ active }) => ({
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
`;

export const CategoryTitle = styled.Text`
  font-family: 'JosefinSans-SemiBold';
  color: ${({ active }) => (active ? '#fff' : 'rgba(62, 63, 104,0.5)')};
  font-size: 18px;
`;

export const RatingContainer = styled.View`
  align-self: center;
  padding: 8px 16px;
  background-color: 'rgba(238, 247, 255, 0.55)';
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 8px;
`;

export const RatingIcon = styled(Icon)`
  font-size: 38px;
  color: ${({ active }) => (active ? '#FFCC00' : '#E0E5EE')};
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  background-color: #5663ff;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  margin-top: auto;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: #9aa1f8;
`;

export const ButtonsSeparator = styled.View`
  width: ${StyleSheet.hairlineWidth}px;
  background-color: #9aa1f8;
`;

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex: 1;
  align-items: center;
  padding: 24px 0;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-family: 'JosefinSans-SemiBold';
  font-size: 18px;
`;

export const BottomContainer = styled.SafeAreaView`
  flex: 0;
  background-color: #5663ff;
`;
