import React from 'react';
import styled from 'styled-components';
import {GoogleLogin} from './GoogleLogin'
import {GithubLogin} from './GithubLogin'
import { NaverLogin } from './NaverLogin';
import {Logo} from 'src/components/common';
type Props = {};

export const SocialLogin = (props: Props) => {
  return (
    <Style.LoginWrapper>
      <Logo/>
      <br /> <br />
      <P>유저의 계정보호를 위해 간편 로그인만 지원합니다</P>
      <Style.LoginList>
        <GoogleLogin/>
        <br/>
        <GithubLogin/>
        <br/>
        <NaverLogin/>
      </Style.LoginList>
    </Style.LoginWrapper>
  );
};

const Style = {
  LoginWrapper: styled.div`
    outline: none;
    /* max-width: 400px; */
    min-height: 350px;
    padding: 10px 0;
    background-color: #fff;
    text-align: center;
  `,
  LoginList: styled.div`
    text-align: center;
    padding: 10px 0;
  `,
};

const P = styled.p`
  
`
