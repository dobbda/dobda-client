import React, { useCallback, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { atom, Tag } from '../common';
import * as S from './style/Detail.Element';
import { Avatar } from '../common';
import { QAnswer } from './Comment/';
import getDate from 'src/lib/dateForm';

import { CoinIcon } from 'src/assets/icons';
import Question_icon from 'src/assets/icon/question.svg';
import styled from 'styled-components';
import { Editor } from 'src/components/Editor';
import { MarkDownViewer, ReactMarkdownViewer } from 'src/components/Editor';
import { QuestionDetail } from 'src/types';
import { useQuery } from 'react-query';
import { q } from 'src/api';
import { keys } from 'src/hooks/queries/queryKeys';
import useAddAnswerMutate from 'src/hooks/mutate/useAddAnswerMutate';
type Props = {
  children?: React.ReactElement; // commentComponent
  data: QuestionDetail;
};

const QDetail = ({ children, data }: Props) => {
  const [mdStr, setMdStr] = useState('');
  const { data: answers } = useQuery(keys.answers(data?.id), () => q.getAnswers(data.id), {
    enabled: data?.answersCount > 0,
  });

  const { isError, data: addAnswerRes, isLoading, mutate, isSuccess } = useAddAnswerMutate(data?.id);
  const onSubmitAnswer = useCallback(() => {
    const answerData = { content: mdStr, qid: data.id };
    mutate(answerData);
  }, [mdStr, data?.id, mutate]);

  useEffect(() => {
    if (isSuccess) {
      toast.success('답변이 등록되었습니다.', { autoClose: 1000 });
      setMdStr('');
    }
  }, [isError, isSuccess]);

  return (
    <S.DetailContainer>
      <S.ContentWrapper>
        <S.ContentHeader>
          <div className="detailInfo">
            <Avatar nickname={data?.author.email} url={data?.author.avatar} />

            <atom.CreatedAt>{getDate(data?.createdAt)}</atom.CreatedAt>
          </div>

          <Question_icon />
          <S.Title> {data?.title}</S.Title>

          <atom.TagWrapper>
            <S.CoinWrapper>
              <CoinIcon />
              <p>{data?.coin}</p>
            </S.CoinWrapper>
            {data?.tagNames &&
              data?.tagNames.map((tag) => (
                <Tag key={tag.name} bg={true}>
                  {tag.name}
                </Tag>
              ))}
          </atom.TagWrapper>
        </S.ContentHeader>

        <S.ContentViewWrapper>
          <MarkDownViewer content={data?.content} />
        </S.ContentViewWrapper>
      </S.ContentWrapper>
      <S.EditorWrapper>
        <h3>답변을 작성해주세요</h3>
        <br />
        <Editor mdStr={mdStr} setMdStr={setMdStr} onClickShow={true} height="400px" />
        <br />
        <br />

        <S.SubmitBtn onClick={onSubmitAnswer} loading={isLoading}>
          등록
        </S.SubmitBtn>
      </S.EditorWrapper>

      <S.AnswerContainer>
        {answers && answers[0]?.id ? (
          answers.map((answer) => <QAnswer key={answer.id} data={answer} />)
        ) : (
          <atom.NoData>등록된 답변이 없습니다. 답변을 등록하실수 있습니다.</atom.NoData>
        )}
      </S.AnswerContainer>
      <ToastContainer position="top-center" hideProgressBar draggable />
    </S.DetailContainer>
  );
};

export default QDetail;
