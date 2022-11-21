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
        <FolderMenu title="CATEGORIES" childOpen={true} height="197px">
          <ul css={{ margin: '0', padding: '0' }}>
            <Li $isPath={'/user/profile' == router.pathname}>
              <Link href="/user/profile">내정보</Link>
            </Li>
            <Li $isPath={'/user/post' == router.pathname}>
              <Link href={'/user/post'}> 내글목록</Link>
            </Li>
            <Li $isPath={'/user/my-coin' == router.pathname}>
              <Link href="/user/my-coin">코인관리 </Link>
            </Li>
            <Li $isPath={'/user/alarm' == router.pathname}>
              <Link href="/user/alarm">전체알림 </Link>
            </Li>
            <Li $isPath={'/user/portfolio' == router.pathname}>
              <Link href="/user/portfolio">공개프로필 </Link>
            </Li>
          </ul>
        </FolderMenu>
      </div>
    </UserPageWrapper>
  );
};

const UserPageWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  .navigator {
    background-color: #fff;
    height: fit-content;
    width: 250px;
    margin-top: 40px;
    border: 1px solid ${theme.color.border(0.1)};
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    .navigator {
      width: 100%;
      margin-top: 10px;
    }
  }
`;

const Li = styled.li<{ $isPath?: boolean }>`
  user-select: none;
  margin: 1px;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 20px;
  color: #000000d9;
  * {
    letter-spacing: 3px;
  }

  ${({ $isPath }) => $isPath && `background-color: ${theme.color.prRgb(0.8)}`};
  ${({ $isPath }) => $isPath && `color: #fff`};
`;
