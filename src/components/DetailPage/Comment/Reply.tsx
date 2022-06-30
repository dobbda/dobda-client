import React from 'react'
import Image from 'next/image'
import moment from "moment";
import "moment/locale/ko";
import getDate from 'src/lib/dateForm';
import { ReplyItem, Header } from './style/Reply.Element';
import Reply_icon from "src/assets/icon/reply.svg"
import {Avatar} from 'src/components/common';
import {FaReply} from 'react-icons/fa'
type Props = {}

const Reply = () => {
  return (
    <ReplyItem className="comment reply-items" >
      <Header className="header">
        <div className="rc-left">
          <i className="reply"> <FaReply rotate={"90deg"}/></i>
          <Avatar nickname="꼴뚜기" url='https://i.pravatar.cc/25' />
          <span>{getDate("2001-09-28 03:00:00", true)}</span>
        </div>
      </Header>

      <div className="content-viewer" >
        <span>이날 코스피는 전일 대비 7.23포인트(0.28%) 내린 2618.92에 출발했다.이날 코스피는 전일 대비 7.23포인트(0.28%) 내린 2618.92에 출발했다.</span>
      </div>
    </ReplyItem>
  );
};

export default Reply;