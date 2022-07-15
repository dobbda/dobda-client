import React, { useState } from 'react';
import Image from 'next/image';

import { CommentWrapper, ChildView, Viewer, Header } from './style/style';
import Reply from './Reply';
import {Avatar} from "src/components/common"
import getDate from "src/lib/dateForm"

import MoreBtn_icon from "src/assets/icon/more_btn.svg"
import Select_icon from "src/assets/icon/select.svg"
import {Editor} from 'src/components/Editor';
import { ReCommentIcon } from 'src/assets/icons';
type Props = {
  acceped_answer?:boolean,
};

const RComment = (props: Props) => {
  const [viewChild, setviewChild] = useState<boolean>(false);
  const [mdStr, setMdStr] = useState("")
  return (
    <CommentWrapper>
        <Header className="header" acceped_answer={props.acceped_answer}> 

            <Avatar acceped_answer={props.acceped_answer} nickname='쭈꾸미' url='https://joeschmoe.io/api/v1/random'/>

          <div className="gc-right">
            {props.acceped_answer ? "진행 중..." : <><span>채택</span><MoreBtn_icon /></>}
          </div>
        </Header>

        <Viewer >
          <span>
            댓글 뷰어 코스닥 지수도 하락 출발해 870선 등락 OECD 등 경제성장 전망치 하향 조정 전날 美 주요 3대 지수 하락 마감 영향
            코스피 코스닥 시총 상위 종목 대부분 코스닥 지수도 하락 출발해 870선 등락 OECD 등 경제성장 전망치 하향 조정 전날 美
            주요 3대 지수 하락 마감 영향 코스피 코스닥 시총 상위 종목 대부분 파란불
          </span>
        </Viewer>
{/*Reply ---------------------------*/}
      <ChildView>
      <span className="show-replybtn" onClick={() => setviewChild(!viewChild)}>
          <ReCommentIcon />2 {viewChild ? '닫기' : '보기'}
        </span>
        <span className="createdAt"> {getDate('2001-09-28 03:00:00')}</span>

      </ChildView>
      {viewChild && (
        <>
          <Reply></Reply>
          <Reply></Reply>
          <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="300px"/>

        </>
      )}
    </CommentWrapper>
  );
};

export default RComment;
