import React, { FC, useState, PropsWithChildren } from 'react';
import * as S from './style/Layout.Element';
import Banner from '../Banner/Banner';

import { HeaderNav, SideNav } from './Navigation';
type Props = {
  paddingLeft?: boolean;
};
const Layout = ({ children, paddingLeft = true }: PropsWithChildren<Props>) => {
  return (
    <S.Container>
      <HeaderNav />
      <S.HeaderAreas />
      <S.Wrapper paddingLeft={paddingLeft}>
        <S.SideNavWrapper>
          <SideNav />
        </S.SideNavWrapper>

        <S.CenterSection>
			{children}
		
		</S.CenterSection>

        <S.Aside>aside</S.Aside>
      </S.Wrapper>
    </S.Container>
  );
};

export default Layout;
