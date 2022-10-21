import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { SideContainer } from './style/SideContent.style';
import { FolderMenu } from './FolderMenu/FolderMenu';

import { i } from 'src/icons'; //icon
import { useAuth, useLoginModalhandler, useLogout } from 'src/hooks';
import { Button } from '../common';
import { NoData } from '../common/@share/atom';
import { theme } from 'src/styles/Theme';
import Link from 'next/link';
import { AvatarImg } from '../common/@share/Avatar';
import { NotiList } from './content/NotiList';

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
      <br />
      <FolderMenu icon={<i.Notice size="20px" />} childOpen={!folderOpenFalse} title="공지사항" href="/notice">
        <NotiList />
      </FolderMenu>
    </SideContainer>
  );
};
