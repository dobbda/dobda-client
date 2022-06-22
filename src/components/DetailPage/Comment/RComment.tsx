import React, { useState } from 'react';
import Image from 'next/image';

import { CommentWrapper, ChildView, Viewer, Header } from './style/style';
import Reply from './Reply';
import {Avatar} from "src/components/common"
import getDate from "src/lib/dateForm"

import MoreBtn_icon from "src/assets/icon/more_btn.svg"
import Select_icon from "src/assets/icon/select.svg"
type Props = {
  acceped_answer?:boolean,
};

const RComment = (props: Props) => {
  const [viewChild, setviewChild] = useState<boolean>(false);
  return (
    <CommentWrapper>
        <Header className="header" acceped_answer={props.acceped_answer}> 

            <Avatar acceped_answer={props.acceped_answer} nickname='쭈꾸미' url='https://i.pravatar.cc/25'/>

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
        <span onClick={() => setviewChild(!viewChild)}>답글(2개) {viewChild ? '▽숨기기' : '△보기'}</span>
        <span>   {getDate("2001-09-28 03:00:00")}</span>

      </ChildView>
      {viewChild && (
        <>
          <Reply></Reply>
          <Reply></Reply>
          <input placeholder="input form"></input>
        </>
      )}
    </CommentWrapper>
  );
};

export default RComment;
