import React, { useState, useEffect, useCallback } from 'react';
import { useQueryClient } from 'react-query';
import styled, { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

import Bell from 'src/assets/icon/bell.svg';
import MenuIcon from 'src/assets/icon/menu.svg';
import User from 'src/assets/icon/user.svg';

import { Mobilebar, MenuWrapper } from './style/NavbarMobile.Element';
import Navbar from './Navbar';
import { Logo,Popover } from 'src/components/common';
import { MessageBox } from 'src/components/MessageBox/MessageBox';

const GlobalStyle = createGlobalStyle`
  body {
    .ant-popover-inner-content{padding:0};
    .ant-popover-arrow{display:none}
  }
`;

const NavbarMobile = () => {
  const useClient = useQueryClient();

  const openNav = useCallback(() => {
    useClient.setQueryData('mobileOn', true);
  }, [useClient]);

  return (

    <Mobilebar className='top-navigation'>
      <MenuWrapper onClick={openNav}>
        <MenuIcon />
      </MenuWrapper>

        <Logo />

      <MenuWrapper>
          <Popover  
          trigger="hover"
          content={<MessageBox />} 
          top={10}
          right={-10}
          >
            <Bell />
          </Popover>
          {/* <User /> */}
      </MenuWrapper>
    </Mobilebar>

  );
};

export default NavbarMobile;
