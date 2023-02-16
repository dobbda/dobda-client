import React, { useEffect, useState, useCallback } from 'react';
import { Border, Main, WriteHandler } from './style/MainContent.style';
import { WirteHandlerModal } from './atom/WirteHandlerModal';
import {
  Categories,
  CategoryList,
  CategoriesType,
} from 'src/interface/content-type';
import RenderSourcing from './renderItm/RenderSourcing';
import RenderQuestion from './renderItm/RenderQuestion';
import { getLocalStorage, setLocalStorage } from 'src/lib/utils/localStorage';
import {
  useAuth,
  useDidMountEffect,
  useLoginModalhandler,
  useWriteModalhandler,
} from 'src/hooks';
import { useRouter } from 'next/router';
import { theme } from 'src/styles/Theme';
import { Peni } from 'src/icons';
import Link from 'next/link';
import RenderPortfolio from './renderItm/RenderMakers';
interface Props {
  children?: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);
  const { auth } = useAuth();
  const router = useRouter();
  const { cg } = router.query as { cg: CategoriesType };
  const [select, setSelect] = useState<CategoriesType>();
  const { setLoginModal } = useLoginModalhandler();
  const { setWriteModal } = useWriteModalhandler();
  useEffect(() => {
    if (Categories[cg]) {
      Categories[cg]
        ? setSelect(cg)
        : (setSelect(CategoryList[0]),
          setLocalStorage('mainCateogry', CategoryList[0]));
    } else {
      const storeCategory = getLocalStorage('mainCateogry') as CategoriesType;
      Categories[storeCategory]
        ? (setSelect(storeCategory),
          router.push(
            { pathname: '/', query: { cg: storeCategory } },
            undefined,
            { scroll: false },
          ))
        : (setSelect(CategoryList[0]),
          setLocalStorage('mainCateogry', CategoryList[0]),
          router.push(
            { pathname: '/', query: { cg: CategoryList[0] } },
            undefined,
            { scroll: false },
          ));
    }
  }, []);

  useDidMountEffect(() => {
    if (cg != undefined) {
      setLocalStorage('mainCateogry', cg);
      setSelect(cg);
    } else {
      const storeCategory = getLocalStorage('mainCateogry') as CategoriesType;
      Categories[cg || storeCategory]
        ? (setSelect(cg || storeCategory), setLocalStorage('mainCateogry', cg))
        : (setSelect(CategoryList[0]),
          setLocalStorage('mainCateogry', CategoryList[0]));
      router.push(
        { pathname: '/', query: { cg: storeCategory || CategoryList[0] } },
        undefined,
        { scroll: false },
      );
    }
  }, [cg]);

  const checkLogin = useCallback(() => {
    if (!auth?.id) return setLoginModal();
    setWriteModal();
  }, [auth?.id, setLoginModal, setWriteModal]);

  const onClickMenu = useCallback((m: CategoriesType) => {
    router.push({ pathname: '/', query: { cg: m } }, undefined, {
      scroll: false,
    });
    // setSelect(m);
  }, []);
  return (
    <>
      <WirteHandlerModal />

      <Main>
        <WriteHandler onClick={checkLogin}>
          📑 소싱이나 질문을 등록해봐요~{' '}
          <span>
            <Peni color={theme.color.primary} />
          </span>
        </WriteHandler>
        <Border>
          <div className="top-bar">
            {CategoryList.map((m, i) => (
              <div
                key={i}
                onClick={() => onClickMenu(m)}
                className={`${select === m ? 'tap_menu selected' : 'tap_menu'}`}
              >
                <span>{Categories[m]}</span>
              </div>
            ))}
          </div>
          <section className="card-content outsourcing">
            {select == 'sourcings' && <RenderSourcing />}
          </section>
          <section className="card-content questions">
            {select == 'questions' && <RenderQuestion />}
          </section>
          <section className="card-content questions">
            {select == 'makers' && <RenderPortfolio />}
          </section>
        </Border>
      </Main>
    </>
  );
};

export default React.memo(MainContent);
