import styled from 'styled-components';

import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
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

export const FormContainer = styled.View`
  padding: 0 32px;
  flex: 1;
`;

export const AvatarContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AvatarUploadContainer = styled.View`
  width: 152px;
  height: 152px;
  border-radius: 76px;
`;

export const AvatarUploadContainerGradient = styled(BlurView)`
  width: 152px;
  height: 152px;
  border-radius: 76px;
  align-items: center;
  justify-content: center;
`;

export const AvatarUploadIcon = styled(Icon)`
  color: #fff;
  font-size: 50px;
`;

export const UploadIndicatorContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: #5663ff;
  position: absolute;
  right: 0;
  bottom: 0;
  border-width: 2px;
  border-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const UploadIndicatorIcon = styled(Icon)`
  color: #fff;
  font-size: 28px;
`;

export const InputContainer = styled.View`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: 'rgba(0,0,0,0.5)';
  background-color: 'rgba(255,255,255,0.22)';
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const InputIcon = styled(Icon)`
  color: #fff;
  font-size: 24px;
  margin-left: 19px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  flex: 1;
  font-size: 16px;
  font-family: 'JosefinSans-Regular';
  color: #fff;
  padding: 19px 0;
  margin-left: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const SignUpButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin: 69px 0;
  padding: 24px 0;
  align-items: center;
  border-radius: 8px;
  background-color: #5663ff;
`;

export const SignUpButtonText = styled.Text`
  font-family: 'JosefinSans-Regular';
  font-size: 16px;
  color: #fff;
`;

export const SignInContainer = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

export const SignInButtonContainer = styled.TouchableOpacity`
  padding: 4px 0;
`;

export const SignInButtonText = styled.Text`
  font-family: 'JosefinSans-Light';
  font-size: 16px;
  color: #fff;
  text-align-vertical: center;
`;

export const SignInFeatured = styled.Text`
  font-family: 'JosefinSans-Regular';
  font-size: 18px;
  color: #5663ff;
`;
