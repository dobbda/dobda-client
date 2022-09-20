import React, { useState, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import * as S from './style';
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
  const { auth, refetch } = useAuth();
  const { loginModal, setLoginModal } = useLoginModalhandler();
  const router = useRouter();
  const userlogout = useCallback(async () => {
    if (!auth.id) return;
    var result = confirm('로그아웃 확인');
    if (result) {
      try {
        await axios.delete('/api/auth/logout');
      } catch (e) {}
      queryClient.removeQueries(['auth']);
      router.replace(router.asPath);
    }
  }, [auth?.id, queryClient, router]);
  return (
    <>
      <S.Header>
        <S.Headercontainer className="top-navigation">
          <Logo height="30px" />

          <S.MenuWrapper>
            {!auth?.id && <S.Btn onClick={setLoginModal}> 로그인 </S.Btn>}
            {auth?.id && (
              <>
                <p onClick={userlogout} css={{ color: '#fff' }}>
                  로그아웃
                </p>
                <Link href="/user/profile" passHref>
                  <span>
                    <I.UserIcon color={'#f8f8f8'} size={'25px'} />
                  </span>
                </Link>
                <Popover trigger="click" content={<MessageBox />} top={10} right={-10}>
                  <I.BellIcon color={'#f8f8f8'} size={'25px'} css={{ marginTop: '2px' }} />
                </Popover>
              </>
            )}

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
