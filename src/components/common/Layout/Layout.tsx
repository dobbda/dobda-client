import React, { FC } from 'react';
import { Container } from './Layout.Element';
import MainContent from 'src/components/MainContent/MainContent';
const Layout = ({ children }: { children: React.ReactNode }) => {
  const arr = [{num:1},{num:2},{num:3}];
  return (
    <Container className="container">
      <div className="wrapper">
        <nav className="tablet-nav">tablet size navbar</nav>
        <nav className="mobile-nav">mobile size navbar</nav>

        <div className="main">
          <nav className="window-nav">full screen navbar</nav>
          
          <div className="content">
            <MainContent>
              <li> <h2>카드</h2> </li>
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
