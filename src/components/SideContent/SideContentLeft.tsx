import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { SideContainer, P, Avatar } from './style/SideContent.style';
import { FolderMenu } from './FolderMenu/FolderMenu';

import * as I from 'src/icons'; //icon
import { useAuth, useLoginModalhandler, useLogout } from 'src/hooks';
import { Button } from '../common';
import { NoData } from '../common/@share/atom';
import { theme } from 'src/styles/Theme';
import Link from 'next/link';

interface Props {
  folderOpenFalse?: boolean;
}
export const SideContentLeft = ({ folderOpenFalse }: Props) => {
  const [visible, setVisible] = useState(false);
  const { auth } = useAuth();
  const { setLoginModal } = useLoginModalhandler();
  const { logout } = useLogout();
  return (
    <SideContainer>
      {auth?.id ? (
        <FolderMenu
          icon={
            <Link href="/user/profile" passHref>
              <span>
                <Avatar src={auth.avatar} size={22} />
              </span>
            </Link>
          }
          title={auth?.nickname}
          childOpen={!folderOpenFalse}
          href="/user/profile"
        >
          <>
            <div>유저 정보 몇가지 보여주기</div>

            <p onClick={logout} css={{ whiteSpace: 'nowrap', cursor: 'pointer' }}>
              로그아웃
            </p>
          </>
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
