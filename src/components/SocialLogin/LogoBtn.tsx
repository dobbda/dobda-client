import React, { useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { GithubIcon,GoogleIcon,NaverIcon, KakaoIcon } from 'src/assets/icons';
import { Wrap, Item, Text } from './style/LogoBtn.style';
import { IconBaseProps, IconType } from 'react-icons/lib';
type Props = {
	name: string,
	icon: any
	bg:string
	color:string
};

const Logo = styled.span`
svg{
	margin-top:5px;
  width: 30px;
  height: 30px;
  fill: #fff;
}

`;

export const SocialBtn = ({name, icon, bg, color}:Props) => {
	const Icon = icon
  return (
    <Wrap bg={bg} color={color}>
      <Item>
        <Logo><Icon/></Logo>
        <Text>{name}</Text>
      </Item>
    </Wrap>
  );
};


