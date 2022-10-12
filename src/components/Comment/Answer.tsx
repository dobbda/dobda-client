import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';

import ReplyCp from './Reply';
import { Editor, HtmlViewer } from 'src/components/Editor';
import { Avatar, atom, Loading, Button } from 'src/components/common';
import getDate from 'src/lib/utils/dateForm';
import * as S from './style/style';
import { i } from 'src/icons';
import { Answer, QuestionDetail } from 'src/types';
import { QueryClient, useQuery, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { keys, useDelete, useAddComment, useErrMsg, useDidMountEffect, useAuth } from 'src/hooks';
import { Popover, message as m } from 'antd';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { EditType } from 'src/types/content-type';
import Edit from './Edit';

type Props = {
  answer: Answer;
  question: QuestionDetail;
};

const AnswerCp = ({ answer, question }: Props) => {
  const [showEdit, setShowEdit] = useState(false);
  const router = useRouter();
  const { id: qid } = router.query;
  const queryClient = useQueryClient();
  const { errMsg } = useErrMsg();
  const [isEdit, setisEdit] = useState(false);
  const [mdStr, setMdStr] = useState('');
  const [viewChild, setviewChild] = useState<boolean>(false);
  const { data: comments } = useQuery(keys.comment(Number(qid), answer.id), () => q.getComments(answer.id), {
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

  const removeHandler = useCallback(() => {
    if (confirm('삭제시 복구가 불가능 합니다')) {
      del.mutate(q.delAnswers);
    }
  }, [del]);

  const accept = async () => {
    if (confirm('채택 하시겠습니까?.')) {
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
          {answer.accepted && <i.Accepted css={{ marginBottom: '5px' }} />}

          <>
            <Popover
              trigger="click"
              placement="bottom"
              content={
                auth?.id == answer.author.id ? (
                  <>
                    <Button key="edit" types="primary" onClick={() => setShowEdit(!showEdit)}>
                      수정
                    </Button>
                    <Btn onClick={removeHandler} key="delete" types="danger" css={{ width: '100%' }}>
                      삭제
                    </Btn>
                  </>
                ) : (
                  <Btn onClick={removeHandler} key="delete" types="danger" css={{ width: '100%' }}>
                    신고
                  </Btn>
                )
              }
            >
              <span className="moreBtn">
                <i.More />
              </span>
            </Popover>
          </>
          {/* )} */}
        </atom.Flex>
      </S.Header>

      <S.Viewer>
        {showEdit ? (
          <Edit id={answer.id} setCancel={setShowEdit} content={answer.content} type="answers" />
        ) : (
          <HtmlViewer content={answer?.content} />
        )}
      </S.Viewer>
      {/*Reply ---------------------------*/}
      <S.ChildView>
        <div className="show-replybtn">
          <i.ReComment style={{ color: 'rgba(0, 0, 0, 0.6)' }} /> <span>{answer.commentsCount} </span>
          <span onClick={() => setviewChild(!viewChild)}>
            <CommentRotate view={viewChild.toString()} />
          </span>
        </div>
        <atom.Flex>
          {showAcceptButton && (
            <Button onClick={accept} types="primary">
              채택하기
            </Button>
          )}

          <atom.CreatedAt> {getDate(answer?.createdAt)}</atom.CreatedAt>
        </atom.Flex>
      </S.ChildView>

      {viewChild && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: [0.5, 1], height: 'auto', transition: { duration: 0.15 } }}
        >
          {comments ? (
            comments.map((comment) => <ReplyCp key={comment.id} reply={comment} />)
          ) : (
            <atom.NoData>등록된 댓글이 없습니다. 댓글을 등록할 수 있습니다.</atom.NoData>
          )}
        </motion.div>
      )}
      <S.CommentEditor>
        <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="200px" />
        {mdStr && (
          <Button onClick={onSubmitComment} types="black" $block $fill css={{ marginBottom: '5px' }}>
            <Loading loading={addReply.isLoading} />
            등록
          </Button>
        )}
      </S.CommentEditor>
    </S.CommentWrapper>
  );
};

export default AnswerCp;
type Rotate = { view: string };
const CommentRotate = styled(i.Arrow)<Rotate>`
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

const Transition = styled(motion.div)``;
