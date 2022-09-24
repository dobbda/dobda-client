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
      <P>Questions</P>
      <FolderMenu childOpen={!folderOpenFalse} childMenu={<div>No Data</div>}>
        🔥 Hot 🔥
      </FolderMenu>
      <br />
      <br />
      <P>Outsourcing</P>
      <FolderMenu childOpen={!folderOpenFalse} childMenu={<div>No Data</div>}>
        🔥 Hot 🔥
      </FolderMenu>{' '}
    </SideContainer>
  );
};
