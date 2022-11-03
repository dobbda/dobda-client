import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { SideContainer } from './style/SideContent.style';
import { FolderMenu } from './FolderMenu/FolderMenu';

import { useAuth, useLoginModalhandler, useLogout } from 'src/hooks';
import { NotiList } from './content/NotiList';
import { Noticei } from 'src/icons';

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
      <FolderMenu icon={<Noticei size="20px" />} childOpen={!folderOpenFalse} title="공지사항" href="/notice">
        <NotiList />
      </FolderMenu>
    </SideContainer>
  );
};
