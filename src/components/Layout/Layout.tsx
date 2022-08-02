import React, { FC, useState, PropsWithChildren } from 'react';
import * as S from './style/Layout.Element';
import Banner from '../Banner/Banner';
import { HeaderNav, SideNav } from './Navigation';
import * as API from 'src/api';
type Props = {
  aside?: React.ReactElement;
};
const Layout = ({ children, aside }: PropsWithChildren<Props>) => {

  return (
    <S.Container>
      <HeaderNav />
      <S.HeaderAreas />
      <S.Wrapper>

        <S.SideAreas />
        <S.SideNavWrapper>
          <SideNav />
        </S.SideNavWrapper>

        <S.CenterSection>
          {children}
          {aside && <S.Aside>{aside}</S.Aside>}
        </S.CenterSection>
      </S.Wrapper>
    </S.Container>
  );
};

export default Layout;
