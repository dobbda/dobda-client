import { useRouter } from 'next/router';
import React from 'react';
import { theme } from 'src/styles/Theme';
import styled from 'styled-components';
import { Link } from '../common';
import { FolderMenu } from '../SideContent';

type Props = {
  children: React.ReactNode;
};

export const UserPage = ({ children }: Props) => {
  const router = useRouter();

  return (
    <UserPageWrapper>
      <div css={{ width: '100%' }}>{children}</div>
      <div className="navigator">
        <FolderMenu title="My Navigator" childOpen={true} height="160px">
          <ul css={{ margin: '0', padding: '0' }}>
            <Li $isPath={'/user/profile' == router.pathname}>
              <Link href="/user/profile">내 정보</Link>
            </Li>
            <Li $isPath={'/user/post' == router.pathname}>
              <Link href={'/user/post'}> 내 글 목록</Link>
            </Li>
            <Li $isPath={'/user/my-coin' == router.pathname}>
              <Link href="/user/my-coin">코인 정보 </Link>
            </Li>
            <Li $isPath={'/user/alarm' == router.pathname}>
              <Link href="/user/alarm">전체 알림 </Link>
            </Li>
          </ul>
        </FolderMenu>
      </div>
    </UserPageWrapper>
  );
};

const UserPageWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  gap: 20px;
  .navigator {
    height: 300px;
    width: 250px;
    border: 1px solid ${theme.color.border(0.1)};
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    .navigator {
      width: 100%;
    }
  }
`;

const Li = styled.li<{ $isPath?: boolean }>`
  margin: 1px;
  font-size: 15px;
  font-weight: bold;
  color: #666666;
  padding: 10px 20px;

  ${({ $isPath }) => $isPath && `background-color: ${theme.color.prRgb(0.2)}`};
`;
