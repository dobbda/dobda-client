import React from 'react';
import { useQuery } from 'react-query';

import { CategoriesEvent } from '../../lib/categoryHover';
import { Main } from './style/MainContent.Element';
import SearchBox from './SearchBox'
import QCard from '../Card/QCard'
import RCard from '../Card/RCard'

interface Props {
  children?: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
  CategoriesEvent(); // Category Click Hover Events
  const {data, error} = useQuery("questions", {
    initialData: '',
    staleTime: Infinity,
  })

  return (
    <Main>
      <div className="search-wrapper"> 
      <SearchBox/>

      </div>

      <div className="category-wrapper">
        <span className="selected">전체</span>
        <span>질문</span>
        <span>요청</span>
        <span>댓글</span>

      </div>
      {/** main content card  **/}
      <div className="main-content">
        <ul className="card-grid">
          <QCard />
          <QCard />
          <RCard />

          <RCard />          
          <QCard />
          <RCard />
          <QCard />
          <RCard />
          <QCard />
          <RCard />          
          <QCard />
          <RCard />
        </ul>
      </div>

    </Main>
  );
};

export default MainContent;
