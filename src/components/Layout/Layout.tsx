import React, { FC,useState } from 'react';
import { Container,Banner } from './style/Layout.Element';
import MainContent from 'src/components/MainContent/MainContent';

import { NavbarMobile, Navbar } from './Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="container">
        <nav className="navigation">
          <NavbarMobile />
          <Navbar />
        </nav>
        <div className="main">
          <div className="layout-content">
            {children}
          </div>
        </div>

      <Banner className="banner">사이드바</Banner>
    </Container>
  );
};

export default Layout;
