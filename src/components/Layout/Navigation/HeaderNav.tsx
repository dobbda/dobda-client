import React, { useState, useEffect, useCallback } from 'react';
import { useQueryClient } from 'react-query';

import * as S from './style/SideNav.Elements';
import { Logo, Popover, Modal } from 'src/components/common';
import { MessageBox } from 'src/components/MessageBox/MessageBox';
import { SocialLogin } from 'src/components/SocialLogin';

import 'antd/dist/antd.css';

import * as I from 'src/assets/icons';
import Link from 'next/link';


const HeaderNav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <S.Header>
      <S.Mobilebar className="top-navigation">
        <Logo />

        <S.MenuWrapper>
          <div>
            <S.Btn onClick={() => setVisible(true)}> 로그인</S.Btn>
            {visible && (
              <Modal title="1" visible={visible} onCancel={() => setVisible(false)}>
                <div onClick={() => setVisible(false)}>
                  <SocialLogin />
                </div>
              </Modal>
            )}
          </div>
          <Link href="/user/profile" passHref>
            <S.Btn>마이페이지</S.Btn>
          </Link>
          <Popover trigger="click" content={<MessageBox />} top={10} right={-10}>
            <I.Bell />
          </Popover>
          {/* <User /> */}
        </S.MenuWrapper>
      </S.Mobilebar>
    </S.Header>
  );
};

export default HeaderNav;
