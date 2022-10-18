import React from 'react';
import { Link } from 'src/components/common';
import { Div } from './style/style';
import { Li } from './style/Message.style';
type Props = {};

export const Alarms = (props: Props) => {
  return (
    <Div>
      <h1>최근 알림</h1>
      <ul>
        <Message />
        <Message />
        <Message />
      </ul>
      <div className="show-all-messages">
        <Link href="#">전체알림 보기</Link>
      </div>
    </Div>
  );
};

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
