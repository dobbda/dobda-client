import React, { useState } from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { Main } from './style/MainContent.style';
import SearchBox from './atom/SearchBox';
import QCard from '../Card/QCard';
import RCard from '../Card/OCard';
import { PenIcon } from 'src/assets/icons';
import styled from 'styled-components';
import {Categories, CategoryList,CategoriesType} from 'src/lib/utils/category'
import RenderFeatureRequest from './renderItm/RenderOutSource';
import RenderQuestion from './renderItm/RenderQuestion';


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
								<span key={i} onClick={()=>setSelect(m)} className={select===m ? "selected" : "tap_menu_"+i}>
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
