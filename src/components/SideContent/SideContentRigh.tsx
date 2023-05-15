import React, { useState } from 'react';
import { Red, SideContainer } from './style/SideContent.style';
import { useAuth, useLoginModalhandler } from 'src/hooks';
import { Empty, FolderMenu } from '../common';
import { Noticei } from 'src/icons';
import { NotiList } from './content/NotiList';

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
        icon={<Red>🔥</Red>}
        title={<> 최근 질문</>}
      >
        <Empty />
      </FolderMenu>
      <br />
      {/* <P>최신 글</P> */}
      <FolderMenu
        childOpen={!folderOpenFalse}
        icon={<Red>🌱</Red>}
        title="신규 프로젝트 "
      >
        <Empty />
      </FolderMenu>{' '}
      <br />
      <FolderMenu
        childOpen={!folderOpenFalse}
        icon={<Red>🔢 </Red>}
        title={<>태그 모음</>}
      >
        <Empty />
      </FolderMenu>{' '}
      <br />
      <FolderMenu
        icon={<Noticei size="20px" />}
        childOpen={!folderOpenFalse}
        title="공지사항"
        href="/notice"
      >
        <NotiList />
      </FolderMenu>
    </SideContainer>
  );
};
