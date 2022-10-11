import React from 'react';
import { useLogout } from 'src/hooks';
import { UserModalWrapper } from './style';

type Props = {};

export default function UserModalContent({}: Props) {
  const { logout } = useLogout();

  return (
    <UserModalWrapper>
      <div>내 정보</div>
      <div>글 목록</div>

      <span onClick={logout} className="logout_btn">
        Logout
      </span>
    </UserModalWrapper>
  );
}
