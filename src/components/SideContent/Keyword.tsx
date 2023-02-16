import React, {
  useState,
  Dispatch,
  ElementType,
  useEffect,
  useCallback,
} from 'react';

import { SideContainer, Ul, Wrap } from './style/SideContent.style';
import { FolderMenu } from './FolderMenu/FolderMenu';
import { CgListTree } from 'react-icons/cg';

import { useRouter } from 'next/router';
import { SearchBox } from '../common/Header/SearchBox';
import { sourcingtag, questionTag } from 'src/config/keyword';
import Link from 'next/link';

interface Props {
  folderOpenFalse?: boolean;
}
export const Keyword = ({ folderOpenFalse }: Props) => {
  const [cotegory, setCotegory] = useState('질문 주요 키워드');
  const [keywords, setKeywords] = useState([]);
  const router = useRouter();
  const { cg, keyword } = router.query;

  useEffect(() => {
    if (cg == 'questions') {
      setKeywords(questionTag);
      setCotegory('질문 주요 키워드');
    } else if (cg == 'sourcings') {
      setKeywords(sourcingtag);
      setCotegory('소싱 주요 키워드');
    } else {
      setKeywords(questionTag);
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
        height="900px"
      >
        <Wrap>
          <SearchBox />
          <Ul>
            {keywords.map((v, i) => (
              <li key={i} className={setClassName(v)}>
                <Link
                  href={{
                    pathname: '/',
                    query:
                      v == '전체' ? { cg } : { ...router.query, keyword: v },
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
