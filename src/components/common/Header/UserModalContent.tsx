import Link from 'next/link';
import React from 'react';
import { FaAudioDescription } from 'react-icons/fa';
import { useAuth, useLogout } from 'src/hooks';
import { Bookmarki, Coini, Useri } from 'src/icons';
import { UserModalWrapper } from './style';

type Props = {};

export default function UserModalContent({}: Props) {
  const { logout } = useLogout();
  const { auth } = useAuth();
  return (
    <UserModalWrapper>
      <Link href={`/user?id=${auth?.id}&cg=info`}>
        <div>
          <Useri />내 정보{' '}
        </div>
      </Link>
      <Link href={`/user?id=${auth?.id}&cg=post`}>
        <div>
          <Bookmarki />글 목록{' '}
        </div>
      </Link>
      <Link href={`/user?id=${auth?.id}&cg=coin`}>
        <div>
          <Coini />
          코인페이지{' '}
        </div>
      </Link>
      <Link href={`/user?id=${auth?.id}&cg=portfolio`}>
        <div>
          <FaAudioDescription color="green" />
          포트폴리오
        </div>
      </Link>

      <span onClick={logout} className="logout_btn">
        Logout
      </span>
    </UserModalWrapper>
  );
}
