import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap, Item, Text } from './style/Button';
import qs from 'qs';
import { KakaoIcon } from 'src/assets/icons';
import Link from 'next/link';

type Props = {};
const Logo = styled(KakaoIcon)`
  width: 30px;
  height: 30px;
`;
export const KakaoLogin = (props: Props) => {

  return (
    <Wrap bg="#fee500" color="#000">
      <Item>
        <Logo />
        <Text>Login with Kakao</Text>
      </Item>
    </Wrap>
  );
};
