import React, { useState, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import * as S from './style/HeaderNav.Elements';
import { Logo, Popover, Modal } from 'src/components/common';
import { MessageBox } from 'src/components/MessageBox/MessageBox';
import { SocialLogin } from 'src/components/SocialLogin';

import 'antd/dist/antd.css';

import * as I from 'src/assets/icons';
import Link from 'next/link';
import { useClientValue } from 'src/hooks';
import { useAuth, useLogout, useLoginModalhandler } from 'src/hooks';
import { user } from 'src/api';
import axios from 'axios';
import { useRouter } from 'next/router';

const HeaderNav = () => {
	const queryClient = useQueryClient();
  const {auth, refetch} = useAuth();
  const [loginModal, setLoginModal] = useLoginModalhandler();
	const router = useRouter()
	const userlogout = useCallback(async() => {
		if(!auth.id) return;
		var result = confirm("로그아웃 확인");
		if(result){
			try {
				await axios.delete("/api/auth/logout");
			} catch (e) {}
			queryClient.removeQueries(["auth"])
			router.replace(router.asPath)
		};
		
	},[auth?.id, queryClient, router]);
  return (
    <>
      <S.Header>
        <S.Headercontainer className="top-navigation">
          <Logo />

          <S.MenuWrapper>
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
