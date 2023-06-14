import { useCallback, useEffect, useState } from 'react';

import { CgListTree } from 'react-icons/cg';
import { FolderMenu } from '../common/FolderMenu/FolderMenu';
import { SideContainer, Ul, Wrap } from './style/SideContent.style';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { questionTag, sourcingtag } from 'src/config/keyword';
import { theme } from 'src/styles/Theme';
import { SearchBox } from '../common/Header/SearchBox';

interface Props {
  folderOpenFalse?: boolean;
}
export const Keyword = ({ folderOpenFalse }: Props) => {
  const [cotegory, setCotegory] = useState('질문 주요 키워드');
  const [keywords, setKeywords] = useState([]);
  const router = useRouter();
  const { cg, keyword } = router.query;

  useEffect(() => {
    if (cg === 'questions') {
      setKeywords(questionTag);
      setCotegory('질문 주요 키워드');
    } else if (cg === 'sourcings') {
      setKeywords(sourcingtag);
      setCotegory('소싱 주요 키워드');
    } else if (cg === 'makers') {
      setKeywords(questionTag);
      setCotegory('메이커 키워드');
    } else {
      setKeywords(questionTag);
      setCotegory('팀빌딩 키워드');
    }
  }, [cg]);
  const setClassName = useCallback(
    (v: string) => {
      if (keyword == v || (keyword == undefined && v == '전체')) {
        return 'keyword active';
      } else if (keyword == undefined && v == '전체') {
        return 'keyword active';
      } else return 'keyword';
    },
    [keyword],
  );

  return (
    <SideContainer>
      <FolderMenu
        icon={<CgListTree size="18px" />}
        childOpen={!folderOpenFalse}
        title={cotegory}
        href="/notice"
        height={`calc(100vh - ${theme.media.headerHeight})`}
      >
        <Wrap>
          <SearchBox />
          <Ul>
            {keywords.map((v, i) => (
              <li key={i} className={setClassName(v)}>
                <Link
                  href={{
                    pathname: '/',
                    query: v == '전체' ? { cg } : { ...router.query, keyword: v },
                  }}
                  scroll={false}
                >
                  <a>{v}</a>
                </Link>
              </li>
            ))}
          </Ul>
        </Wrap>
      </FolderMenu>
    </SideContainer>
  );
};
