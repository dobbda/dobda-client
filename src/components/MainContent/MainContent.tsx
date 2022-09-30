import React, { useEffect, useState, useCallback } from 'react';
import { Main, WriteHandler } from './style/MainContent.style';
import { WirteHandlerModal } from './atom/WirteHandlerModal';
import { PenIcon } from 'src/icons';
import { Categories, CategoryList, CategoriesType } from 'src/config/category';
import RenderOutsource from './renderItm/RenderOutSourcing';
import RenderQuestion from './renderItm/RenderQuestion';
import { getLocalStorage, setLocalStorage } from 'src/lib/utils/localStorage';
import { useAuth, useDidMountEffect, useLoginModalhandler } from 'src/hooks';
import { useRouter } from 'next/router';
import { Avatar } from 'antd';
import { theme } from 'src/styles/Theme';

interface Props {
  children?: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
  const [visible, setVisible] = useState(false);
  const { auth } = useAuth();
  const router = useRouter();
  const [select, setSelect] = useState<CategoriesType>();
  const { setLoginModal } = useLoginModalhandler();

  //첫 로딩시
  useEffect(() => {
    const storeCategory = getLocalStorage('mainCateogry') as CategoriesType;
    storeCategory ? setSelect(storeCategory) : (setSelect(CategoryList[0]), setLocalStorage('mainCateogry', CategoryList[0]));
  }, []);

  useDidMountEffect(() => {
    setLocalStorage('mainCateogry', select);
  }, [select]);

  const checkLogin = useCallback(() => {
    if (!auth?.id) return setLoginModal();
    setVisible(!visible);
  }, [auth?.id, setLoginModal, visible]);

  return (
    <>
      <Main>
        <div>
          <WriteHandler onClick={checkLogin}>
            📑 질문이나 프로젝트 요청을 해보는건 어떤가요?{' '}
            <span>
              <PenIcon color={theme.color.primary} />
            </span>
          </WriteHandler>
          <div className="top-bar">
            {CategoryList.map((m, i) => (
              <span key={i} onClick={() => setSelect(m)} className={`${select === m ? 'tap_menu selected' : 'tap_menu'}`}>
                <div>{Categories[m]}</div>
              </span>
            ))}
          </div>
        </div>
        <section className="card-content outsourcing">{select == 'outsourcing' && <RenderOutsource />}</section>
        <section className="card-content questions">{select == 'questions' && <RenderQuestion />}</section>
      </Main>
      <WirteHandlerModal visible={visible} setVisible={() => setVisible(!visible)} />
    </>
  );
};

export default React.memo(MainContent);
function useCalback(arg0: () => void, arg1: undefined[]) {
  throw new Error('Function not implemented.');
}
