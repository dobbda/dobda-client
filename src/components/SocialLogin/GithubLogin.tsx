import React, {useCallback, useEffect} from 'react';
import styled from 'styled-components';
import {GithubIcon} from "src/assets/icons"
import { Wrap, Item, Text } from './style/Button';
import Link from 'next/link';
type Props = {};

export const GithubLogin = (props: Props) => {
  const client_id = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
  const redirect_uri= `${process.env.NEXT_PUBLIC_BASE_CLIENT_URL}/login/callback/github`;
  const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${client_id}`

  const onWindow = useCallback(() => {

	window.open(
		GITHUB_AUTH_URL,
		undefined,
		"height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
	)
  },[GITHUB_AUTH_URL])

//   useEffect(() => {
//     const listener = (event: MessageEvent) => {
//       if (!event) {
// 		alert('로그인실패')
// 		return};
//       if (event.origin !== location.origin) return;
//       if (event.data !== true) {
// 		alert('로그인실패')
// 	    return
// 	};
//     };
//     window.addEventListener("message", listener, false);
//     return () => window.removeEventListener("message", listener);
//   }, []);
  
  return (

        <Wrap bg='#3c4043' color= "#ebe9e9" onClick={onWindow}>
          <Item>
            <Logo/>
            <Text >Login with Github</Text>
          </Item>
        </Wrap>

  );
};

const Logo = styled(GithubIcon)`
  width: 30px;
  height: 30px;
  fill:#fff;
`