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

export const FormContainer = styled.View`
  flex: 1;
  padding: 0 32px;
  margin-top: ${({ headerHeight }) => headerHeight}px;
`;

export const Description = styled.Text`
  font-family: 'JosefinSans-Light';
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin-bottom: 54px;
  margin-top: 80px;
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

export const SendButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin: 43px 32px;
  padding: 24px 0;
  align-items: center;
  border-radius: 8px;
  background-color: #5663ff;
`;

export const SendButtonText = styled.Text`
  font-family: 'JosefinSans-SemiBold';
  font-size: 18px;
  color: #fff;
`;

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 0;
`;
