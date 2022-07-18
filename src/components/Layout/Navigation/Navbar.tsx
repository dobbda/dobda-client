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
import { Logo, Button } from 'src/components/common';
import { BackArrow } from 'src/assets/icons';
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
              {mobileOn && <BackArrow viewBox="0 0 400 400" />}
            </span>


          </Navheader>
          <div style={{width:"200px"}}>
          <Button onClick={() => setVisible(true)} color="gray">
            로그인
          </Button>
          </div>

          {visible && (
            <Modal title="1" visible={visible} onCancel={() => setVisible(false)}>
              <div onClick={() => setVisible(false)}>
                <SocialLogin />
              </div>
            </Modal>
          )}

          {/*주요메뉴*/}
          <Menu icon={<Bell />} childMenu={'NO data'}> 알림 </Menu>
          <Menu icon={<Notice />}>Notice</Menu>
          <Menu icon={<Rule />}>Rule</Menu>
          <Menu icon={<User />} childMenu={'aht하세요'} href="/user/profile">내정보 </Menu>
        </div>
        <footer>footer에유</footer>
      </SideNav>
    </>
  );
};

export default Navbar;
