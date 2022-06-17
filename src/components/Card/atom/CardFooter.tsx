import { FooterWrapper, FooterContent} from './style/CardFooter.Element';
import { Group, P,AddBell} from '../style/Card.Element';
import { Tooltip } from 'antd';

import AddBellIcon from 'src/assets/icon/b_add_bell.svg';
import WatchIcon from 'src/assets/icon/b_watch.svg';
import ChatIcon from 'src/assets/icon/b_chat.svg';

import React from 'react';

interface Props {}
export const QFooter = (props: Props) => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Group>
          <AddBell><Tooltip placement="right" color="cyan" title="댓글알림받기"><AddBellIcon /></Tooltip></AddBell>
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
      </FooterContent>
    </FooterWrapper>
  );
};

export const RFooter = (props: Props) => {
  return (
    <FooterWrapper>
      <FooterContent>

          <Group>
            <WatchIcon />
            <p>(10)</p>
          </Group>
          <Group>
            <ChatIcon />
            <p>(10)</p>
          </Group>

      </FooterContent>
    </FooterWrapper>
  );
};
