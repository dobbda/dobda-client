import {
  Group,
  P
} from '../style/Card.Element';

import {
  HeaderWrapper,

} from './style/Element';

import QSVG from 'src/assets/icon/question.svg'
import RSVG from 'src/assets/icon/request.svg'
import CoinIcon from 'src/assets/icon/coin.svg'

import getDate from 'src/lib/dateForm';
import React from 'react';
import styled from 'styled-components';


type Props = {};

export const QHeader = (props: Props) => {
  return (
  <HeaderWrapper>
      <Group ><Qicon /><P color="#8400EC">2200</P><CoinIcon /></Group>
      <Group ><p className='createdAt'>{getDate("2021-10-09T00:44:52+09:00")}</p></Group>
  </HeaderWrapper>);
};

export const RHeader = (props: Props) => {
  return (
  <HeaderWrapper>
      <Group ><Ricon /> <P color="#8400EC">2200</P > <CoinIcon /><P>D-3일</P></Group>
      <Group><p className='createdAt'>{getDate("2021-10-09T00:44:52+09:00",true)}</p></Group>
  </HeaderWrapper>);
};

const Qicon = styled(QSVG)`
  margin-right: 10px;
`

const Ricon = styled(RSVG)`
  margin-right: 10px;
`