import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { SocialBtn } from './LogoBtn';

import { i } from 'src/icons';
import { Logo } from 'src/components/common';
import { useQueryClient } from 'react-query';
import { useAuth, useLoginModalhandler } from 'src/hooks';
import { GITHUB_URL, GOOGLE_URL, KAKAO_URL, NAVER_URL } from './CDN_URL';
import { Auth } from 'src/types';
type Props = {};

export const SocialLogin = (props: Props) => {
  const onWindow = useCallback((url: string) => {
    typeof window !== 'undefined' &&
      window.open(
        url,
        undefined,
        'height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes',
      );
  }, []);

  const { loginModal, setLoginModal } = useLoginModalhandler();
  const queryClient = useQueryClient();

  const { auth, refetch } = useAuth();
  const updateUser = useCallback(
    async (data?: Auth) => {
      const oldUserData = queryClient.getQueryData(['auth']);
      // queryClient.invalidateQueries();
      queryClient.cancelQueries(['auth']);
      queryClient.setQueryData(['auth'], data);
      loginModal && data?.id && setLoginModal();
    },
    [loginModal, queryClient, setLoginModal],
  );
  useEffect(() => {
    const listener = (event: MessageEvent) => {
      if (!event) return;
      if (event.origin !== location.origin) return;
      if (!event.data) {
        return;
      }
      if (event.data.id) {
        updateUser(event.data);
        return;
      }
    };
    window.addEventListener('message', listener, false);
    return () => window.removeEventListener('message', listener);
  });
  return (
    <Style.LoginWrapper>
      <Logo b={true} height="28px" />
      <br /> <br />
      <P>간편 로그인만 가능합니다.</P>
      <Style.LoginList>
        <SocialBtn onClick={() => onWindow(GOOGLE_URL)} name="Login with Google" icon={i.Google} bg="#fff" color="#3c4043" />
        <br />

        <SocialBtn onClick={() => onWindow(GITHUB_URL)} name="Login with Github" icon={i.Github} bg="#3c4043" color="#ebe9e9" />

        <br />

        <SocialBtn onClick={() => onWindow(NAVER_URL)} name="Login with Naver" icon={i.Naver} bg="#19c260" color="#fff" />

        <br />

        {/* <SocialBtn onClick={() => onWindow(KAKAO_URL)} name="Login with Kakao" icon={Kakao} bg="#fee500" color="#000" /> */}
      </Style.LoginList>
    </Style.LoginWrapper>
  );
};

const Style = {
  LoginWrapper: styled.div`
    opacity: 1 !important;
    outline: none;
    min-width: 300px;
    /* min-height: 400px; */
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
    gap: 10px;
  `,
};

const P = styled.p`
  margin-bottom: 30px;
`;
