import React from 'react';
import Message from './Message';
import { A } from 'src/components/common';
import {Div} from './style/style'
import {createGlobalStyle} from 'styled-components'
type Props = {};


const GlobalStyle = createGlobalStyle`
  body {
    .ant-popover-inner-content{padding:0};
    .ant-popover-arrow{display:none}
  }
`;
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
