import React, { useState, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import * as S from './style';
import { Logo, Popover, Modal, Button } from 'src/components/common';
import { Alarms } from 'src/components/Users';
import { SocialLogin } from 'src/components/SocialLogin';
import { useAuth, useLogout, useLoginModalhandler, keys, useWindowSize } from 'src/hooks';
import { useRouter } from 'next/router';
import UserModalContent from './UserModalContent';
import 'antd/dist/antd.css';
import { Belli, FcMenu } from 'src/icons';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Keyword } from 'src/components/SideContent';
import { MobileMemuWrap } from './style';
import { SearchBox } from './SearchBox';

const HeaderNav = () => {
  const queryClient = useQueryClient();
  const { auth, refetch } = useAuth();
  const { loginModal, setLoginModal } = useLoginModalhandler();

  const router = useRouter();
  const { logout } = useLogout();
  const { width, height } = useWindowSize();
  return (
    <>
      <S.Header>
        <S.Headercontainer className="top-navigation">
          <S.LogoWrap>
            {width <= 768 && (
              <Popover
                trigger="click"
                content={
                  <MobileMemuWrap>
                    <Keyword />
                  </MobileMemuWrap>
                }
                top={15}
                left={-10}
              >
                <S.MenuIcon />
              </Popover>
            )}
            <Logo b={true} height="25px" />
            {width > 768 && <SearchBox placeholder="제목 | 태그 검색" />}
          </S.LogoWrap>

          <S.MenuWrapper>
            {!auth?.id && (
              <Button types="primary" onClick={setLoginModal}>
                로그인
              </Button>
            )}
            {auth?.id && (
              <>
                <Popover trigger="click" content={<Alarms />} top={15} right={-100}>
                  <Belli size={'18px'} css={{ marginTop: '4px', cursor: 'pointer' }} />
                </Popover>
                <Popover trigger="click" content={<UserModalContent />} top={15} right={0}>
                  <S.My>
                    마이페이지 <RiArrowDownSLine color="gray" css={{ fontSize: '15px' }} />
                  </S.My>
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
