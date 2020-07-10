import styled from 'styled-components';

import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';

export const ContainerBackground = styled.ImageBackground`
  flex: 1;
`;

export const ContainerGradient = styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0,0.3)', 'rgba(0,0,0, 0.7)', '#000'],
})`
  flex: 1;
`;

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

export const ContentContainer = styled.View`
  padding: 0 32px;
  flex: 1;
  justify-content: flex-end;
`;

export const SkipButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 8px;
`;

export const SkipButtonBackground = styled(BlurView)`
  padding: 11px 22px;
  border-radius: 8px;
`;

export const SkipButtonText = styled.Text`
  font-family: 'JosefinSans-Regular';
  font-size: 16px;
  color: #fff;
`;

export const Title = styled.Text`
  color: #fff;
  font-family: 'JosefinSans-SemiBold';
  font-size: 42px;
  line-height: 54px;
`;

export const FeaturedTitle = styled.Text`
  color: #ffcc00;
  font-family: 'JosefinSans-SemiBold';
  font-size: 42px;
`;

export const Description = styled.Text`
  font-family: 'JosefinSans-Light';
  font-size: 22px;
  color: #fff;
  line-height: 28px;
  margin: 66px 24px 66px 0;
`;

export const SetLocationButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin: 43px 32px;
  padding: 24px 0;
  align-items: center;
  border-radius: 8px;
  background-color: #5663ff;
`;

export const SetLocationButtonText = styled.Text`
  font-family: 'JosefinSans-Regular';
  font-size: 16px;
  color: #fff;
`;
