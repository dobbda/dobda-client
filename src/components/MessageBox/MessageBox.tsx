import React from 'react';
import Message from './Message';
import { A } from 'src/components/common';
import {Div} from './style/style'

type Props = {};

export const MessageBox = (props: Props) => {
  return (
    <Div>
      <h1 >최근 알림</h1>
      <ul>
        <Message />
        <Message />
        <Message />
      </ul>
      <div className='show-all-messages'>
        <A href="#">전체알림 보기</A>
      </div>
    </Div>
  );
};
