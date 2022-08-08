import { FooterWrapper} from './style/Element';
import { Group, P, } from '../style/Card.Element';
import { Tooltip } from 'antd';

import * as I from 'src/assets/icons'

import React from 'react';
import styled from 'styled-components';

interface Props {}
export const QFooter = (props: Props) => {
  return (
    <FooterWrapper>	
        <Group>
          <Group>
            <I.WatchIcon />
            <p>(10)</p>
          </Group>
          <Group>
            <I.ChatIcon />
            <p>(10)</p>
          </Group>
        </Group>
				<Group ><P color="#8400EC">2200</P><I.CoinIcon /></Group>

    </FooterWrapper>
  );
};

export const RFooter = (props: Props) => {
  return (
    <FooterWrapper>
          <Group>
            <I.WatchIcon />
            <p>(10)</p>
          </Group>
          <Group>
            <I.ChatIcon />
            <p>(10)</p>
          </Group>
    </FooterWrapper>
  );
};

const AddBellIcon = styled(I.AddBellIcon)`
  cursor: pointer;
  :hover path{
    color: blue;
  }
`

