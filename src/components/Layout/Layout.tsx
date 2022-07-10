import React, { FC,useState } from 'react';
import { Container } from './style/Layout.Element';
import MainContent from 'src/components/MainContent/MainContent';

import { NavbarMobile, Navbar } from './Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [fake, setfake] = useState(false)
  return (
    <Container className="container">
      <div className="wrapper">
        <nav className="navigation">
          <NavbarMobile />
          <Navbar />
        </nav>
        <nav className="window-nav">

        </nav>

        <div className="main">


          <div className="layout-content">
            {children}
          </div>

        </div>

      </div>

    </Container>
  );
};

export default Layout;
