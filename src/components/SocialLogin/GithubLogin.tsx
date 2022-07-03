import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useSession, signIn, signOut } from "next-auth/react"


import { GoMarkGithub } from 'react-icons/go';
import { Wrap, Item, Text } from './style/Button';
type Props = {};

export const GithubLogin = (props: Props) => {
  const { data} = useSession()
  useEffect(() => {
    console.log("data:  ", data)
  }, [data])
  
  const onClickSignIn = () => {
    // signIn("google",{ callbackUrl: 'http://localhost:3000/test' })
    signIn("github")
  }
  return (

        <Wrap name="github" onClick={onClickSignIn}>
          <Item>
            <Logo/>
            <Text >Github 계정으로 로그인</Text>
          </Item>
        </Wrap>

  );
};

const Logo = styled(GoMarkGithub)`
  width: 30px;
  height: 30px;
  fill:#fff;
`