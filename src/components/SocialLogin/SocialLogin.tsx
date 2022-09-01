import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import {SocialBtn} from './LogoBtn'

import { GithubIcon,GoogleIcon,NaverIcon, KakaoIcon } from 'src/assets/icons';
import {Logo} from 'src/components/common';
import { useQueryClient } from 'react-query';
import { useAuth,useLoginModalhandler } from 'src/hooks';
import { GITHUB_URL, GOOGLE_URL, KAKAO_URL, NAVER_URL } from './CDN_URL';
import { Auth } from 'src/types';
type Props = {};

export const SocialLogin = (props: Props) => {

	const onWindow = useCallback((url: string) => {
		typeof window !== 'undefined'&&window.open(
			url,
			undefined,
			"height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
		)
		},[])
		
		const {loginModal, setLoginModal} = useLoginModalhandler()
		const queryClient = useQueryClient();
	
		const {auth,refetch} = useAuth();
		const updateUser = useCallback(async(data?:Auth) => {
			const oldUserData = queryClient.getQueryData(["auth"]);
			// queryClient.invalidateQueries();
			queryClient.cancelQueries(["auth"]);
			queryClient.setQueryData(["auth"], data)
			loginModal&&data?.id && setLoginModal()
		},[loginModal, queryClient, setLoginModal])
		useEffect(() => {
			const listener = (event: MessageEvent) => {
				if (!event) return;
				if (event.origin !== location.origin) return;
				if (!event.data) {
					return;
				}
				if(event.data.id){
					updateUser(event.data)	
					return;
				}
			};
			window.addEventListener('message', listener, false);
			return () => window.removeEventListener('message', listener);
			
		});
  return (
    <Style.LoginWrapper>
      <Logo/>
      <br /> <br />
      <P>유저의 계정보호를 위해 간편 로그인만 지원합니다</P>
      <Style.LoginList>
        <Btn onClick={()=>onWindow(GOOGLE_URL)}>
					<SocialBtn name='Login with Google' icon={GoogleIcon} bg='#fff' color="#3c4043"/>
				</Btn>
        <br/>
        <Btn onClick={()=>onWindow(GITHUB_URL)}>
					<SocialBtn name='Login with Github' icon={GithubIcon} bg="#3c4043" color="#ebe9e9"/>
				</Btn>
        <br/>
				<Btn onClick={()=>onWindow(NAVER_URL)}> 
				<SocialBtn name='Login with Naver' icon={NaverIcon} bg="#19c260" color="#fff"/>
			</Btn>
        <br />
        <Btn onClick={()=>onWindow(KAKAO_URL)}>
					<SocialBtn name='Login with Kakao' icon={KakaoIcon} bg="#fee500" color="#000"/>
				</Btn>
      </Style.LoginList>
    </Style.LoginWrapper>
  );
};

const Style = {
  LoginWrapper: styled.div`
		opacity: 1 !important;
    outline: none;
    /* max-width: 400px; */
    min-height: 350px;
    padding: 25px 20px;
    background-color: #fff;
    text-align: center;
		border-radius: 1em;
  `,
  LoginList: styled.div`
		display: flex;
		flex-direction: column;
    text-align: center;
		align-items: center;
    padding: 10px 0;
  `,
};

const P = styled.p`
  
`
const Btn = styled.button`
	background-color: none;
	border-radius: none;
	padding: 0;
	margin: 0;
	border: none;
	width: 281px;
`