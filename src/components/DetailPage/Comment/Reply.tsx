import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import 'moment/locale/ko';
import getDate from 'src/lib/dateForm';
import { ReplyItem, Header } from './style/Reply.Element';
import { Avatar } from 'src/components/common';
import { ReplyIcon } from 'src/assets/icons';
import { MarkDownViewer } from 'src/components/Editor';

type Props = {};

const Reply = () => {
  return (
    <ReplyItem className="comment reply-items">
      <Header className="header">
        <div className="rc-left">
          <i className="reply">
            {' '}
            <ReplyIcon />
          </i>
          <Avatar nickname="꼴뚜기" url="https://joeschmoe.io/api/v1/cc" />
          <span>{getDate('2001-09-28 03:00:00', true)}</span>
        </div>
      </Header>

      <div className="content-viewer">
        <MarkDownViewer content="### content viewer 입니다" />
      </div>
    </ReplyItem>
  );
};

export default Reply;
