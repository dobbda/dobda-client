import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap, Item, Text } from './style/Button';
import { useSession, signIn, signOut } from 'next-auth/react';
import { NaverIcon } from 'src/assets/icons';
import Link from 'next/link';
type Props = {};
const Logo = styled(NaverIcon)`
  width: 30px;
  height: 30px;
  /* background-color: #19ce60; */
`;
export const NaverLogin = (props: Props) => {
  const client_id = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const redirect_uri = 'http://localhost:3000/login/callback/kakao';
  const state = "tests"
  const apiURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`;

  return (
    <Wrap bg="#19c260" color="#fff" >
        <Link href={apiURL}>
      <Item>

          <Logo />
          <Text>Login with Naver</Text>
      </Item>

        </Link>
    </Wrap>
  );
};
