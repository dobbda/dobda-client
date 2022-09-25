import React, { useState, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import * as S from './style';
import { Logo, Popover, Modal, Button } from 'src/components/common';
import { MessageBox } from 'src/components/MessageBox/MessageBox';
import { SocialLogin } from 'src/components/SocialLogin';
import { theme } from 'src/styles/Theme';
import 'antd/dist/antd.css';

import * as I from 'src/assets/icons';
import Link from 'next/link';
import { useAuth, useLogout, useLoginModalhandler } from 'src/hooks';
import { user } from 'src/api';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Avatar } from 'antd';
import { SearchBox } from './SearchBox';

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
          <div css={{ display: 'flex', alignItems: 'center' }}>
            <Logo b={true} height="23px" />
            <SearchBox />
          </div>
          <S.MenuWrapper>
            {!auth?.id && (
              <Button cancel onClick={setLoginModal}>
                {' '}
                로그인{' '}
              </Button>
            )}
            {auth?.id && (
              <>
                <p onClick={userlogout} css={{ whiteSpace: 'nowrap' }}>
                  로그아웃
                </p>

                <Popover trigger="click" content={<MessageBox />} top={10} right={-10}>
                  <I.BellIcon color={theme.color.secondary} size={'25px'} css={{ marginTop: '2px', cursor: 'pointer' }} />
                </Popover>
                <Link href="/user/profile" passHref>
                  <span>
                    <Avatar src={auth.avatar} size={22} style={{ border: `1px solid ${theme.color.primary}` }} />
                  </span>
                </Link>
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
