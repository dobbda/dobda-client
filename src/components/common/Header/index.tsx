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
  const { logout } = useLogout();

  return (
    <>
      <S.Header>
        <S.Headercontainer className="top-navigation">
          <div css={{ display: 'flex', alignItems: 'center' }}>
            <Logo b={true} height="25px" />
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
                <Popover trigger="click" content={<MessageBox />} top={10} right={-10}>
                  <I.BellIcon size={'20px'} css={{ marginTop: '2px', cursor: 'pointer' }} />
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
