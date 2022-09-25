import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { SideContainer, P } from './style/SideContent.style';
import { FolderMenu } from './FolderMenu/FolderMenu';

import * as I from 'src/assets/icons'; //icon
import { useAuth, useLoginModalhandler } from 'src/hooks';
import { Button } from '../common';
import { Avatar } from 'antd';
import { NoData } from '../common/@share/atom';

interface Props {
  folderOpenFalse?: boolean;
}
export const SideContentLeft = ({ folderOpenFalse }: Props) => {
  const [visible, setVisible] = useState(false);
  const { auth } = useAuth();
  const { setLoginModal } = useLoginModalhandler();

  return (
    <SideContainer>
      {auth?.id ? (
        <FolderMenu icon={<Avatar src={auth?.avatar} />} title={auth?.nickname} childOpen={!folderOpenFalse} href="/user/profile">
          <div>유저 정보 몇가지 보여주기</div>
        </FolderMenu>
      ) : (
        <FolderMenu
          icon={<I.UserIcon />}
          title={
            <Button onClick={() => setLoginModal()} css={{ width: '130px' }}>
              로그인
            </Button>
          }
          childOpen={true}
          href="#"
        >
          <div>로그인이 필요합니다.</div>
        </FolderMenu>
      )}
      <FolderMenu icon={<I.NoticeIcon size="20px" />} childOpen={!folderOpenFalse} title="공지사항" href="/notice">
        <NoData>No Data</NoData>
      </FolderMenu>
    </SideContainer>
  );
};
