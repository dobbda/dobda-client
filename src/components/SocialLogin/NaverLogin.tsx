import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Wrap, Item, Text } from './style/Button';
import { NaverIcon } from 'src/assets/icons';
import Link from 'next/link';
type Props = {};
const Logo = styled(NaverIcon)`
  width: 30px;
  height: 30px;
  /* background-color: #19ce60; */
`;
export const NaverLogin = (props: Props) => {

  return (
    <Wrap bg="#19c260" color="#fff" >
      <Item>
        <Logo />
        <Text>Login with Naver</Text>
      </Item>
    </Wrap>
  );
};
