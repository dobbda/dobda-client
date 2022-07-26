import React, {useEffect} from 'react';
import styled from 'styled-components';
import {GithubIcon} from "src/assets/icons"
import { Wrap, Item, Text } from './style/Button';
import Link from 'next/link';
type Props = {};

export const GithubLogin = (props: Props) => {
  const client_id = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const redirect_uri= "http://localhost:3000/login/callback/github";
  const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${client_id}`

  return (

        <Wrap bg='#3c4043' color= "#ebe9e9" >
          <Link href={GITHUB_AUTH_URL}>
          <Item>
            <Logo/>
            <Text >Login with Github</Text>
          </Item>
          </Link>
        </Wrap>

  );
};

const Logo = styled(GithubIcon)`
  width: 30px;
  height: 30px;
  fill:#fff;
`