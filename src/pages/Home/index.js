import React from 'react';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import cardImage from '~/assets/images/trending-restaurants-1.jpg';
import userImage from '~/assets/images/user.png';

export default function Home() {
  const navigation = useNavigation();

  return (
    <S.SafeAreaContainer>
      <S.FindInputContainer>
        <S.FindInputButtonContainer>
          <S.FindInputIcon name="search" />
        </S.FindInputButtonContainer>
        <S.FindInput placeholder="Find Restaurants" />
        <S.FindInputButtonContainer
          onPress={() => navigation.navigate('filter')}
        >
          <S.FindInputIcon name="sliders" />
        </S.FindInputButtonContainer>
      </S.FindInputContainer>
      <S.TitleContainer>
        <S.Title>Trending Restaurants</S.Title>
        <S.SubTitleButton>
          <S.SubTitle>See all (45)</S.SubTitle>
        </S.SubTitleButton>
      </S.TitleContainer>
      <S.TrendingListContainer>
        <S.TrendingList>
          <S.TrendingCardContainer>
            <S.TrendingCardImage source={cardImage}>
              <S.TagContainer>
                <S.OpenText>open</S.OpenText>
              </S.TagContainer>
              <S.TagContainer>
                <S.RatingIcon name="star" />
                <S.RatingText>4.5</S.RatingText>
              </S.TagContainer>
            </S.TrendingCardImage>
            <S.TrendingCardTitleContainer>
              <S.CardTitle>Happy Bones</S.CardTitle>
              <S.CardTagsContainer
                firstColor="rgba(255, 140, 72, 0.65)"
                secondColor="rgba(255, 86, 114, 0.65)"
              >
                <S.CardTags>Italian</S.CardTags>
              </S.CardTagsContainer>
              <S.CardTagsContainer
                firstColor="rgba(132, 141, 255, 0.65)"
                secondColor="rgba(132, 141, 255, 0.65)"
              >
                <S.CardTags>1.2km</S.CardTags>
              </S.CardTagsContainer>
            </S.TrendingCardTitleContainer>
            <S.TrendingCardAddress>
              394 Broome St, New York, NY 10013, USA
            </S.TrendingCardAddress>
          </S.TrendingCardContainer>
        </S.TrendingList>
      </S.TrendingListContainer>
      <S.TitleContainer>
        <S.Title>Category</S.Title>
        <S.SubTitleButton onPress={() => navigation.navigate('categories')}>
          <S.SubTitle>See all (9)</S.SubTitle>
        </S.SubTitleButton>
      </S.TitleContainer>
      <S.CategoriesContainer>
        <S.CategoryBackground source={cardImage}>
          <S.CategoryGradient
            firstColor="rgba(255, 86, 115, 0.65)"
            secondColor="rgba(255, 140, 72, 0.65)"
          >
            <S.CategoryText>Italian</S.CategoryText>
          </S.CategoryGradient>
        </S.CategoryBackground>
        <S.CategoryBackground source={cardImage}>
          <S.CategoryGradient
            firstColor="rgba(131, 43, 246, 0.65)"
            secondColor="rgba(255, 70, 101, 0.65)"
          >
            <S.CategoryText>Chinese</S.CategoryText>
          </S.CategoryGradient>
        </S.CategoryBackground>
        <S.CategoryBackground source={cardImage}>
          <S.CategoryGradient
            firstColor="rgba(45, 207, 248, 0.65)"
            secondColor="rgba(59, 66, 254, 0.65)"
          >
            <S.CategoryText>Mexican</S.CategoryText>
          </S.CategoryGradient>
        </S.CategoryBackground>
      </S.CategoriesContainer>
      <S.TitleContainer>
        <S.Title>Friends</S.Title>
        <S.SubTitleButton>
          <S.SubTitle>See all (56)</S.SubTitle>
        </S.SubTitleButton>
      </S.TitleContainer>
      <S.UsersContainer>
        <S.User source={userImage} />
        <S.User source={userImage} />
        <S.User source={userImage} />
        <S.User source={userImage} />
        <S.User source={userImage} />
        <S.User source={userImage} />
      </S.UsersContainer>
    </S.SafeAreaContainer>
  );
}
