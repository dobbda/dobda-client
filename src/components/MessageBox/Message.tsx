import React from 'react';
import { Link } from 'src/components/common';
import { Li } from './style/Message.Element';
import getDate from 'src/lib/dateForm';
type Props = {};

const Message = (props: Props) => {
  return (
    <Li checked={false}>
      <Link href="#">
        <div className="message-information">
          <span>[ 댓글알림 ]</span>
          <span>2022-02-02</span>
        </div>
        <div className="msg-title">댓글이 달렸습니다.</div>
      </Link>
    </Li>
  );
};

export default Message;
