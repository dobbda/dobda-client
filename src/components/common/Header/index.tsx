import React, { useState, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import * as S from './style';
import { Logo, Popover, Modal, Button } from 'src/components/common';
import { Alarms } from 'src/components/Users';
import { SocialLogin } from 'src/components/SocialLogin';
import { theme } from 'src/styles/Theme';
import { useAuth, useLogout, useLoginModalhandler, keys } from 'src/hooks';
import { user } from 'src/api';
import { useRouter } from 'next/router';
import { SearchBox } from './SearchBox';
import { AvatarImg } from '../@share/Avatar';
import UserModalContent from './UserModalContent';
import 'antd/dist/antd.css';
import { Alarm } from 'src/types';
import { Belli } from 'src/icons';

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
              <Button types="primary" onClick={setLoginModal}>
                {' '}
                로그인{' '}
              </Button>
            )}
            {auth?.id && (
              <>
                {' '}
                <Popover trigger="click" content={<Alarms />} top={16} right={0}>
                  <Belli size={'18px'} css={{ marginTop: '4px', cursor: 'pointer' }} />
                </Popover>
                <Popover trigger="click" content={<UserModalContent />} top={16} right={0}>
                  <S.My>마이페이지</S.My>
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
