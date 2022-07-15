import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap, Item, Text } from './style/Button';
import { useSession, signIn, signOut } from "next-auth/react"
import {NaverIcon} from 'src/assets/icons'
type Props = {};
const Logo = styled(NaverIcon)`
  width: 30px;
  height: 30px;
  /* background-color: #19ce60; */
`;
export const NaverLogin = (props: Props) => {
  const { data} = useSession()
  const client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    console.log("data:  ", data)
  }, [data])
  
  const onClickSignIn = () => {
    // signIn("google",{ callbackUrl: 'http://localhost:3000/test' })
    signIn("naver")
  }
  const onClickSignOut = () => {
    signOut()
  }
  return (
    <Wrap name="naver" onClick={data? onClickSignOut : onClickSignIn}>
      <Item >
        <Logo />
        <Text >
          {data? "Naver 로그아웃":"Naver 계정으로 로그인"}
        </Text>
      </Item>
    </Wrap>
  );
};