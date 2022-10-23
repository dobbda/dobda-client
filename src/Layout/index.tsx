import React, { FC, useState, PropsWithChildren } from 'react';
import * as S from './style/Layout.style';
import { HeaderNav } from 'src/components/common';
import { GlobalStyle } from 'src/styles/GlobalStyle';
import { SideContentLeft, SideContentRight } from 'src/components/SideContent';
import { useScroll, useWindowSize } from 'src/hooks';
import BnCarousel from '../components/banner/BnCarouse';

interface Props {
  sideRight?: boolean;
  sideLeft?: boolean;
  banner?: boolean;
  myNavigator?: boolean;
}
export const Layout = ({ children, sideRight, sideLeft, banner, myNavigator }: PropsWithChildren<Props>) => {
  const { width, height } = useWindowSize();
  return (
    <S.Container>
      <GlobalStyle />
      <HeaderNav />
      <S.HeaderContent>{banner && <BnCarousel />}</S.HeaderContent>
      <S.Position>
        <S.Wrapper>
          {sideLeft && width > 1060 && (
            <S.SideNavWrapper>
              <SideContentLeft />
            </S.SideNavWrapper>
          )}

          <S.MainWrapper>{children}</S.MainWrapper>

          {sideRight && (
            <S.SideNavWrapper>
              {sideLeft && width < 1060 && <SideContentLeft folderOpenFalse />}
              <SideContentRight />
            </S.SideNavWrapper>
          )}
        </S.Wrapper>
      </S.Position>
    </S.Container>
  );
};
