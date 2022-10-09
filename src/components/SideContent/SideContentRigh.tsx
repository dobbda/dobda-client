import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { P, Red, SideContainer } from './style/SideContent.style';
import { FolderMenu } from './FolderMenu/FolderMenu';

import { i } from 'src/icons'; //icon
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
      <FolderMenu
        childOpen={!folderOpenFalse}
        title={
          <>
            🔥 <Red>New </Red> Questions
          </>
        }
      >
        <div>No Data</div>
      </FolderMenu>
      <br />
      <br />
      <P>최신 글</P>
      <FolderMenu childOpen={!folderOpenFalse} icon={<Red>🌱</Red>} title="신규 프로젝트 ">
        <div>No Data</div>
      </FolderMenu>{' '}
      <br />
      <br />
      <P>인기 태그</P>
      <FolderMenu childOpen={!folderOpenFalse} icon={<Red>🔢 </Red>} title={<>Tag Cloud</>}>
        <div>No Data</div>
      </FolderMenu>{' '}
    </SideContainer>
  );
};
