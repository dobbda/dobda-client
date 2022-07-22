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
      <S.Wrapper paddingLeft={paddingLeft}>
        <div className="sideMenuWrapper">
          <SideNav/>
        </div>
        <div className="ContentWrapper">
          {children}
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default Layout;
