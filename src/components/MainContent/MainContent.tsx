import React, { useState } from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { CategoriesEvent } from '../../lib/categoryHover';
import { Main } from './style/MainContent.style';
import SearchBox from './atom/SearchBox';
import QCard from '../Card/QCard';
import RCard from '../Card/RCard';
import { PenIcon } from 'src/assets/icons';
import styled from 'styled-components';
import RenderQuestion from './renderItm/RenderQuestion';
import {Categories, CategoryList,CategoriesType} from 'src/lib/utils/category'
import RenderFeatureRequest from './renderItm/RenderRequest';


interface Props {
  children?: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
	const [select, setSelect] = useState<CategoriesType>(CategoryList[0])
  return (
    <Main>
      <section>
        <div className="search-wrapper">
          <SearchBox />
        </div>
        <div className="top-bar">
          <div className="category-wrapper">
						{
							CategoryList.map((m, i)=>(
								<span key={i} onClick={()=>setSelect(m)} className={select===m && "selected"}>
									{Categories[m]}
								</span>
							))
						}

          </div>
          <Link href="/write-board" passHref>
            <button className="writeBtn">
              글 작성 <PenIcon />
            </button>
          </Link>
        </div>
      </section>
      <section className="card-content">
        {/* {<RenderFeatureRequest />} */}
        {<RenderQuestion />}
      </section>
    </Main>
  );
};

export default MainContent;
