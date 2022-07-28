import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap, Item, Text } from './style/Button';
import qs from 'qs';
import { KakaoIcon } from 'src/assets/icons';
import Link from 'next/link';

type Props = {};
const Logo = styled(KakaoIcon)`
  width: 30px;
  height: 30px;
`;
export const GoogleCDN = (props: Props) => {
  const client_id = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_CLIENT_URL}/login/callback/kakao`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

  const onWindow = useCallback(() => {
    window.open(
      KAKAO_AUTH_URL,
      undefined,
      'height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes',
    );
  }, [KAKAO_AUTH_URL]);
  return (
    <Wrap bg="#fee500" color="#000" onClick={onWindow}>
      <Item>
        <Logo />
        <Text>Login with Kakao</Text>
      </Item>
    </Wrap>
  );
};
