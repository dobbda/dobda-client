import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { P, Red, SideContainer } from './style/SideContent.style';
import { FolderMenu } from './FolderMenu/FolderMenu';

import { i } from 'src/icons'; //icon
import { useAuth, useLoginModalhandler } from 'src/hooks';
import { Button, Empty } from '../common';

interface Props {
  folderOpenFalse?: boolean;
}
export const SideContentRight = ({ folderOpenFalse }: Props) => {
  const [visible, setVisible] = useState(false);
  const { auth } = useAuth();
  const { setLoginModal } = useLoginModalhandler();

  return (
    <SideContainer>
      {/* <P>최신 글</P> */}
      <FolderMenu
        childOpen={!folderOpenFalse}
        title={
          <>
            🔥 <Red>New </Red> Questions
          </>
        }
      >
        <Empty />
      </FolderMenu>
      <br />
      {/* <P>최신 글</P> */}
      <FolderMenu childOpen={!folderOpenFalse} icon={<Red>🌱</Red>} title="신규 프로젝트 ">
        <Empty />
      </FolderMenu>{' '}
      <br />
      <br />
      <FolderMenu childOpen={!folderOpenFalse} icon={<Red>🔢 </Red>} title={<>Tag Cloud</>}>
        <Empty />
      </FolderMenu>{' '}
    </SideContainer>
  );
};
