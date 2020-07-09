import styled from 'styled-components';

import { StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerBackground = styled.ImageBackground`
  flex: 1;
`;

export const ContainerGradient = styled(LinearGradient).attrs({
  colors: ['rgba(45,45,45,0.6)', 'rgba(22, 22, 22, 0.6)', '#000'],
})`
  flex: 1;
`;

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'JosefinSans-Bold';
  font-size: 41px;
  color: #ffffff;
  text-align: center;
`;

export const FormContainer = styled.View`
  padding: 0 32px;
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

export const ForgotButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 4px;
  align-self: flex-end;
`;

export const ForgotButtonText = styled.Text`
  font-family: 'JosefinSans-Regular';
  font-size: 16px;
  color: #fff;
`;

export const SignInButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin: 69px 0;
  padding: 24px 0;
  align-items: center;
  border-radius: 8px;
  background-color: #5663ff;
`;

export const SignInButtonText = styled.Text`
  font-family: 'JosefinSans-Regular';
  font-size: 16px;
  color: #fff;
`;

export const SignUpContainer = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

export const SignUpButtonContainer = styled.TouchableOpacity`
  padding: 4px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #fff;
`;

export const SignUpButtonText = styled.Text`
  font-family: 'JosefinSans-Light';
  font-size: 16px;
  color: #fff;
`;
