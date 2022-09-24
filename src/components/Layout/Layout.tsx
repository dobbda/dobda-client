import React, { FC, useState, PropsWithChildren } from 'react';
import * as S from './style/Layout.style';
import Banner from '../Banner/Banner';
import { HeaderNav } from 'src/components/common';
import * as API from 'src/api';
import { GlobalStyle } from 'src/styles/GlobalStyle';
import { SideContentLeft, SideContentRight } from 'src/components/SideContent';
import { useScroll, useWindowSize } from 'src/hooks';

interface Props {
  sideRight?: boolean;
  sideLeft?: boolean;
}
const Layout = ({ children, sideRight, sideLeft }: PropsWithChildren<Props>) => {
  const { width, height } = useWindowSize();
  return (
    <S.Container>
      <GlobalStyle />
      <HeaderNav />
      <S.HeaderContent></S.HeaderContent>
      <S.Position>
        <S.Wrapper>
          {sideLeft && width > 1060 && (
            <S.SideNavWrapper>
              <SideContentLeft />
            </S.SideNavWrapper>
          )}
          <S.MainWrapper>
            {sideLeft && width < 1060 && <SideContentLeft folderOpenFalse />}
            {children}
          </S.MainWrapper>
          {sideRight && (
            <S.SideNavWrapper>
              <SideContentRight />
            </S.SideNavWrapper>
          )}
        </S.Wrapper>
      </S.Position>
    </S.Container>
  );
};

export default Layout;
