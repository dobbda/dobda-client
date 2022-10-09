import React, { useCallback, useEffect, useState } from 'react';
import { message } from 'antd';
import { atom, Loading, Tag } from '../common';
import * as S from './style/Detail.style';
import { Avatar } from '../common';
import { AnswerCp } from './Comment/';
import getDate from 'src/lib/utils/dateForm';

import { i } from 'src/icons';
import { Editor } from 'src/components/Editor';
import { HtmlViewer } from 'src/components/Editor';
import { Question, QuestionDetail } from 'src/types';
import { useQuery, useQueryClient } from 'react-query';
import { q } from 'src/api';
import { keys, useAddAnswer, useAuth, useDelete, useDidMountEffect, useErrMsg, useQueryCount } from 'src/hooks';
import { WriteQuestion } from '../Write';
import { Button } from 'src/components/common';
import { useRouter } from 'next/router';
type Props = {
  children?: React.ReactElement; // commentComponent
  data: QuestionDetail;
};

const QDetail = ({ children, data }: Props) => {
  const { setCount, setInfCount } = useQueryCount();
  useEffect(() => {
    /**조회수 */
    setInfCount({ queryKey: keys.questions(), changeKey: 'watch', findId: data.id, countVal: data.watch });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const queryClient = useQueryClient();
  const router = useRouter();
  const { auth, refetch } = useAuth();
  const [mdStr, setMdStr] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const { data: answers } = useQuery(keys.answers(data?.id), () => q.getAnswers(data.id), {
    enabled: data?.answersCount > 0,
  });

  const del = useDelete<Question>(data?.id, keys.qDetail(data.id), data?.id);
  const add = useAddAnswer(data?.id);

  const onSubmitAnswer = useCallback(async () => {
    if (mdStr.length < 5) return message.error('5글자 이상 작성 하여야 합니다.');
    const answerData = { content: mdStr, qid: data.id };
    add.mutate(answerData);
  }, [mdStr, data.id, add]);

  const errMsg = useErrMsg();
  useEffect(() => {
    if (add.isSuccess) {
      message.success('답변이 등록되었습니다.');
      setMdStr('');
    }
    if (del.isSuccess) {
      router.replace('/');
    }

    if (add.isError || del.isError) {
      message.error(errMsg);
    }
  }, [add.isError, add.isSuccess, del.isError, del.isSuccess, errMsg, router]);
  const removeHandler = useCallback(() => {
    if (confirm('삭제시 복구가 불가능 합니다')) {
      del.mutate(q.delQuestion);
    }
  }, [del]);
  return (
    <S.DetailContainer>
      {isEdit && data ? (
        <WriteQuestion data={data} setIsEdit={setIsEdit} />
      ) : (
        <>
          <S.ContentWrapper>
            <S.ContentHeader>
              <div className="detailInfo">
                <Avatar nickname={data?.author.email} url={data?.author.avatar} id={data?.author.id} />
                <atom.CreatedAt>{getDate(data?.createdAt)}</atom.CreatedAt>
              </div>
              <S.Title>
                <i.Q /> {data?.title}
              </S.Title>

              <atom.TagWrapper>
                <S.CoinWrapper>
                  <i.Coin />
                  <p>{data?.coin}</p>
                </S.CoinWrapper>
                {data?.tagNames && data?.tagNames.map((tag) => <Tag key={tag.name}>{tag.name}</Tag>)}
              </atom.TagWrapper>
              {auth?.id == data.author?.id && (
                <S.OnyUser className="only-author">
                  <Button onClick={() => setIsEdit(true)} types="primary">
                    수정
                  </Button>
                  <Button onClick={removeHandler} types="primary">
                    삭제
                  </Button>{' '}
                </S.OnyUser>
              )}
            </S.ContentHeader>
            <S.ContentViewWrapper>
              <HtmlViewer content={data?.content} />
            </S.ContentViewWrapper>
          </S.ContentWrapper>

          <S.EditorWrapper>
            <h3>답변을 작성해주세요</h3>
            <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="400px" />
            <Button onClick={onSubmitAnswer} types="secondary" $block $fill>
              <Loading loading={add.isLoading} /> 등록
            </Button>
          </S.EditorWrapper>

          <S.AnswerContainer>
            {answers && answers[0]?.id ? (
              answers.map((answer) => <AnswerCp key={answer.id} answer={answer} question={data} />)
            ) : (
              <S.NodataWrapper>등록된 답변이 없습니다. 답변을 등록해보세요.</S.NodataWrapper>
            )}
          </S.AnswerContainer>
        </>
      )}
    </S.DetailContainer>
  );
};

export default QDetail;
