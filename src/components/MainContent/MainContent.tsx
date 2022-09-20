import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';

import { Main } from './style/MainContent.style';
import SearchBox from './atom/SearchBox';

import { PenIcon } from 'src/assets/icons';
import { Categories, CategoryList, CategoriesType } from 'src/lib/utils/category';
import RenderOutsource from './renderItm/RenderOutSource';
import RenderQuestion from './renderItm/RenderQuestion';
import { getLocalStorage, setLocalStorage } from 'src/lib/localStorage';
import { useDidMountEffect } from 'src/hooks';

interface Props {
  children?: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
  const [select, setSelect] = useState<CategoriesType>();

  //첫 로딩시
  useEffect(() => {
    const storeCategory = getLocalStorage('mainCateogry') as CategoriesType;
    console.log(storeCategory);
    storeCategory ? setSelect(storeCategory) : (setSelect(CategoryList[0]), setLocalStorage('mainCateogry', CategoryList[0]));
  }, []);

  useDidMountEffect(() => {
    setLocalStorage('mainCateogry', select);
  }, [select]);

  return (
    <Main>
      <section>
        <div className="search-wrapper">
          <SearchBox />
        </div>
        <div className="top-bar">
          <div className="category-wrapper">
            {CategoryList.map((m, i) => (
              <span key={i} onClick={() => setSelect(m)} className={`${select === m ? 'tap_menu selected' : 'tap_menu'}`}>
                <div>{Categories[m]}</div>
              </span>
            ))}
          </div>
          <Link href="/write-board" passHref>
            <button className="writeBtn">
              글 작성 <PenIcon />
            </button>
          </Link>
        </div>
      </section>
      <section className="card-content">
        {select == 'featureRequest' && <RenderOutsource />}
        {select == 'questions' && <RenderQuestion />}
      </section>
    </Main>
  );
};

export default React.memo(MainContent);
