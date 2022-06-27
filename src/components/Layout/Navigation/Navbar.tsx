import React, { useState, Dispatch, ElementType, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useQuery, useQueryClient } from 'react-query';

import Bell from 'src/assets/icon/bell.svg';
import BellOn from 'src/assets/icon/bell_on.svg';
import List from 'src/assets/icon/list.svg';
import Mycoin from 'src/assets/icon/mycoin.svg';
import Rule from 'src/assets/icon/rule.svg';
import Notice from 'src/assets/icon/notice.svg';
import NoticeOn from 'src/assets/icon/notice_on.svg';
import User from 'src/assets/icon/user.svg';
import {SideNav, LayerMask, Navheader } from './style/Navbar.Element';
import { delay } from 'src/lib/delay';
import { Menu } from './atom/Menu';
import {Logo} from 'src/components/common'


const Navbar = () => {
  const useClient = useQueryClient()

  const {data:mobileOn, error}= useQuery<boolean>("mobileOn",{initialData:false})


  const clickMask =useCallback(()=>{
     useClient.setQueriesData("mobileOn", false);

  },[useClient])

  
  return (
    <>
      <LayerMask mobileOn={mobileOn} onClick={clickMask} /> {/*외부 클릭시 닫기*/}
      <SideNav mobileOn={mobileOn}>
        <div className="navigation-wrapper">
          <Navheader>
            <Logo/>
          </Navheader>
          <Link href={"#"}>
            로그인
          </Link>

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
