import React, { useState } from 'react';
import Image from 'next/image';
import * as S from './style/style';
import Reply from './Reply';
import More_btn_icon from "src/assets/icon/more_btn.svg"
import Select_icon from "src/assets/icon/select.svg"
import {Editor} from 'src/components/Editor'

import {Avatar} from "src/components/common"
import getDate from "src/lib/dateForm"

type Props = {
  acceped_answer?:boolean,
};

const QComment = (props: Props) => {
  const [mdStr, setMdStr] = useState("")
  const [viewChild, setviewChild] = useState<boolean>(false);
  return (
    <S.CommentWrapper>
        <S.Header className="header" acceped_answer={props.acceped_answer}> 

            <Avatar acceped_answer={props.acceped_answer} nickname='쭈꾸미' url='https://i.pravatar.cc/25'/>

          <div className="gc-right">
            {props.acceped_answer ? <Select_icon/> : <><span>채택</span><More_btn_icon /></>}
          </div>
        </S.Header>

        <S.Viewer >
          <span>
            댓글 뷰어 코스닥 지수도 하락 출발해 870선 등락 OECD 등 경제성장 전망치 하향 조정 전날 美 주요 3대 지수 하락 마감 영향
            코스피 코스닥 시총 상위 종목 대부분 코스닥 지수도 하락 출발해 870선 등락 OECD 등 경제성장 전망치 하향 조정 전날 美
            주요 3대 지수 하락 마감 영향 코스피 코스닥 시총 상위 종목 대부분 파란불
          </span>
        </S.Viewer>
{/*Reply ---------------------------*/}
      <S.ChildView>
        <span onClick={() => setviewChild(!viewChild)}>답글(2개) {viewChild ? '▽숨기기' : '△보기'}</span>
        <span>   {getDate("2001-09-28 03:00:00")}</span>

      </S.ChildView>
      {viewChild && (
        <>
          <Reply></Reply>
          <Reply></Reply>
          <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="300px"/>

        </>
      )}
    </S.CommentWrapper>
  );
};

export default QComment;
