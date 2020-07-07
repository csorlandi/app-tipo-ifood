import styled from 'styled-components';

import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

FontAwesome.loadFont();

const { width } = Dimensions.get('window');

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const FindInputContainer = styled.View`
  margin: 0 24px;
  background-color: #fff;
  border-radius: 8px;
  flex-direction: row;
  height: 48px;
  border-width: 1px;
  border-color: #e8e8e8;
`;

export const FindInputButtonContainer = styled.TouchableOpacity`
  padding: 0 16px;
  align-self: stretch;
  justify-content: center;
  border-radius: 8px;
`;

export const FindInputIcon = styled(Icon)`
  color: #b6bed4;
  font-size: 18px;
`;

export const FindInput = styled.TextInput.attrs({
  placeholderTextColor: '#6E7FAA',
})`
  flex: 1;
  font-family: 'JosefinSans-Regular';
  font-size: 18px;
  color: #6e7faa;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  margin: 0 24px;
  margin-top: 32px;
  align-items: flex-end;
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 24px;
  font-family: 'JosefinSans-SemiBold';
  color: #222455;
`;

export const SubTitleButton = styled.TouchableOpacity``;

export const SubTitle = styled.Text`
  font-family: 'JosefinSans-Regular';
  color: #6e7faa;
  font-size: 16px;
`;

export const TrendingListContainer = styled.View``;

export const TrendingList = styled.ScrollView.attrs({
  horizontal: true,
})`
  margin-top: 24px;
`;

export const TrendingCardContainer = styled.View`
  margin-left: 32px;
  width: ${width * 0.8}px;
  border-radius: 8px;
  background-color: #fff;
  align-self: flex-start;
  border-width: 1px;
  border-color: #e8e8e8;
`;

export const TrendingCardImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  imageStyle: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
})`
  flex-direction: row;
  height: ${(width * 0.8) / 1.88}px;
  padding: 8px;
  justify-content: space-between;
`;

export const TagContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #fff;
  align-self: flex-start;
`;

export const OpenText = styled.Text`
  text-transform: uppercase;
  font-family: 'JosefinSans-Bold';
  font-size: 12px;
  color: #4cd964;
`;

export const RatingIcon = styled(FontAwesome)`
  color: #ffcc00;
`;

export const RatingText = styled.Text`
  font-family: 'JosefinSans-SemiBold';
  font-size: 14px;
  color: #222455;
  margin-left: 4px;
`;

export const TrendingCardTitleContainer = styled.View`
  flex-direction: row;
  margin: 0 16px;
  margin-top: 16px;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-family: 'JosefinSans-Bold';
  font-size: 20px;
  color: #3e3f68;
`;

export const CardTagsContainer = styled(LinearGradient).attrs(
  ({ firstColor, secondColor }) => ({
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colors: [firstColor, secondColor],
  }),
)`
  padding: 4px 8px;
  border-radius: 24px;
  margin-left: 8px;
`;

export const CardTags = styled.Text`
  font-family: 'JosefinSans-Regular';
  font-size: 14px;
  color: #fff;
`;

export const TrendingCardAddress = styled.Text`
  color: #8a98ba;
  font-family: 'JosefinSans-Regular';
  font-size: 14px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  margin-top: 8px;
`;

export const CategoriesContainer = styled.View`
  flex-direction: row;
  margin: 0 24px;
  margin-top: 24px;
  justify-content: space-between;
`;

export const CategoryBackground = styled.ImageBackground.attrs({
  resizeMode: 'cover',
  imageStyle: {
    borderRadius: 8,
  },
})`
  width: ${(width - 60) / 3}px;
  height: ${(width - 60) / 3}px;
  border-radius: 8px;
`;

export const CategoryGradient = styled(LinearGradient).attrs(
  ({ firstColor, secondColor }) => ({
    colors: [firstColor, secondColor],
  }),
)`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const CategoryText = styled.Text`
  font-family: 'JosefinSans-Bold';
  font-size: 20px;
  color: #ffffff;
`;

export const UsersContainer = styled.View`
  flex-direction: row;
  margin: 0 24px;
  margin-top: 24px;
  justify-content: space-between;
`;

export const User = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${(width - 108) / 6}px;
  height: ${(width - 108) / 6}px;
  border-radius: ${(width - 108) / 12}px;
`;
