import styled from 'styled-components';

import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const CategoriesList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 0 24px;
`;

export const CategoryContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 12px;
  border-radius: 8px;
`;

export const CategoryBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  imageStyle: {
    borderRadius: 8,
  },
})`
  flex: 1;
  border-radius: 8px;
`;

export const CategoryGradient = styled(LinearGradient).attrs(
  ({ firstColor, secondColor }) => ({
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colors: [firstColor, secondColor],
  }),
)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding: 24px;
`;

export const CategoryTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-family: 'JosefinSans-SemiBold';
  color: #fff;
  font-size: 28px;
`;

export const CategoryDetail = styled.View`
  align-self: stretch;
  width: 4px;
  border-radius: 4px;
  background-color: 'rgba(255,255,255,0.51)';
`;
