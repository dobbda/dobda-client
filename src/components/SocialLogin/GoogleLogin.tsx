import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap, Item, Text } from './style/Button';
import { GoogleIcon } from 'src/assets/icons';
import Link from 'next/link';
import qs from 'qs';

type Props = {};
const Logo = styled(GoogleIcon)`
  width: 30px;
  height: 30px;
`;
export const GoogleLogin = (props: Props) => {
  const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';

  const queryStr = qs.stringify({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    redirect_uri: `${process.env.NEXT_PUBLIC_BASE_CLIENT_URL}/login/callback/google`,
    response_type: 'code',
    access_type: 'offline',
    include_granted_scopes:true,
    scope:"https://www.googleapis.com/auth/userinfo.email"
  });
  const loginUrl = AUTHORIZE_URI + '?' + queryStr;

  const onWindow = useCallback(() => {
	window.open(
		loginUrl,
		undefined,
		"height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
	)
  },[loginUrl])
  
  return (
    <Wrap bg='#fff' color="#3c4043" onClick={onWindow}>
        <Item>
          <Logo />
          <Text>Login with Google</Text>
        </Item>
    </Wrap>
  );
};
