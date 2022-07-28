import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap, Item, Text } from './style/Button';
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
  const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_CLIENT_URL}/login/callback/kakao`;
  const state = 'tests';
  const apiURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`;

  const onWindow = useCallback(() => {
    window.open(
      redirect_uri,
      undefined,
      'height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes',
    );
  }, [redirect_uri]);
  return (
    <Wrap bg="#19c260" color="#fff" onClick={onWindow}>
      <Item>
        <Logo />
        <Text>Login with Naver</Text>
      </Item>
    </Wrap>
  );
};
