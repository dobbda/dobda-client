import React, { useCallback, useState, useEffect } from 'react';
import Reply from './Comment';
import { Editor, MarkDownViewer } from 'src/components/Editor';
import { Avatar, atom } from 'src/components/common';
import getDate from 'src/lib/dateForm';

import * as S from './style/style';
import More_btn_icon from 'src/assets/icon/more_btn.svg';
import Select_icon from 'src/assets/icon/select.svg';
import { ArrowIcon, ReCommentIcon } from 'src/assets/icons';
import { SubmitBtn } from '../style/Detail.Element';
import { Answer } from 'src/types';
import { useQuery } from 'react-query';
import { q } from 'src/api';
import styled from 'styled-components';
import { keys } from 'src/hooks/queries/queryKeys';
import useAddCommentMutate from 'src/hooks/mutate/useAddCommentMutate';
import { addAnswer } from 'src/api/apis/questions';
type Props = {
  data: Answer;
};

const QComment = ({ data }: Props) => {
  const [mdStr, setMdStr] = useState('');
  const [viewChild, setviewChild] = useState<boolean>(false);
  const { data: comments } = useQuery(keys.comment(data.id), () => q.getComments(data.id), {
    enabled: data.commentsCount > 0 && viewChild,
  });

  const { mutate, isLoading, isSuccess } = useAddCommentMutate(data?.id);
  const onSubmitComment = useCallback(() => {
    const answerData = { content: mdStr, answerId: data.id };
    mutate(answerData);
  }, [mdStr, data.id, mutate]);

  useEffect(() => {
    if (isSuccess) {
      setMdStr('');
    }
  }, [isSuccess]);

  return (
    <S.CommentWrapper>
      <S.Header className="header">
        <Avatar nickname={data?.author.nickname} url={data?.author.avatar} />

        <div className="gc-right">
          {/* {props.acceped_answer ? (
            <Select_icon />
          ) : ( */}
          <>
            <span>채택</span>
            <More_btn_icon />
          </>
          {/* )} */}
        </div>
      </S.Header>

      <S.Viewer>
        <MarkDownViewer content={data?.content} />
      </S.Viewer>
      {/*Reply ---------------------------*/}
      <S.ChildView>
        <div className="show-replybtn">
          <ReCommentIcon style={{ color: 'rgba(0, 0, 0, 0.6)' }} /> <span>{data.commentsCount} </span>
          <span onClick={() => setviewChild(!viewChild)}>
            <CommentRotate viewchild={viewChild.toString()} />
          </span>
        </div>
        <atom.CreatedAt> {getDate('2001-09-28 03:00:00')}</atom.CreatedAt>
      </S.ChildView>

      {viewChild && (
        <>
          {comments ? (
            comments.map((comment) => <Reply key={comment.id} data={comment} />)
          ) : (
            <atom.NoData>등록된 댓글이 없습니다. 댓글을 등록하실수 있습니다.</atom.NoData>
          )}
        </>
      )}
      <S.CommentEditor>
        <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="200px" />
        {mdStr && (
          <SubmitBtn onClick={onSubmitComment} loading={isLoading}>
            등록
          </SubmitBtn>
        )}
      </S.CommentEditor>
    </S.CommentWrapper>
  );
};

export default QComment;

const CommentRotate = styled(ArrowIcon)<{ viewchild: string }>`
  cursor: pointer;
  margin-top: 7px;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  transform: ${({ viewchild }) => (viewchild ? 'rotate(90deg)' : null)};
`;
