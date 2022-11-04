import React, { useEffect, useState, useCallback } from 'react';
import { Border, Main, WriteHandler } from './style/MainContent.style';
import { WirteHandlerModal } from './atom/WirteHandlerModal';
import { Categories, CategoryList, CategoriesType } from 'src/types/content-type';
import RenderOutsource from './renderItm/RenderOutSourcing';
import RenderQuestion from './renderItm/RenderQuestion';
import { getLocalStorage, setLocalStorage } from 'src/lib/utils/localStorage';
import { useAuth, useDidMountEffect, useLoginModalhandler, useWriteModalhandler } from 'src/hooks';
import { useRouter } from 'next/router';
import { theme } from 'src/styles/Theme';
import { Peni } from 'src/icons';

interface Props {
  children?: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);
  const { auth } = useAuth();
  const router = useRouter();
  const [select, setSelect] = useState<CategoriesType>();
  const { setLoginModal } = useLoginModalhandler();
  const { setWriteModal } = useWriteModalhandler();

  //첫 로딩시
  useEffect(() => {
    const storeCategory = getLocalStorage('mainCateogry') as CategoriesType;
    console.log(Categories[storeCategory], storeCategory);
    Categories[storeCategory]
      ? setSelect(storeCategory)
      : (setSelect(CategoryList[0]), setLocalStorage('mainCateogry', CategoryList[0]));
  }, []);

  useDidMountEffect(() => {
    setLocalStorage('mainCateogry', select);
  }, [select]);

  const checkLogin = useCallback(() => {
    if (!auth?.id) return setLoginModal();
    setWriteModal();
  }, [auth?.id, setLoginModal, setWriteModal]);

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
              <div key={i} onClick={() => setSelect(m)} className={`${select === m ? 'tap_menu selected' : 'tap_menu'}`}>
                <span>{Categories[m]}</span>
              </div>
            ))}
          </div>
          <section className="card-content outsourcing">{select == 'outsourcing' && <RenderOutsource />}</section>
          <section className="card-content questions">{select == 'questions' && <RenderQuestion />}</section>
        </Border>
      </Main>
    </>
  );
};

export default React.memo(MainContent);
