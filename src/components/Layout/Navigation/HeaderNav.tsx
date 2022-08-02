import React, { useState, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import * as S from './style/HeaderNav.Elements';
import { Logo, Popover, Modal } from 'src/components/common';
import { MessageBox } from 'src/components/MessageBox/MessageBox';
import { SocialLogin } from 'src/components/SocialLogin';

import 'antd/dist/antd.css';

import * as I from 'src/assets/icons';
import Link from 'next/link';
import { useClientValue } from 'src/hooks/queries/queryHooks';
import { useLoginModalhandler } from 'src/hooks/useloginModalHandler';
import { useAuth } from 'src/hooks/useAuth';
import { removeLocalStorage } from 'src/lib/localStorage';
import { useLogout } from 'src/hooks/useLogout';
import { user } from 'src/api';

const HeaderNav = () => {
	const queryClient = useQueryClient();
  const auth = useAuth();
  const [loginModal, setLoginModal] = useLoginModalhandler();

	 const userlogout = useCallback(async() => {
		console.log('실행됨')
		auth?.id && await user.logout();
		queryClient.cancelQueries(["auth"]);
		queryClient.setQueryData(["auth"], null)

	},[auth?.id, queryClient]);
  return (
    <>
      <S.Header>
        <S.Headercontainer className="top-navigation">
          <Logo />

          <S.MenuWrapper>
						<S.Btn ><Link href='/test'>test</Link></S.Btn>
            {auth?.id ? <p onClick={userlogout}>로그아웃</p> : <S.Btn onClick={setLoginModal}> 로그인 </S.Btn>}
            <Link href="/user/profile" passHref>
              <S.Btn>마이페이지</S.Btn>
            </Link>
            <Popover trigger="click" content={<MessageBox />} top={10} right={-10}>
              <I.BellIcon color={'#545dd8'} size={'35px'} />
            </Popover>
            {/* <User /> */}
          </S.MenuWrapper>
        </S.Headercontainer>
      </S.Header>
      {/* 로그인 모달  */}
      <Modal visible={loginModal} onClickHandler={setLoginModal}>
        <SocialLogin />
      </Modal>
    </>
  );
};

export default HeaderNav;
