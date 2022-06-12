import React from 'react'
import Image from 'next/image'
import moment from "moment";
import "moment/locale/ko";

import { ReplyItem, Header } from './style/Reply.Element';
import Reply_icon from "../../icon/svg/reply.svg"

type Props = {}

const Reply = () => {
  return (
    <ReplyItem className="comment reply-items" >
      <Header className="header">
        <div className="rc-left">
          <div><Reply_icon /></div>
          <Image height={25} width={25} src="https://i.pravatar.cc/25" alt='avatar' className='avatar'/>
          <h3>오징어</h3>
          <span>{moment("2021-10-09T00:44:52+09:00").fromNow()}</span>
        </div>
      </Header>

      <div className="content-viewer" >
        <span>이날 코스피는 전일 대비 7.23포인트(0.28%) 내린 2618.92에 출발했다.이날 코스피는 전일 대비 7.23포인트(0.28%) 내린 2618.92에 출발했다.</span>
      </div>
    </ReplyItem>
  );
};

export default Reply;