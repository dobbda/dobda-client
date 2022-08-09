import React, { useState } from 'react';
import Image from 'next/image';
import { useClientValue } from 'src/hooks/queries/queryHooks';

import Reply from './Reply';
import { Editor, MarkDownViewer } from 'src/components/Editor';
import { Avatar, CreatedAt } from 'src/components/common';
import getDate from 'src/lib/dateForm';

import * as S from './style/style';
import More_btn_icon from 'src/assets/icon/more_btn.svg';
import Select_icon from 'src/assets/icon/select.svg';
import { ReCommentIcon } from 'src/assets/icons';
import { SubmitBtn } from '../style/Detail.Element';
type Props = {
  acceped_answer?: boolean;
};

const QComment = (props: Props) => {
  const [mdStr, setMdStr] = useState('');
  const [viewChild, setviewChild] = useState<boolean>(false);
  return (
    <S.CommentWrapper>
      <S.Header className="header" acceped_answer={props.acceped_answer}>
        <Avatar nickname="쭈꾸미" url="https://joeschmoe.io/api/v1/bb" />

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
        <MarkDownViewer content="### content viewer 입니다" />
      </S.Viewer>
      {/*Reply ---------------------------*/}
      <S.ChildView>
        <div className="show-replybtn">
          <ReCommentIcon />{' '}
          <span>
            2 <span onClick={() => setviewChild(!viewChild)}>{viewChild ? 'close' : 'show'}</span>
          </span>
        </div>
        <CreatedAt> {getDate('2001-09-28 03:00:00')}</CreatedAt>
      </S.ChildView>

      {viewChild && (
        <>
          <Reply></Reply>
          <Reply></Reply>
        </>
      )}
      <S.CommentEditor >
        <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="200px" />

				{mdStr && <SubmitBtn>등록</SubmitBtn> }

      </S.CommentEditor>
    </S.CommentWrapper>
  );
};

export default QComment;
