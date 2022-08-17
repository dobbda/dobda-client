import React, { useState } from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { CategoriesEvent } from '../../lib/categoryHover';
import { Main } from './style/MainContent.Element';
import SearchBox from './atom/SearchBox';
import QCard from '../Card/QCard';
import RCard from '../Card/RCard';
import { PenIcon } from 'src/assets/icons';
import Radio from './atom/RadioButton';
import styled from 'styled-components';
import { Radio as antRadio } from 'antd';
import RenderQuestion from './RenderQuestion';

interface Props {
  children?: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
  return (
    <Main>
      <section>
        <div className="search-wrapper">
          <SearchBox />
        </div>
        <div className="top-bar">
          <div className="category-wrapper">
            <Radio id={'wjscp'} name="질문" defaultChecked={true} />
            <Radio id={'dhlwn'} name="외주" />
            <Radio id={'wjscp'} name="내글" />
          </div>
          <Link href="/write-board" passHref>
            <button className="writeBtn">
              글 작성 <PenIcon />
            </button>
          </Link>
        </div>
      </section>
      <section className="card-content">
        {/** RenderFeatureRequest  **/}
        {<RenderQuestion />}
      </section>
    </Main>
  );
};

export default MainContent;
