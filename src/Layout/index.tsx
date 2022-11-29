import React, { PropsWithChildren } from 'react';
import * as S from './style/Layout.style';
import { HeaderNav } from 'src/components/common';
import { Keyword, SideContentRight } from 'src/components/SideContent';
import { useWindowSize } from 'src/hooks';
import BnCarousel from '../components/banner/BnCarousel';
import Suport from 'src/components/Admin/support';

interface Props {
  sideRight?: boolean;
  sideLeft?: boolean;
  banner?: boolean;
  myNavigator?: boolean;
}
export const Layout = ({ children, sideRight = false, sideLeft = false, banner = false }: PropsWithChildren<Props>) => {
  const { width, height } = useWindowSize();

  return (
    <S.Container>
      <HeaderNav />
      <S.HeaderContent>{banner && <BnCarousel />}</S.HeaderContent>
      <S.Position>
        <S.Wrapper>
          {sideLeft && width > 1060 && (
            <S.SideNavWrapper>
              <Keyword />
            </S.SideNavWrapper>
          )}
          <S.MainWrapper>{children}</S.MainWrapper>
          {sideRight && (
            <S.SideNavWrapper>
              {sideLeft && width < 1060 && <Keyword folderOpenFalse />}
              <SideContentRight />
              <Suport />
            </S.SideNavWrapper>
          )}
        </S.Wrapper>
      </S.Position>
    </S.Container>
  );
};
