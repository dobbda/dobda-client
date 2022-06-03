import React, { FC } from 'react';
import { Container ,Banner, Footer} from './Layout.Element';
import MainContent from 'src/components/MainContent/MainContent';
import Navbar from 'src/components/Navbar/Navbar';
import NavbarUp from 'src/components/Navbar/NavbarUp';
const Layout = ({ children }: { children: React.ReactNode }) => {
  const arr = [{ num: 1 }, { num: 2 }, { num: 3 }];
  return (
    <Container className="container">
      <div className="wrapper">
        <nav className="tablet-nav">
          <NavbarUp />
        </nav>
        <nav className="mobile-nav">
          <NavbarUp />
        </nav>

        <div className="main">
          <nav className="window-nav">
            <Navbar />
          </nav>

          <div className="layout-content">
            <MainContent>

            </MainContent>
          </div>


        </div>
        {/* <Footer>
        <h1>footer</h1>
      </Footer> */}
      </div>
      <Banner className="banner">사이드바</Banner>

    </Container>
  );
};

export default Layout;
