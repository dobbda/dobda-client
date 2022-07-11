import { FooterWrapper} from './style/Element';
import { Group, } from '../style/Card.Element';
import { Tooltip } from 'antd';

import AddBell from 'src/assets/icon/b_add_bell.svg';
import WatchIcon from 'src/assets/icon/b_watch.svg';
import ChatIcon from 'src/assets/icon/b_chat.svg';

import React from 'react';
import styled from 'styled-components';

interface Props {}
export const QFooter = (props: Props) => {
  return (
    <FooterWrapper>
        <Group>
          <Tooltip placement="right" color="cyan" title="댓글알림받기"><AddBellIcon /></Tooltip>
          <p>(10)</p>
        </Group>
        <Group>
          <Group>
            <WatchIcon />
            <p>(10)</p>
          </Group>
          <Group>
            <ChatIcon />
            <p>(10)</p>
          </Group>
        </Group>
    </FooterWrapper>
  );
};

export const RFooter = (props: Props) => {
  return (
    <FooterWrapper>
          <Group>
            <WatchIcon />
            <p>(10)</p>
          </Group>
          <Group>
            <ChatIcon />
            <p>(10)</p>
          </Group>
    </FooterWrapper>
  );
};

const AddBellIcon = styled(AddBell)`
  
`