import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { P, SideContainer } from './style/SideContent.style';
import { FolderMenu } from './FolderMenu/FolderMenu';

import * as I from 'src/assets/icons'; //icon
import { useAuth, useLoginModalhandler } from 'src/hooks';
import { Avatar } from 'antd';
import { Button } from '../common';

interface Props {
  folderOpenFalse?: boolean;
}
export const SideContentRight = ({ folderOpenFalse }: Props) => {
  const [visible, setVisible] = useState(false);
  const { auth } = useAuth();
  const { setLoginModal } = useLoginModalhandler();

  return (
    <SideContainer>
      <P>최신 글</P>
      <FolderMenu childOpen={!folderOpenFalse} title="🔥 Hot 🔥 Questions">
        <div>No Data</div>
      </FolderMenu>
      <br />
      <br />
      <P>최신 글</P>
      <FolderMenu childOpen={!folderOpenFalse} title="🔥 Hot 🔥 Outsourcing">
        <div>No Data</div>
      </FolderMenu>{' '}
      <br />
      <br />
      <P>인기 태그</P>
      <FolderMenu childOpen={!folderOpenFalse} title="🔥 Tag Cloud 🔥">
        <div>No Data</div>
      </FolderMenu>{' '}
    </SideContainer>
  );
};
