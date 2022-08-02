import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { GithubIcon } from 'src/assets/icons';
import { Wrap, Item, Text } from './style/Button';
import Link from 'next/link';
import { useQuery, useQueryClient } from 'react-query';
import { useAuth } from 'src/hooks/useAuth';
import { Auth } from 'src/types';
import { useLoginModalhandler } from 'src/hooks/useloginModalHandler';
type Props = {};

export const GithubLogin = (props: Props) => {

  return (
    <Wrap bg="#3c4043" color="#ebe9e9">
      <Item>
        <Logo />
        <Text>Login with Github</Text>
      </Item>
    </Wrap>
  );
};

const Logo = styled(GithubIcon)`
  width: 30px;
  height: 30px;
  fill: #fff;
`;
