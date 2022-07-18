import React, { useState } from 'react';
import Image from 'next/image';

import Reply from './Reply';
import { Editor, MarkDownViewer } from 'src/components/Editor';
import { Avatar } from 'src/components/common';
import getDate from 'src/lib/dateForm';

import * as S from './style/style';
import More_btn_icon from 'src/assets/icon/more_btn.svg';
import Select_icon from 'src/assets/icon/select.svg';
import { ReCommentIcon } from 'src/assets/icons';
type Props = {
  acceped_answer?: boolean;
};

const QComment = (props: Props) => {
  const [mdStr, setMdStr] = useState('');
  const [viewChild, setviewChild] = useState<boolean>(false);
  return (
    <S.CommentWrapper>
      <S.Header className="header" acceped_answer={props.acceped_answer}>
        <Avatar acceped_answer={props.acceped_answer} nickname="쭈꾸미" url="https://i.pravatar.cc/25" />

        <div className="gc-right">
          {props.acceped_answer ? (
            <Select_icon />
          ) : (
            <>
              <span>채택</span>
              <More_btn_icon />
            </>
          )}
        </div>
      </S.Header>

      <S.Viewer>
        <MarkDownViewer content='### content viewer 입니다'/>
      </S.Viewer>
      {/*Reply ---------------------------*/}
      <S.ChildView>
        <span className="show-replybtn" onClick={() => setviewChild(!viewChild)}>
          <ReCommentIcon />2 {viewChild ? '닫기' : '보기'}
        </span>
        <span className="createdAt"> {getDate('2001-09-28 03:00:00')}</span>
      </S.ChildView>
      {viewChild && (
        <>
          <Reply></Reply>
          <Reply></Reply>
          <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="300px" />
        </>
      )}
    </S.CommentWrapper>
  );
};

export default QComment;
