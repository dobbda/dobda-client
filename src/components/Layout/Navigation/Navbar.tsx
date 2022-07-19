import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';


import { SideNav, LayerMask, Navheader } from './style/Navbar.Element';
import { Menu } from './atom/Menu';
import { Logo, Button, Link, Modal } from 'src/components/common';
import { SocialLogin } from 'src/components/SocialLogin';

import * as I from 'src/assets/icons' //icon

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

            <div className="display-none" onClick={clickMask}>
              {mobileOn && <I.BackArrow viewBox="0 0 400 400" />}
            </div>
          </Navheader>

          <div className="login-btn">
            <button onClick={() => setVisible(true)} ><I.LoginIcon/> 로그인</button>
          </div>

          {visible && (
            <Modal title="1" visible={visible} onCancel={() => setVisible(false)}>
              <div onClick={() => setVisible(false)}>
                <SocialLogin />
              </div>
            </Modal>
          )}

          {/*주요메뉴*/}
          <Menu icon={<I.Bell />} childMenu={'NO data'}>
            알림
          </Menu>
          <Menu icon={<I.Notice />}>Notice</Menu>
          <Menu icon={<I.Rule />}>Rule</Menu>
          <Menu icon={<I.User />} childMenu={'aht하세요'} href="/user/profile">
            내정보
          </Menu>
        </div>
        <footer>footer에유</footer>
      </SideNav>
    </>
  );
};

export default Navbar;
