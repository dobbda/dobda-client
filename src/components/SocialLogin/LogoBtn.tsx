import React, { useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { GithubIcon, GoogleIcon, NaverIcon, KakaoIcon } from 'src/icons';
import { Wrap, Item, Text } from './style/LogoBtn.style';
import { IconBaseProps, IconType } from 'react-icons/lib';
type Props = {
  name: string;
  icon: any;
  bg: string;
  color: string;
  onClick: () => void;
};

const Logo = styled.span`
  svg {
    margin-top: 5px;
    width: 30px;
    height: 30px;
    /* fill: #fff; */
  }
`;

export const SocialBtn = (props: Props) => {
  const Icon = props.icon;
  return (
    <Wrap {...props}>
      <Item>
        <Logo css={{ color: props.color }}>
          <Icon />
        </Logo>
        <Text>{props.name}</Text>
      </Item>
    </Wrap>
  );
};
