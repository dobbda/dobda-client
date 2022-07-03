import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useQuery, useQueryClient } from 'react-query';

import Bell from 'src/assets/icon/bell.svg';
import BellOn from 'src/assets/icon/bell_on.svg';
import Mycoin from 'src/assets/icon/mycoin.svg';
import Rule from 'src/assets/icon/rule.svg';
import Notice from 'src/assets/icon/notice.svg';
import NoticeOn from 'src/assets/icon/notice_on.svg';
import User from 'src/assets/icon/user.svg';
import { SideNav, LayerMask, Navheader } from './style/Navbar.Element';
import { delay } from 'src/lib/delay';
import { Menu } from './atom/Menu';
import { Logo, A } from 'src/components/common';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Modal } from 'src/components/common';
import { SocialLogin } from 'src/components/SocialLogin';
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const useClient = useQueryClient();
  console.log(visible);
  const { data: mobileOn, error } = useQuery<boolean>('mobileOn', { initialData: false });

  const clickMask = useCallback(() => {
    useClient.setQueriesData('mobileOn', false);
  }, [useClient]);

  return (
    <>
      <LayerMask mobileOn={mobileOn} onClick={clickMask} /> {/*외부 클릭시 닫기*/}
      <SideNav mobileOn={mobileOn}>
        <div className="navigation-wrapper">
          <Navheader>
            <span>
              <Logo />
            </span>
            <span className="display-none" onClick={clickMask}>
              {mobileOn && <IoMdArrowRoundBack viewBox="0 0 400 400" />}
            </span>
          </Navheader>
          <p onClick={() => setVisible(true)}>
            <A href="#">로그인</A>
          </p>
          {visible && (
            <Modal title="1" visible={visible} onCancel={() => setVisible(false)}>
              <SocialLogin />
            </Modal>
          )}

          {/*주요메뉴*/}
          <Menu icon={<Bell />} childMenu={'NO data'}>
            알림
          </Menu>
          <Menu icon={<Notice />}>Notice</Menu>
          <Menu icon={<Rule />}>Rule</Menu>
          <Menu icon={<User />} childMenu={'aht하세요'}>
            내정보
          </Menu>
        </div>
        <footer>footer에유</footer>
      </SideNav>
    </>
  );
};

export default Navbar;
