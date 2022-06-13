import {
  Group,
  P
} from '../style/Card.Element';

import {
  HeaderWrapper,
  HeaderContent,

} from './style/CardHeader.Element';

import Qicon from '../../icon/svg/question.svg'
import Ricon from '../../icon/svg/Request.svg'
import CoinIcon from '../../icon/svg/coin.svg'

import getDate from 'src/components/lib/dateForm';


import React from 'react';


type Props = {};

export const QHeader = (props: Props) => {
  return (
  <HeaderWrapper>
    <HeaderContent>
      <Group ><Qicon /><P color="#8400EC">2200</P><CoinIcon /></Group>
      
      <Group ><p className='createdAt'>{getDate("2021-10-09T00:44:52+09:00")}</p></Group>
      
    </HeaderContent>
  </HeaderWrapper>);
};

export const RHeader = (props: Props) => {
  return (
  <HeaderWrapper>
    <HeaderContent>
      <Group ><Ricon /> <P color="#8400EC">2200</P > <CoinIcon /><P>D-3일</P></Group>
      <Group><p className='createdAt'>{getDate("2021-10-09T00:44:52+09:00",true)}</p></Group>

    </HeaderContent>
  </HeaderWrapper>);
};