import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { SideContainer } from './style/SideContent.style';
import { FolderMenu } from './FolderMenu/FolderMenu';
import { CgListTree } from 'react-icons/cg';
import { useAuth, useLoginModalhandler, useLogout } from 'src/hooks';
import { NotiList } from './content/NotiList';
import { Noticei } from 'src/icons';
import { useRouter } from 'next/router';
import { Empty } from '../common';
import { SearchBox } from '../common/Header/SearchBox';

interface Props {
  folderOpenFalse?: boolean;
}
export const Keyword = ({ folderOpenFalse }: Props) => {
  const [cotegory, setCotegory] = useState('질문 주요 키워드');
  const router = useRouter();
  const { cg } = router.query;

  useEffect(() => {
    if (cg == 'questions') setCotegory('질문 주요 키워드');
    if (cg == 'outsourcing') setCotegory('소싱 주요 키워드');
  }, [cg]);
  return (
    <SideContainer>
      <FolderMenu icon={<CgListTree size="18px" />} childOpen={!folderOpenFalse} title={cotegory} href="/notice" height="500px">
        <>
          <ul css={{ marginTop: '10px;', padding: 0 }}>
            <SearchBox />
            <li>
              <Empty descript="카테고리 준비중..." />
            </li>
          </ul>
        </>
      </FolderMenu>
    </SideContainer>
  );
};
