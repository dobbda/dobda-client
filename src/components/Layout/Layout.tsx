import React, { FC,useState } from 'react';
import { Container } from './style/Layout.Element';
import Banner from '../Banner/Banner';
import MainContent from 'src/components/MainContent/MainContent';

import { NavbarMobile, Navbar } from './Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="container">
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
