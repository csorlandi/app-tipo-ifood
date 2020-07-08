import React from 'react';

import * as S from './styles';

import backgroundImage from '~/assets/images/trending-restaurants-1.jpg';

export default function Categories() {
  return (
    <S.Container>
      <S.CategoriesList>
        <S.CategoryContainer>
          <S.CategoryBackground source={backgroundImage}>
            <S.CategoryGradient
              firstColor="rgba(255, 86, 114, 0.85)"
              secondColor="rgba(255, 140, 72, 0.85)"
            >
              <S.CategoryTitle>Italian</S.CategoryTitle>
              <S.CategoryDetail />
            </S.CategoryGradient>
          </S.CategoryBackground>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryBackground source={backgroundImage}>
            <S.CategoryGradient
              firstColor="rgba(255, 70, 101, 0.85)"
              secondColor="rgba(131, 43, 246, 0.85)"
            >
              <S.CategoryTitle>Chinese</S.CategoryTitle>
              <S.CategoryDetail />
            </S.CategoryGradient>
          </S.CategoryBackground>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryBackground source={backgroundImage}>
            <S.CategoryGradient
              firstColor="rgba(59, 64, 254, 0.85)"
              secondColor="rgba(45, 206, 248, 0.85)"
            >
              <S.CategoryTitle>Mexican</S.CategoryTitle>
              <S.CategoryDetail />
            </S.CategoryGradient>
          </S.CategoryBackground>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryBackground source={backgroundImage}>
            <S.CategoryGradient
              firstColor="rgba(0, 157, 197, 0.85)"
              secondColor="rgba(33, 229, 144, 0.85)"
            >
              <S.CategoryTitle>Thai</S.CategoryTitle>
              <S.CategoryDetail />
            </S.CategoryGradient>
          </S.CategoryBackground>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryBackground source={backgroundImage}>
            <S.CategoryGradient
              firstColor="rgba(255, 140, 72, 0.85)"
              secondColor="rgba(210, 54, 210, 0.85)"
            >
              <S.CategoryTitle>Arabian</S.CategoryTitle>
              <S.CategoryDetail />
            </S.CategoryGradient>
          </S.CategoryBackground>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryBackground source={backgroundImage}>
            <S.CategoryGradient
              firstColor="rgba(131, 43, 246, 0.85)"
              secondColor="rgba(255, 70, 101, 0.85)"
            >
              <S.CategoryTitle>Indian</S.CategoryTitle>
              <S.CategoryDetail />
            </S.CategoryGradient>
          </S.CategoryBackground>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryBackground source={backgroundImage}>
            <S.CategoryGradient
              firstColor="rgba(45, 206, 248, 0.85)"
              secondColor="rgba(59, 64, 254, 0.85)"
            >
              <S.CategoryTitle>American</S.CategoryTitle>
              <S.CategoryDetail />
            </S.CategoryGradient>
          </S.CategoryBackground>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryBackground source={backgroundImage}>
            <S.CategoryGradient
              firstColor="rgba(255, 139, 72, 0.85)"
              secondColor="rgba(255, 86, 115, 0.85)"
            >
              <S.CategoryTitle>Korean</S.CategoryTitle>
              <S.CategoryDetail />
            </S.CategoryGradient>
          </S.CategoryBackground>
        </S.CategoryContainer>
        <S.CategoryContainer>
          <S.CategoryBackground source={backgroundImage}>
            <S.CategoryGradient
              firstColor="rgba(0, 157, 197, 0.85)"
              secondColor="rgba(33, 229, 144, 0.85)"
            >
              <S.CategoryTitle>European</S.CategoryTitle>
              <S.CategoryDetail />
            </S.CategoryGradient>
          </S.CategoryBackground>
        </S.CategoryContainer>
      </S.CategoriesList>
    </S.Container>
  );
}
