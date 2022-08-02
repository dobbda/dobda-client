import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap, Item, Text } from './style/Button';
import { GoogleIcon } from 'src/assets/icons';
import Link from 'next/link';
import qs from 'qs';
import { useAuth } from 'src/hooks/useAuth';
import { useLoginModalhandler } from 'src/hooks/useloginModalHandler';
import { useQueryClient } from 'react-query';

type Props = {};
const Logo = styled(GoogleIcon)`
  width: 30px;
  height: 30px;
`;
export const GoogleLogin = (props: Props) => {
  
  return (
    <Wrap bg='#fff' color="#3c4043">
        <Item>
          <Logo />
          <Text>Login with Google</Text>
        </Item>
    </Wrap>
  );
};
