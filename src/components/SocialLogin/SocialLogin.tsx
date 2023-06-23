import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { SocialBtn } from './LogoBtn';

import { useQueryClient } from 'react-query';
import { Logo } from 'src/components/common';
import { useAuth, useLoginModalhandler } from 'src/hooks';
import { Githubi, Googlei, Naveri } from 'src/icons';
import { Auth } from 'src/interface';
import Suport from '../Admin/support';
import { GITHUB_URL, GOOGLE_URL, NAVER_URL } from './CDN_URL';
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
      <div css={{ marginBottom: '2rem' }}>
        <Logo b={true} height="28px" />
      </div>

      <P>간편 로그인만 가능합니다.</P>
      <Style.LoginList>
        <SocialBtn onClick={() => onWindow(GOOGLE_URL)} name="Login with Google" icon={Googlei} bg="#fff" color="#3c4043" />

        <SocialBtn onClick={() => onWindow(NAVER_URL)} name="Login with Naver" icon={Naveri} bg="#19c260" color="#fff" />

        <SocialBtn onClick={() => onWindow(GITHUB_URL)} name="Login with Github" icon={Githubi} bg="#3c4043" color="#ebe9e9" />

        {/* <SocialBtn onClick={() => onWindow(KAKAO_URL)} name="Login with Kakao" icon={Kakao} bg="#fee500" color="#000" /> */}
      </Style.LoginList>
      <Suport onlyPolicy css={{ marginTop: '10px' }} />
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
    gap: 1.4rem;
  `,
};

const P = styled.p`
  margin-bottom: 15px;
`;
