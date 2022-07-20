import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';


import { SideNavWrapper } from './style/Navbar.Element';
import { Menu } from './atom/Menu';

import * as I from 'src/assets/icons' //icon

const SideNav = () => {
  const [visible, setVisible] = useState(false);


  return (
    <>
      <SideNavWrapper >
        <Menu icon={<I.User />} childMenu={'유저 정보 몇가지 보여주기'} href="/user/profile">
            쭈꾸미
          </Menu>
          <Menu icon={<I.Bell />} childMenu={'NO data'}>
            알림
          </Menu>
          <Menu icon={<I.Notice />} childMenu={'공지사항 목록'}>Notice</Menu>
          <Menu icon={<I.Rule />}>Rule</Menu>

      </SideNavWrapper>
    </>
  );
};

export default SideNav;
