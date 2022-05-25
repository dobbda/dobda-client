import React, { FC } from 'react';
import { Container } from './Layout.Element';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="container">
      <div className="wrapper">
        <nav className="tablet-nav">tablet size navbar</nav>
        <nav className="mobile-nav">mobile size navbar</nav>

        <div className="main">
          <nav className="window-nav">full screen navbar</nav>

          <div className="content">
            <div>메인 콘텐츠 관련</div>
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
