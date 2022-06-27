import React, { useState, useEffect, useCallback } from 'react';
import {useQueryClient} from 'react-query';

import Bell from 'src/assets/icon/bell.svg';
import MenuIcon from 'src/assets/icon/menu.svg';
import User from 'src/assets/icon/user.svg';
import { delay } from 'src/lib/delay';
import { Dropdown } from 'antd';
import 'antd/dist/antd.css';
import { ContentWrapper, Mobilebar, MenuWrapper } from './style/NavbarMobile.Element';
import { alarm, menu, user } from './Dropdown';
import Navbar from './Navbar';
import { Logo } from 'src/components/common';

const NavbarMobile = () => {
  const useClient = useQueryClient()

  const openNav = useCallback(() => {
    useClient.setQueryData("mobileOn", true);

},[useClient])
 

  return (
    <Mobilebar>
      <MenuWrapper onClick={openNav}>
        <MenuIcon />
      </MenuWrapper>

      <div className="logo"><Logo/></div>
      <ContentWrapper>
        <Dropdown overlay={alarm} trigger={['click']} overlayClassName={'navbar-dropdown'}>
          <div>
            <Bell />
          </div>
        </Dropdown>
        <Dropdown overlay={user} trigger={['click']} overlayClassName={'navbar-dropdown'}>
          <div>
            <User />
          </div>
        </Dropdown>
      </ContentWrapper>

    </Mobilebar>
  );
};

export default NavbarMobile;
