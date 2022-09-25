import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';

import ReplyCp from './Reply';
import { Editor, MarkDownViewer } from 'src/components/Editor';
import { Avatar, atom, Loading } from 'src/components/common';
import getDate from 'src/lib/dateForm';
import { EditAnswer } from './EditAnswer';
import * as S from './style/style';
import { ArrowIcon, MoreIcon, ReCommentIcon, AcceptedIcon } from 'src/assets/icons';
import { SubmitBtn } from '../style/Detail.style';
import { Answer, QuestionDetail } from 'src/types';
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { keys, useDelete, useAddComment, useErrMsg, useDidMountEffect, useAuth } from 'src/hooks';
import { Button, Popover, message as m } from 'antd';
type Props = {
  answer: Answer;
  question: QuestionDetail;
};

const AnswerCp = ({ answer, question }: Props) => {
  const queryClient = useQueryClient();
  const errMsg = useErrMsg();
  const [isEdit, setisEdit] = useState(false);
  const [mdStr, setMdStr] = useState('');
  const [viewChild, setviewChild] = useState<boolean>(false);
  const { data: comments } = useQuery([keys.comment(answer.id), answer?.id], () => q.getComments(answer.id), {
    enabled: answer.commentsCount > 0 && viewChild,
  });

  const addReply = useAddComment(answer?.id);
  const del = useDelete(answer?.id, keys.answers(answer?.questionId));
  const { auth } = useAuth();
  const onSubmitComment = useCallback(() => {
    addReply.mutate({ content: mdStr, aid: answer.id });
  }, [addReply, mdStr, answer.id]);

  useDidMountEffect(() => {
    if (addReply.isSuccess) {
      setMdStr('');
    }
    if (addReply.isError) {
      m.error(errMsg);
    }
    if (del.isError) {
      m.error(errMsg);
    }
  }, [addReply.isError, addReply.isSuccess, del.error?.response, del.isError, errMsg]);

  const accept = async () => {
    if (confirm('채택 합니다.')) {
      if (await q.accept(answer.id)) {
        queryClient.setQueryData(keys.qDetail(answer.questionId), (data: QuestionDetail) => {
          data.acceptedAnswerId = answer.id;
          return data;
        });
        queryClient.invalidateQueries(keys.answers(answer.questionId));
      }
    }
  };
  const showAcceptButton = auth && !question.acceptedAnswerId && question.authorId === auth.id && answer.authorId !== auth.id;
  return (
    <S.CommentWrapper>
      <S.Header className="header">
        <Avatar nickname={answer?.author.nickname} url={answer?.author.avatar} id={answer?.author.id} />
        <atom.Flex>
          {answer.accepted && <AcceptedIcon css={{ marginBottom: '5px' }} />}

          <>
            <Popover
              trigger="click"
              placement="bottom"
              content={
                <>
                  <Btn type="primary" key="edit" ghost>
                    수정
                  </Btn>
                  <Btn onClick={() => del.mutate(q.delAnswers)} type="primary" key="delete" danger ghost>
                    삭제
                  </Btn>
                </>
              }
            >
              <span className="moreBtn">
                <MoreIcon />
              </span>
            </Popover>
          </>
          {/* )} */}
        </atom.Flex>
      </S.Header>

      <S.Viewer>
        <MarkDownViewer content={answer?.content} />
      </S.Viewer>
      {/*Reply ---------------------------*/}
      <S.ChildView>
        <div className="show-replybtn">
          <ReCommentIcon style={{ color: 'rgba(0, 0, 0, 0.6)' }} /> <span>{answer.commentsCount} </span>
          <span onClick={() => setviewChild(!viewChild)}>
            <CommentRotate view={viewChild.toString()} />
          </span>
        </div>
        <atom.Flex>
          {showAcceptButton && (
            <Button css={{ borderRadius: '1em', marginRight: '1em', color: '#08DA11' }} onClick={accept}>
              채택하기
            </Button>
          )}

          <atom.CreatedAt> {getDate(answer?.createdAt)}</atom.CreatedAt>
        </atom.Flex>
      </S.ChildView>

      {viewChild && (
        <>
          {comments ? (
            comments.map((comment) => <ReplyCp key={comment.id} reply={comment} />)
          ) : (
            <atom.NoData>등록된 댓글이 없습니다. 댓글을 등록할 수 있습니다.</atom.NoData>
          )}
        </>
      )}
      <S.CommentEditor>
        <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="200px" />
        {mdStr && (
          <SubmitBtn onClick={onSubmitComment}>
            <Loading loading={addReply.isLoading} />
            등록
          </SubmitBtn>
        )}
      </S.CommentEditor>
    </S.CommentWrapper>
  );
};

export default AnswerCp;
type Rotate = { view: string };
const CommentRotate = styled(ArrowIcon)<Rotate>`
  cursor: pointer;
  margin-top: 7px;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  transform: ${({ view }) => (view == 'true' ? 'rotate(90deg)' : null)};
`;

const Btn = styled(Button)`
  display: block;
  width: 55px;
`;
