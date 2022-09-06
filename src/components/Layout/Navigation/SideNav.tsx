import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { SideNavWrapper, SideContainer } from './style/SideNav.style';
import { Menu } from './atom/Menu';

import * as I from 'src/assets/icons'; //icon

export const SideNav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <SideContainer >
      <SideNavWrapper>
        <Menu icon={<I.UserIcon />} childMenu={'유저 정보 몇가지 보여주기'} childOpen={true} href="/user/profile">
          쭈꾸미
        </Menu>
        <Menu icon={<I.BellIcon />} childMenu={'NO data'} href="/user/dingdong">
          알림
        </Menu>
        <Menu icon={<I.NoticeIcon size="20px"/>} childMenu={'공지사항 목록'} href="/notice">
          Notice
        </Menu>
        <Menu icon={<I.RuleIcon href="/notice"  size="20px"/>}>Rule</Menu>
      </SideNavWrapper>
			<div>
			<footer>footer</footer>

			</div>
    </SideContainer>
  );
};

 