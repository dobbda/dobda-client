import Link from 'next/link';
import React from 'react';
import { useLogout } from 'src/hooks';
import { Bookmarki, Coini, Useri } from 'src/icons';
import { UserModalWrapper } from './style';

type Props = {};

export default function UserModalContent({}: Props) {
  const { logout } = useLogout();

  return (
    <UserModalWrapper>
      <Link href="/user/profile">
        <div>
          <Useri />내 정보{' '}
        </div>
      </Link>
      <Link href="/user/post">
        <div>
          <Bookmarki />글 목록{' '}
        </div>
      </Link>
      <Link href={'/user/my-coin'}>
        <div>
          <Coini />
          코인페이지{' '}
        </div>
      </Link>

      <span onClick={logout} className="logout_btn">
        Logout
      </span>
    </UserModalWrapper>
  );
}
