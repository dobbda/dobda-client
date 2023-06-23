import { useState } from 'react';
import { useAuth, useLoginModalhandler } from 'src/hooks';
import { Noticei } from 'src/icons';
import { Empty, FolderMenu } from '../common';
import { NotiList } from './content/NotiList';
import { Red, SideContainer } from './style/SideContent.style';

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
      <FolderMenu childOpen={!folderOpenFalse} icon={<Red>🔥</Red>} title={<> 최근 질문</>}>
        <Empty />
      </FolderMenu>
      {/* <P>최신 글</P> */}
      <FolderMenu childOpen={!folderOpenFalse} icon={<Red>🌱</Red>} title="신규 프로젝트 ">
        <Empty />
      </FolderMenu>{' '}
      <FolderMenu childOpen={!folderOpenFalse} icon={<Red>🔢 </Red>} title={<>태그 모음</>}>
        <Empty />
      </FolderMenu>{' '}
      <FolderMenu icon={<Noticei size="20px" />} childOpen={!folderOpenFalse} title="공지사항" href="/notice">
        <NotiList />
      </FolderMenu>
    </SideContainer>
  );
};
