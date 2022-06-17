import React, { useState } from 'react';
import Bell from 'src/assets/icon/bell.svg';
import List from 'src/assets/icon/list.svg';
import User from 'src/assets/icon/user.svg';

import { Dropdown } from 'antd';
import 'antd/dist/antd.css';
import { ContentWrapper, Div, MenuWrapper } from './style/NavbarUp.Element';
import { alarm, menu, user } from './Dropdown';

const NavbarUp = () => {
  const [login, setLogin] = useState(true);
  return (
    <Div className="container">
      <Dropdown overlay={menu} trigger={['click']} overlayClassName={'navbar-dropdown'}>
        <MenuWrapper>
          <List />
        </MenuWrapper>
      </Dropdown>
      <div className="logo">logo</div>
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
    </Div>
  );
};

export default NavbarUp;
