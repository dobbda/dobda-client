import {
  Group,
  P
} from '../style/Card.Element';

import {
  HeaderWrapper,

} from './style/Element';

import * as I from 'src/assets/icons'

import getDate from 'src/lib/dateForm';
import React from 'react';
import styled from 'styled-components';
import { Author } from 'src/types';


type QProps = {
	author: Author,
	createdAt: Date,
};
type RProps = {
	nickname: string,
	createdAt: Date,

};

export const QHeader = (props: QProps) => {
  return (
  <HeaderWrapper>
      <Group ><Qicon /><P >{props.author?.nickname}</P></Group>
      <Group ><p className='createdAt'>{getDate(props.createdAt)}</p></Group>
  </HeaderWrapper>);
};

export const RHeader = (props: RProps) => {
  return (
  <HeaderWrapper>
      <Group ><Ricon /> <P color="#8400EC">2200</P > <I.CoinIcon /><P>D-3일</P></Group>
      <Group><p className='createdAt'>{getDate("2021-10-09T00:44:52+09:00",true)}</p></Group>
  </HeaderWrapper>);
};

const Qicon = styled(I.QSVG)`
  margin-right: 10px;
`

const Ricon = styled(I.RSVG)`
  margin-right: 10px;
`