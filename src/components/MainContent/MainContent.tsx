import React, { useState } from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { Main } from './style/MainContent.style';
import SearchBox from './atom/SearchBox';

import { PenIcon } from 'src/assets/icons';
import {Categories, CategoryList,CategoriesType} from 'src/lib/utils/category'
import RenderFeatureRequest from './renderItm/RenderOutSource';
import RenderQuestion from './renderItm/RenderQuestion';
import { getLocalStorage, setLocalStorage } from 'src/lib/localStorage';


interface Props {
  children?: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
	const storeCategory = getLocalStorage("mainCateogry") as CategoriesType
	const [select, setSelect] = useState<CategoriesType>(storeCategory ? storeCategory : CategoryList[0])
	setLocalStorage("mainCateogry", select)
  return (
    <Main>
      <section >
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
        {select=="questions" && <RenderFeatureRequest />}
        {select=="featureRequest" && <RenderQuestion />}
      </section>
    </Main>
  );
};

export default React.memo(MainContent);
