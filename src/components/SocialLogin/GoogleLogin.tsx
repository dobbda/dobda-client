import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { Wrap, Item, Text } from './style/Button';
import { useSession, signIn, signOut } from "next-auth/react"


type Props = {};
const Logo = styled(FcGoogle)`
  width: 30px;
  height: 30px;
`;
export const GoogleLogin = (props: Props) => {
  const { data} = useSession()
  useEffect(() => {
    console.log("data:  ", data)
  }, [data])
  
  const onClickSignIn = () => {
    // signIn("google",{ callbackUrl: 'http://localhost:3000/test' })
    signIn("google")
  }
  const onClickSignOut = () => {
    signOut()
  }
  return (
    <Wrap name="google" onClick={data? onClickSignOut : onClickSignIn}>
      <Item >
        <Logo />
        <Text >{data? "로그아웃":"Google 계정으로 로그인"}</Text>
      </Item>
    </Wrap>
  );
};

