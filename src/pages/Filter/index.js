import React from 'react';

import * as S from './styles';

export default function Filter() {
  return (
    <>
      <S.SafeAreaContainer>
        <S.ContainerScroll>
          <S.Title>Select Category</S.Title>
          <S.CategoriesList>
            <S.CategoryContainer>
              <S.CategoryGradient active>
                <S.CategoryTitle active>Italian</S.CategoryTitle>
              </S.CategoryGradient>
            </S.CategoryContainer>
            <S.CategoryContainer>
              <S.CategoryGradient>
                <S.CategoryTitle>Chinese</S.CategoryTitle>
              </S.CategoryGradient>
            </S.CategoryContainer>
            <S.CategoryContainer>
              <S.CategoryGradient>
                <S.CategoryTitle>Mexican</S.CategoryTitle>
              </S.CategoryGradient>
            </S.CategoryContainer>
            <S.CategoryContainer>
              <S.CategoryGradient>
                <S.CategoryTitle>Thai</S.CategoryTitle>
              </S.CategoryGradient>
            </S.CategoryContainer>
            <S.CategoryContainer>
              <S.CategoryGradient>
                <S.CategoryTitle>Arabian</S.CategoryTitle>
              </S.CategoryGradient>
            </S.CategoryContainer>
            <S.CategoryContainer>
              <S.CategoryGradient>
                <S.CategoryTitle>Indian</S.CategoryTitle>
              </S.CategoryGradient>
            </S.CategoryContainer>
            <S.CategoryContainer>
              <S.CategoryGradient>
                <S.CategoryTitle>American</S.CategoryTitle>
              </S.CategoryGradient>
            </S.CategoryContainer>
            <S.CategoryContainer>
              <S.CategoryGradient>
                <S.CategoryTitle>Korean</S.CategoryTitle>
              </S.CategoryGradient>
            </S.CategoryContainer>
            <S.CategoryContainer>
              <S.CategoryGradient>
                <S.CategoryTitle>European</S.CategoryTitle>
              </S.CategoryGradient>
            </S.CategoryContainer>
          </S.CategoriesList>
          <S.Title>Distance</S.Title>
          <S.Title>Ratings</S.Title>
          <S.RatingContainer>
            <S.RatingButton>
              <S.RatingIcon name="star" active />
            </S.RatingButton>
            <S.RatingButton>
              <S.RatingIcon name="star" active />
            </S.RatingButton>
            <S.RatingButton>
              <S.RatingIcon name="star" active />
            </S.RatingButton>
            <S.RatingButton>
              <S.RatingIcon name="star" />
            </S.RatingButton>
            <S.RatingButton>
              <S.RatingIcon name="star" />
            </S.RatingButton>
          </S.RatingContainer>
        </S.ContainerScroll>
        <S.ButtonsContainer>
          <S.ButtonContainer first>
            <S.ButtonText>Reset</S.ButtonText>
          </S.ButtonContainer>
          <S.ButtonsSeparator />
          <S.ButtonContainer>
            <S.ButtonText>Apply</S.ButtonText>
          </S.ButtonContainer>
        </S.ButtonsContainer>
      </S.SafeAreaContainer>
      <S.BottomContainer />
    </>
  );
}
