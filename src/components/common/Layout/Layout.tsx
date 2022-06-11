import React, { FC } from 'react';
import { Container ,Banner} from './Layout.Element';
import MainContent from 'src/components/MainContent/MainContent';
import Navbar from 'src/components/Navbar/Navbar';
import NavbarUp from 'src/components/Navbar/NavbarUp';

const Layout = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <Container className="container">
      <div className="wrapper">
        <nav className="tablet-nav">
          <NavbarUp />
        </nav>

        <div className="main">
          <nav className="window-nav">
            <Navbar />
          </nav>

          <div className="layout-content">
            {children}
          </div>

        </div>

      </div>
      <Banner className="banner">사이드바</Banner>

    </Container>
  );
};

export default Layout;
