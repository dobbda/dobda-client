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




import React from 'react';


type Props = {};

export const QHeader = (props: Props) => {
  return (
  <HeaderWrapper>
    <HeaderContent>
      <Group><Qicon /><p>한시간전</p></Group>
      <Group color="#8400EC"><p>2200</p><CoinIcon /></Group>
    </HeaderContent>
  </HeaderWrapper>); 
};

export const RHeader = (props: Props) => {
  return (
  <HeaderWrapper>
    <HeaderContent>
      <Group><Ricon /><p>한시간전</p></Group>
      <Group color="#8400EC"><P>D-3일</P><p>2200</p><CoinIcon /></Group>
    </HeaderContent>
  </HeaderWrapper>);
};