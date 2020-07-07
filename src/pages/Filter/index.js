import React from 'react';

import * as S from './styles';

export default function Filter() {
  return (
    <S.Container>
      <S.Title>Select Category</S.Title>
      <S.CategoriesList>
        <S.CategoryContainer active>
          <S.CategoryTitle active>Italian</S.CategoryTitle>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryTitle>Chinese</S.CategoryTitle>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryTitle>Mexican</S.CategoryTitle>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryTitle>Thai</S.CategoryTitle>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryTitle>Arabian</S.CategoryTitle>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryTitle>Indian</S.CategoryTitle>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryTitle>American</S.CategoryTitle>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryTitle>Korean</S.CategoryTitle>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryTitle>European</S.CategoryTitle>
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
      <S.ButtonsContainer>
        <S.ButtonContainer first>
          <S.ButtonText>Reset</S.ButtonText>
        </S.ButtonContainer>
        <S.ButtonContainer>
          <S.ButtonText>Apply</S.ButtonText>
        </S.ButtonContainer>
      </S.ButtonsContainer>
    </S.Container>
  );
}
