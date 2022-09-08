import React, { FC, useState, PropsWithChildren } from 'react';
import * as S from './style/Layout.style';
import Banner from '../Banner/Banner';
import { HeaderNav } from 'src/components/common';
import * as API from 'src/api';
import { GlobalStyle } from 'src/styles/GlobalStyle';
import { SideNav } from './Navigation/SideNav';

type Props = {
  aside?: React.ReactElement;
};
const Layout = ({ children, aside }: PropsWithChildren<Props>) => {
  const setMainWidth = aside !== undefined;
  return (
    <S.Container>
      <GlobalStyle />
      <HeaderNav />
      <S.HeaderAreas />
      <S.Position setWidth={setMainWidth}>
        <S.Wrapper>
          <S.SideNavWrapper>
            <SideNav />
          </S.SideNavWrapper>

          <S.MainWrapper>{children}</S.MainWrapper>
          {aside && <S.AsideContent>{aside}</S.AsideContent>}
        </S.Wrapper>
      </S.Position>
    </S.Container>
  );
};

export default Layout;
