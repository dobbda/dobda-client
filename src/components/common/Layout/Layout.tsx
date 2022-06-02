import React, { FC } from 'react';
import { Container } from './Layout.Element';
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

          <div className="content">
            <MainContent>
              <li>
                {' '}
                <h2>카드</h2>{' '}
              </li>
            </MainContent>
          </div>

          <aside>사이드바</aside>
        </div>
      </div>
      <footer>
        <h1>footer</h1>
      </footer>
    </Container>
  );
};

export default Layout;
