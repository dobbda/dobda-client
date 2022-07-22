import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap, Item, Text } from './style/Button';
import { useSession, signIn, signOut } from "next-auth/react"
import qs from "qs";
import {KakaoIcon} from 'src/assets/icons'
import Link from 'next/link';

type Props = {};
const Logo = styled(KakaoIcon)`
  width: 30px;
  height: 30px;
`;
export const GoogleCDN = (props: Props) => {

  const client_id = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const redirect_uri= "http://localhost:3000/login/callback/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`

  return (
    <Wrap bg="#fee500" color="#000" >
      <Link href={KAKAO_AUTH_URL}>
      <Item >
        <Logo />
        <Text >Login with Kakao</Text>
      </Item>
      </Link>
    </Wrap>
  );
};





// export const GoogleLogin = (props: Props) => {

  
//   const { data} = useSession()
//   useEffect(() => {
//     console.log("data:  ", data)
//   }, [data])
  
//   const onClickSignIn = () => {
//     // signIn("google",{ callbackUrl: 'http://localhost:3000/test' })
//     signIn("google")
//   }
//   const onClickSignOut = () => {
//     signOut()
//   }
//   return (
//     <Wrap name="google" onClick={data? onClickSignOut : onClickSignIn}>
//       <Item >
//         <Logo />
//         <Text >{data? "로그아웃":"Google 계정으로 로그인"}</Text>
//       </Item>
//     </Wrap>
//   );
// };