import React, { useEffect, useState } from 'react';
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
    redirect_uri: 'http://localhost:3000/login/callback/google',
    response_type: 'code',
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/contacts.readonly',
  });

  const loginUrl = AUTHORIZE_URI + '?' + queryStr;
  return (
    <Wrap bg='#fff' color="#3c4043">
      <Link href={loginUrl}>
        <Item>
          <Logo />
          <Text>Login with Google</Text>
        </Item>
      </Link>
    </Wrap>
  );
};
