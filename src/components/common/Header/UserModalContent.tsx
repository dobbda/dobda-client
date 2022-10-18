import Link from 'next/link';
import React from 'react';
import { useLogout } from 'src/hooks';
import { Bookmark, Coin, User } from 'src/icons/Icon';
import { UserModalWrapper } from './style';

type Props = {};

export default function UserModalContent({}: Props) {
  const { logout } = useLogout();

  return (
    <UserModalWrapper>
      <Link href="/user/profile">
        <div>
          <User />내 정보{' '}
        </div>
      </Link>
      <Link href="/user/post">
        <div>
          <Bookmark />글 목록{' '}
        </div>
      </Link>
      <Link href={'/user/my-coin'}>
        <div>
          <Coin />
          코인페이지{' '}
        </div>
      </Link>

      <span onClick={logout} className="logout_btn">
        Logout
      </span>
    </UserModalWrapper>
  );
}
