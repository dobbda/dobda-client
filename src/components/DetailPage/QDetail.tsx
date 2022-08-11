import React, { useState } from 'react';

import { atom, Tag } from '../common';
import * as S from './style/Detail.Element';
import { Avatar } from '../common';
import { QAnswer } from './Comment/';
import getDate from 'src/lib/dateForm';

import { CoinIcon } from 'src/assets/icons';
import Question_icon from 'src/assets/icon/question.svg';
import { Button } from 'antd';
import styled from 'styled-components';
import { Editor } from 'src/components/Editor';
import { MarkDownViewer, ReactMarkdownViewer } from 'src/components/Editor';
import { QuestionDetail } from 'src/types';
import { useQuery } from 'react-query';
import { q } from 'src/api';

type Props = {
  children?: React.ReactElement; // commentComponent
  data: QuestionDetail;
};

const QDetail = ({ children, data }: Props) => {
  const [answersFilter, setAnswersFilter] = useState();
  const [mdStr, setMdStr] = useState('');
  const { data: answers } = useQuery(['question', { detail: data?.id }, 'answers'], () => q.getAnswers(data.id), {
    enabled: data?.answersCount > 0,
  });

  return (
    <S.DetailContainer>
      <S.ContentWrapper>
        <S.ContentHeader>
          {/* <S.CoinWrapper>
                <CoinIcon />
                <p>9999</p>
              </S.CoinWrapper> */}
          <div className="detailInfo">
            <div>
              <Avatar nickname={data?.author.email} url={data?.author.avatar} />
              <S.CoinWrapper>
                <CoinIcon />
                <p>{data?.coin}</p>
              </S.CoinWrapper>
            </div>
            <atom.CreatedAt>{getDate(data?.createdAt)}</atom.CreatedAt>
          </div>
          <Question_icon />
          <S.Title> {data?.title}</S.Title>
          <S.TagWrapper>
            {data?.tagNames &&
              data?.tagNames.map((tag) => (
                <Tag key={tag.name} bg={true}>
                  {tag.name}
                </Tag>
              ))}
          </S.TagWrapper>
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

        <S.SubmitBtn>등록</S.SubmitBtn>
      </S.EditorWrapper>

      <S.AnswerContainer>
				{
					answers&& answers[0]?.id
					? answers.map((answer)=><QAnswer key={answer.id} data={answer} />)
					: <atom.NoData>등록된 답변이 없습니다. 답변을 등록하실수 있습니다.</atom.NoData>
				}
        
      </S.AnswerContainer>
    </S.DetailContainer>
  );
};

export default QDetail;
