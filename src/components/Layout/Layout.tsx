import React, { FC,useState } from 'react';
import { Container ,Banner} from './style/Layout.Element';
import MainContent from 'src/components/MainContent/MainContent';

import { NavbarMobile, Navbar } from './Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [fake, setfake] = useState(false)
  return (
    <Container className="container">
      <div className="wrapper">
        <nav className="tablet-nav">
          <NavbarMobile />
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
