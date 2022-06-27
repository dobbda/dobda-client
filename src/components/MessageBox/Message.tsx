import React from 'react';
import { A } from 'src/components/common';
import { Li } from './style/Message.Element';
import getDate from 'src/lib/dateForm';
type Props = {};

const Message = (props: Props) => {
  return (
    <Li checked={false}>
      <A href="#">
        <div>[ 댓글알림 ]</div>
        <div className="msg-title">댓글이 달렸습니다.</div>
        <div>2022-02-02</div>
      </A>
    </Li>
  );
};

export default Message;
