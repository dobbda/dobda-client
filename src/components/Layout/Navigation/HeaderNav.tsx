import React, { useState, useEffect, useCallback } from 'react';
import { useQueryClient } from 'react-query';

import * as S from './style/HeaderNav.Elements';
import { Logo, Popover, Modal } from 'src/components/common';
import { MessageBox } from 'src/components/MessageBox/MessageBox';
import { SocialLogin } from 'src/components/SocialLogin';

import 'antd/dist/antd.css';

import * as I from 'src/assets/icons';
import Link from 'next/link';
import { useClientValue } from 'src/hooks/queries/queryHooks';
import { useLoginModalhandler } from 'src/hooks/loginModalHandler';

const HeaderNav = () => {
  const queryClient = useQueryClient();

  const [loginModal, setLoginModal] = useLoginModalhandler();
  return (
		<>
    <S.Header>
      <S.Headercontainer className="top-navigation">
        <Logo />

        <S.MenuWrapper>
            <S.Btn onClick={setLoginModal}> 로그인</S.Btn>
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
		<Modal  visible={loginModal} onClickHandler={setLoginModal}>
        <SocialLogin />
      </Modal>
		</>
  );
};

export default HeaderNav;
