import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';
import { Wrap, Item, Text } from './style/Button';
type Props = {};

export const GithubLogin = (props: Props) => {
  return (

        <Wrap name="github">
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