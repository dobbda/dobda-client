import React from 'react';
import { CategoriesEvent } from '../lib/event';
import { Main } from './style/MainContent.Element';
import SearchBox from './SearchBox'
interface Props {
  children: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
  CategoriesEvent(); // Category Click Hover Events

  return (
    <Main>
      <div> 
      <SearchBox/>

      </div>

      <div className="category-wrapper">
        <span className="selected">전체</span>
        <span>질문</span>
        <span>요청</span>
      </div>
      {/** main content card  **/}
      <div className="main-content">
        <ul className="card-grid">
          {children} {/** cards that <li>tag as parent */}
        </ul>
      </div>

    </Main>
  );
};

export default MainContent;
