import React, { FC,useState ,PropsWithChildren} from 'react';
import { Container } from './style/Layout.Element';
import Banner from '../Banner/Banner';
import MainContent from 'src/components/MainContent/MainContent';

import { NavbarMobile, Navbar } from './Navigation';
type Props = {
  paddingLeft?: boolean;
}
const Layout = ({ children,paddingLeft=true }: PropsWithChildren<Props>) => {
  return (
    <Container className="container" paddingLeft={paddingLeft}>
        <div className="navigation-caontainer">
          <NavbarMobile />
          <Navbar />
        </div>
        <div className="main-wrapper">
          <main className="layout-content">
            {children}
          </main>
        </div>

      <Banner ></Banner>
    </Container>
  );
};

export default Layout;
