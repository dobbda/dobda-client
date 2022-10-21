import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { FolderMenu } from './FolderMenu/FolderMenu';
import { SideContainer } from './style/SideContent.style';

type Props = {};

export const MyNavigator = ({}: Props) => {
  const router = useRouter();
  return (
    <SideContainer>
      <br />
      <FolderMenu title="My Navigator" childOpen={true}>
        <ul css={{ margin: '0', padding: '0' }}>
          <Li $isPath={'/user/profile' == router.pathname}>
            <Link href="/user/profile">내정보</Link>
          </Li>
          <Li $isPath={'/user/post' == router.pathname}>
            <Link href={'/user/post'}> post</Link>
          </Li>
          <Li $isPath={'/user/my-coin' == router.pathname}>
            <Link href="/user/my-coin">coin </Link>
          </Li>
        </ul>
      </FolderMenu>
    </SideContainer>
  );
};

const Li = styled.li<{ $isPath?: boolean }>`
  font-size: 15px;
  font-weight: bold;
  color: #666666;
  padding: 10px 20px;

  ${({ $isPath }) => $isPath && `background-color: #f5f5f5;`};
`;
