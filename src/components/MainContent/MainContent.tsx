import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { CategoriesEvent } from '../../lib/categoryHover';
import { Main } from './style/MainContent.Element';
import SearchBox from './SearchBox';
import QCard from '../Card/QCard';
import RCard from '../Card/RCard';
import { PenIcon } from 'src/assets/icons';

interface Props {
  children?: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
  CategoriesEvent(); // Category Click Hover Events
  const { data, error } = useQuery('questions', {
    initialData: '',
    staleTime: Infinity,
  });

  return (
    <Main>
      <div className="search-wrapper">
        <SearchBox />
      </div>

      <div className="categories-menubar">
        <div className="category-wrapper">
          <span className="selected">전체</span>
          <span>질문</span>
          <span>요청</span>
          <span>댓글</span>
        </div>
        <Link href="/write-board" passHref>
          <button className='writeBtn'  >글 작성 <PenIcon/></button>
        </Link>
      </div>
      <section>
      {/** main content card  **/}
      <ul className="content-list">
        <QCard />
        <QCard />
        <RCard />
      </ul>
      </section>
    </Main>
  );
};

export default MainContent;
