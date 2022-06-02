import React, { useState } from 'react';
import Bell from '../icon/svg/bell.svg';
import List from '../icon/svg/list.svg';
import Mycoin from '../icon/svg/mycoin.svg';
import Rule from '../icon/svg/rule.svg';
import Notice from '../icon/svg/notice.svg';
import User from '../icon/svg/user.svg';
import { Div } from './style/Navbar.Element';
type Props = {};

const Navbar = () => {
  const [login, setLogin] = useState(true);
  return (
    <Div className="container">
      <div className="logo">logo</div>
      <div className="login">
        {login ? (
          <>
            <div>로그아웃</div>
          </>
        ) : (
          <>
            <div>로그인</div>
            <div>회원가입</div>
          </>
        )}
      </div>
      <div className="content">
        <div>
          <span>
            <User />
          </span>
          내 정보
        </div>
        <div>
          <span>
            <List />
          </span>
          내 글(10)
        </div>
        <div>
          <span>
            <Mycoin />
          </span>
          코인
        </div>
        <div>
          <span>
            <Bell />
          </span>
          알림
        </div>
        <div>
          <span>
            <Rule />
          </span>
          규칙
        </div>
        <div>
          <span>
            <Notice />
          </span>
          공지
        </div>
      </div>
    </Div>
  );
};

export default Navbar;
